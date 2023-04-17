import { Box } from "@mui/material";

interface LayoutBaseDePaginaProps {
  children: React.ReactNode;
  title: string;
}

export const LayoutBaseDePagina: React.FC<LayoutBaseDePaginaProps> = ({ children, title }) => {
  return (
    <Box height='100vh' display='flex' flexDirection='column' gap={1}>
      <Box>
        <h1>{title}</h1>
      </Box>

      <Box>
        Barra de ferramentas
      </Box>

      <Box>
        {children}
      </Box>
    </Box >
  );
};