import React, { useEffect } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Collapse } from '@material-ui/core';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { Sidebardata, sales, publisher } from './Sidebardata';
import UserContext from '../../context/UserContext';
import Tooltip from '@mui/material/Tooltip';
import { padding } from '@mui/system';

const drawerWidth = 270;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function SideNav() {
  const { isAdmin } = React.useContext(UserContext)
  const navigate = useNavigate()
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [subopen, setSubOpen] = React.useState(false);
  const [render, setRender] = React.useState(null)
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  React.useEffect(() => {
    if (isAdmin.isadmin === 0 || isAdmin.isadmin === 1 || isAdmin.isadmin === 2) {
      return setRender(Sidebardata)
    } else if (isAdmin.isadmin === 4) {
      return setRender(publisher)
    } else if (isAdmin.isadmin === 3) {
      return setRender(sales)
    }
  }, [isAdmin])

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = (label, path) => {
    setSubOpen({
      [label]: !subopen[label], glob: label
    });
    navigate(path)
  };

 
  if (!render) return

  return (
    <Box sx={{ display: 'flex' }} >
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ backgroundColor: '#000000' }}>

        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />

          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {subopen.glob}
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open}>
        <DrawerHeader className='d-flex justify-content-between'>
          <div className='mx-3'>
            {isAdmin.username}
          </div>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />

        <List>

          {
            render.map((item, index) => (
              <React.Fragment key={item.label}>
                {!open ? (
                  <Tooltip title={item.label} placement="right">
                    <ListItem button sx={{ fontSize: "30px" }} onClick={() => handleClick(item.label, item.path)}>
                      <ListItemIcon sx={{ color: '#000000' }}>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.label} />
                      {item.subNav ? (
                        open[item.label] ? (
                          item.iconOpened
                        ) : (
                          item.iconClosed
                        )
                      ) : null}
                    </ListItem>
                  </Tooltip>
                ) : (
                  <ListItem button sx={{ fontSize: "30px" }} onClick={() => handleClick(item.label, item.path)}>
                    <ListItemIcon sx={{ color: '#000000' }}>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.label} />
                    {item.subNav ? (
                      open[item.label] ? (
                        item.iconOpened
                      ) : (
                        item.iconClosed
                      )
                    ) : null}
                  </ListItem>
                )}
                {item.subNav ? (
                  <Collapse in={subopen[item.label]} timeout="auto" unmountOnExit>
                    {item.subNav.map((subItem) => (
                      <Tooltip title={subItem.label} key={subItem.label} placement="right">
                        <List component="div" disablePadding  >
                          <ListItem button onClick={(e) => navigate(subItem.path)} >
                            <ListItemIcon sx={{ color: '#FF6000', mx: 1 }}>{subItem.icon}</ListItemIcon>
                            <ListItemText primary={subItem.label} />
                          </ListItem>
                        </List>
                      </Tooltip>
                    ))}
                  </Collapse>
                ) : null}
              </React.Fragment>
            ))
          }
        </List>
      </Drawer>

      <div style={{
        paddingLeft: open ? "200px" : "0",
        transition: "padding-left 0.2s ease-out"
      }}>
        <Outlet />
      </div>
      
    </Box >
  );
}