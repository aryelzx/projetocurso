import { useSearchParams } from "react-router-dom"
import { useMemo } from "react"
import { FerramentasDaListagem } from "../../shared/components"
import { LayoutBaseDePagina } from "../../shared/layouts"

export const ListagemDeCidade = () => {
  const [searchParams, setSearchParams] = useSearchParams(); //this is not one state

  const busca = useMemo(() => {
    return searchParams.get('busca') || '';
  }, [searchParams]);

  return (
    <LayoutBaseDePagina
      title='Listagem de cidades'
      barraDeFerramentas={
        <FerramentasDaListagem
          mostrarInputBusca={true}
          textoBotaoNovo="Nova cidade"
          textoDaBusca={busca}
          aoMudarTextoDeBusca={texto => setSearchParams({ busca: texto }, { replace: true })}
        />
      }
    >

    </LayoutBaseDePagina >
  )
}
