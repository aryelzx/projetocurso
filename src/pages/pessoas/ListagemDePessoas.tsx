import { useMemo, useEffect } from "react"

import { useSearchParams } from "react-router-dom"

import { FerramentasDaListagem } from "../../shared/components"
import { LayoutBaseDePagina } from "../../shared/layouts"
import { PessoasServices } from "../../shared/services/api/pessoas/PessoasServices"

export const ListagemDePessoas = () => {
  const [searchParams, setSearchParams] = useSearchParams(); //this is not one state

  const busca = useMemo(() => {
    return searchParams.get('busca') || '';
  }, [searchParams]);

  useEffect(() => {
    PessoasServices.getAll(1, busca)
      .then((response) => {
        if (response instanceof Error) {
          alert(response.message)
        } else {
          console.log(response)
        }
      })
  }, [busca])
  return (
    <LayoutBaseDePagina
      title='Listagem de pessoas'
      barraDeFerramentas={
        <FerramentasDaListagem
          mostrarInputBusca={true}
          textoBotaoNovo="Nova"
          textoDaBusca={busca}
          aoMudarTextoDeBusca={texto => setSearchParams({ busca: texto }, { replace: true })}
        />
      }
    >

    </LayoutBaseDePagina >
  )
}
