import { Avatar, Box, Divider, Drawer, Icon, List, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from "@mui/material";
import imageAvatar from "../../../assets/images/blobprofilelarge.png";
import { useAppThemeContext, useDrawerContext } from "../../contexts";
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";

interface IListItemProps {
  icon: string;
  to: string;
  label: string;
  onClick: (() => void) | undefined;
}

const ListItemLink = (props: IListItemProps) => {
  const { to, icon, label, onClick } = props;

  const navigate = useNavigate();

  const reselvedPath = useResolvedPath(to);
  const match = useMatch({ path: reselvedPath.pathname, end: false })

  const handleClick = () => {
    navigate(to);
    onClick?.();
  }

  return (
    <ListItemButton selected={!!match} onClick={handleClick}>
      <ListItemIcon>
        <Icon>{icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  )
}
interface IMenuLateralProps {
  children: React.ReactNode;
}

export const MenuLateral: React.FC<IMenuLateralProps> = ({ children }) => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const { isDrawerOpen, toggleDrawerOpen, drawerOptions } = useDrawerContext();
  const { toggleTheme } = useAppThemeContext();

  return (
    <>
      <Drawer
        open={isDrawerOpen}
        variant={smDown ? 'temporary' : 'permanent'}
        onClose={toggleDrawerOpen}>
        <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection="column">
          <Box
            width="100%"
            height={theme.spacing(20)}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Avatar
              src={imageAvatar}
              sx={{ width: theme.spacing(12), height: theme.spacing(12) }}
            />
          </Box>
          <Divider />
          <Box flex={1}>
            <List component="nav">
              {drawerOptions.map(drawerOptions => (
                <ListItemLink
                  key={drawerOptions.path}
                  to={drawerOptions.path}
                  icon={drawerOptions.icon}
                  label={drawerOptions.label}
                  onClick={smDown ? toggleDrawerOpen : undefined}
                />
              ))}
            </List>
          </Box>
          <Box>
            <List component="nav">
              <ListItemButton onClick={toggleTheme}>
                <ListItemIcon>
                  <Icon>dark_mode</Icon>
                </ListItemIcon>
                <ListItemText primary="Alternar tema" />
              </ListItemButton>
            </List>
          </Box>

        </Box>
      </Drawer >

      <Box
        height="100vh"
        marginLeft={smDown ? 0 : theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
};
