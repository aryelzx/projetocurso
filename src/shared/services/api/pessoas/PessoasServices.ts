import { Environment } from "../../../environment"
import { Api } from "../axios-config"

interface IListagemPessoa {
  id: number
  nomeCompleto: string
  email: string
  cidadeId: number
}
interface IDetalhesPessoa {
  id: number
  nomeCompleto: string
  email: string
  cidadeId: number
}
type TPessoasComTotalCount = {
  data: IListagemPessoa[]
  totalCount: number
}

const getAll = async (
  page = 1,
  filter = ""
): Promise<TPessoasComTotalCount | Error> => {
  try {
    const urlRelativa = `/pessoas?_page=${page}&_limit=${Environment.LIMITE_DE_LINHAS}&nomeCompleto_like=${filter}`

    const { data, headers } = await Api.get(urlRelativa)

    if (data) {
      return {
        data,
        totalCount: headers["x-total-count"] || Environment.LIMITE_DE_LINHAS,
      }
    }
    return new Error("Erro ao listar os registros.")
  } catch (error) {
    console.error(error)
    return new Error(
      (error as { message: string }).message || "Erro ao listar os registros."
    )
  }
}

const getById = async (id: number): Promise<IDetalhesPessoa | Error> => {
  try {
    const urlRelativa = `/pessoas/${id}`

    const { data } = await Api.get(urlRelativa)

    if (data) {
      return data
    }
    return new Error("Erro ao consultar os registros.")
  } catch (error) {
    console.log(error)
    return new Error(
      (error as { message: string }).message ||
        "Erro ao consultar os registros."
    )
  }
}

const create = async (
  dataToCreate: Omit<IDetalhesPessoa, "id">
): Promise<number | Error> => {
  try {
    const urlRelativa = `/pessoas`
    const { data } = await Api.post<IDetalhesPessoa>(urlRelativa, dataToCreate)

    if (data) {
      return data.id
    }
    return new Error("Erro ao criar o registro.")
  } catch (error) {
    console.log(error)
    return new Error(
      (error as { message: string }).message || "Erro ao criar o registro."
    )
  }
}

const updateById = async (
  id: number,
  dataToUpdate: IDetalhesPessoa
): Promise<void | Error> => {
  try {
    const urlRelativa = `/pessoas/${id}`
    await Api.put(urlRelativa, dataToUpdate)
    return new Error("Erro ao atualizar o registros.")
  } catch (error) {
    console.log(error)
    return new Error(
      (error as { message: string }).message || "Erro ao atualizar o registro."
    )
  }
}

const deleteById = async (id: number): Promise<void | Error> => {
  try {
    await Api.delete(`/pessoas/${id}`)

    return new Error("Erro ao deletar o registros.")
  } catch (error) {
    console.log(error)
    return new Error("Erro ao deletar o registros.")
  }
}

export const PessoasServices = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
