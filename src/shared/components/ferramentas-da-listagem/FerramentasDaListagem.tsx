import { Box, Button, Icon, InputAdornment, Paper, TextField, useTheme } from "@mui/material";

interface IFerramentasDaListagemProps {
  textoDaBusca?: string;
  mostrarInputBusca?: boolean;
  aoMudarTextoDeBusca?: (novoTexto: string) => void;
  textoBotaoNovo?: string;
  mostrarBotaoNovo?: boolean;
  aoClicarEmNovo?: () => void;
}

export const FerramentasDaListagem: React.FC<IFerramentasDaListagemProps> = ({
  textoDaBusca = '',
  mostrarInputBusca = false,
  aoMudarTextoDeBusca,
  textoBotaoNovo = 'Novo',
  mostrarBotaoNovo = true,
  aoClicarEmNovo,
}) => {

  const theme = useTheme();

  return (

    <Box
      gap={1}
      height={theme.spacing(5)}
      marginX={1}
      padding={1}
      paddingX={1}
      display="flex"
      alignItems="center"
      component={Paper}
    >

      {mostrarInputBusca && (
        <TextField
          value={textoDaBusca}
          onChange={(e) => aoMudarTextoDeBusca?.(e.target.value)} // ?. = optional chaining
          size="small"
          placeholder="Pesquisar..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Icon>search</Icon>
              </InputAdornment>
            ),
          }}
        />
      )}

      <Box flex={1} display='flex' justifyContent='end' />

      {mostrarBotaoNovo && (
        <Button
          color='primary'
          disableElevation
          variant='contained'
          onClick={aoClicarEmNovo}
          endIcon={<Icon>add</Icon>}
        >
          {textoBotaoNovo}
        </Button>
      )}
    </Box>
  )
}