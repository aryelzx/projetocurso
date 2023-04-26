import { Box, Icon, IconButton, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useDrawerContext } from "../contexts";

interface ILayoutBaseDePaginaProps {
  children: React.ReactNode;
  title: string;
  barraDeFerramentas?: React.ReactNode;
}

export const LayoutBaseDePagina = (props: ILayoutBaseDePaginaProps) => {
  const { children, title, barraDeFerramentas } = props;

  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

  const { toggleDrawerOpen } = useDrawerContext();

  return (
    <Box height='100vh' display='flex' flexDirection='column' gap={1}>
      <Box display='flex' alignItems='center' padding={1} gap={1} height={theme.spacing(smDown ? 6 : mdDown ? 8 : 12)} >
        {smDown && (
          <IconButton onClick={toggleDrawerOpen}>
            <Icon>menu</Icon>
          </IconButton>
        )}

        <Typography
          variant={smDown ? 'h5' : mdDown ? 'h4' : 'h3'}
          overflow="hidden"
          whiteSpace="nowrap"
          textOverflow="ellipsis"
        >
          {title}
        </Typography>
      </Box>

      {barraDeFerramentas &&
        (<Box>
          {barraDeFerramentas}
        </Box>
        )}

      <Box flex={1} overflow="auto">
        {children}
      </Box>
    </Box >
  );
};