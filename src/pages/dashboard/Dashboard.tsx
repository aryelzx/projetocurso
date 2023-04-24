import { FerramentasDaListagem } from "../../shared/components";
import { LayoutBaseDePagina } from "../../shared/layouts";

export const Dashboard = () => {
  return (
    <LayoutBaseDePagina
      title="Página inicial"
      barraDeFerramentas={(
        <FerramentasDaListagem
          mostrarInputBusca
        />
      )}>
      children
    </LayoutBaseDePagina>
  );
};