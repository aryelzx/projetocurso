import { Box, Theme, Button, Divider, Icon, Paper, Skeleton, Typography, useMediaQuery, useTheme } from "@mui/material"

interface IFerramentasDeDetalheProps {
  textoBotaoNovo?: string;

  mostrarBotaoNovo?: boolean;
  mostrarBotaoSalvar?: boolean;
  mostrarBotaoSalvarEFechar?: boolean;
  mostrarBotaoApagar?: boolean;
  mostrarBotaoVoltar?: boolean;

  mostrarBotaoNovoCarregando?: boolean;
  mostrarBotaoSalvarCarregando?: boolean;
  mostrarBotaoSalvarEFecharCarregando?: boolean;
  mostrarBotaoApagarCarregando?: boolean;
  mostrarBotaoVoltarCarregando?: boolean;

  aoClicarEmNovo?: () => void;
  aoClicarEmSalvar?: () => void;
  aoClicarEmSalvarEFechar?: () => void;
  aoClicarEmApagar?: () => void;
  aoClicarEmVoltar?: () => void;
}

export const FerramentasDeDetalhe: React.FC<IFerramentasDeDetalheProps> = ({
  textoBotaoNovo = 'Novo',

  mostrarBotaoNovo = true,
  mostrarBotaoSalvar = true,
  mostrarBotaoApagar = true,
  mostrarBotaoVoltar = true,
  mostrarBotaoSalvarEFechar = false,

  mostrarBotaoNovoCarregando = false,
  mostrarBotaoSalvarCarregando = false,
  mostrarBotaoApagarCarregando = false,
  mostrarBotaoVoltarCarregando = false,
  mostrarBotaoSalvarEFecharCarregando = false,

  aoClicarEmNovo,
  aoClicarEmSalvar,
  aoClicarEmApagar,
  aoClicarEmVoltar,
  aoClicarEmSalvarEFechar,
}) => {

  const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
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
      {(mostrarBotaoSalvar && !mostrarBotaoSalvarCarregando) && (
        <Button
          color='primary'
          disableElevation
          variant='contained'
          onClick={aoClicarEmSalvar}
          startIcon={<Icon>save</Icon>}
        >
          <Typography variant='button' whiteSpace="nowrap" textOverflow='ellipsis' overflow='hidden'>
            Salvar
          </Typography>
        </Button>
      )}
      {mostrarBotaoSalvarCarregando && (
        <Skeleton width={110} height={60} />
      )}

      {(mostrarBotaoSalvarEFechar && !mostrarBotaoSalvarEFecharCarregando && !smDown && !mdDown) && (
        <Button
          color='primary'
          disableElevation
          variant='contained'
          onClick={aoClicarEmSalvarEFechar}
          startIcon={<Icon>save</Icon>}
        >
          <Typography variant='button' noWrap>
            Salvar e Fechar
          </Typography>
        </Button>
      )}
      {(mostrarBotaoSalvarEFecharCarregando && !smDown && !mdDown) && (
        <Skeleton width={180} height={60} />
      )}

      {mostrarBotaoApagar && (
        <Button
          color='primary'
          disableElevation
          variant='contained'
          onClick={aoClicarEmApagar}
          startIcon={<Icon>delete</Icon>}
        >
          <Typography variant='button' whiteSpace="nowrap" textOverflow='ellipsis' overflow='hidden'>
            Apagar
          </Typography>
        </Button>
      )}
      {mostrarBotaoApagarCarregando && (
        <Skeleton width={110} height={60} />
      )}

      {(mostrarBotaoNovo && !mostrarBotaoNovoCarregando && !smDown) && (
        <Button
          color='primary'
          disableElevation
          variant='contained'
          onClick={aoClicarEmNovo}
          startIcon={<Icon>add</Icon>}
        >
          <Typography variant='button' whiteSpace="nowrap" textOverflow='ellipsis' overflow='hidden'>
            {textoBotaoNovo}
          </Typography>
        </Button>
      )}
      {mostrarBotaoNovoCarregando && (
        <Skeleton width={110} height={60} />
      )}

      {(
        mostrarBotaoVoltar &&
        (mostrarBotaoNovo || mostrarBotaoApagar || mostrarBotaoSalvar || mostrarBotaoSalvarEFechar)
      ) && (
          <Divider variant='middle' orientation='vertical' />
        )}

      {(mostrarBotaoVoltar && !mostrarBotaoVoltarCarregando) && (
        <Button
          color='primary'
          disableElevation
          variant='contained'
          onClick={aoClicarEmVoltar}
          startIcon={<Icon>arrow_back</Icon>}
        >
          <Typography variant='button' whiteSpace="nowrap" textOverflow='ellipsis' overflow='hidden'>
            Voltar
          </Typography>
        </Button>
      )}
      {(mostrarBotaoVoltarCarregando && !smDown) && (
        <Skeleton width={110} height={60} />
      )}
    </Box>
  )
}
