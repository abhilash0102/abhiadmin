import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom'; // Import Link from React Router DOM
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const settings = [  'Feedback', 'Logout'];

function Navbarnew2() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [openDrawer, setOpenDrawer] = React.useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpenDrawer(open);
  };

  return (
    <React.Fragment>
      <Box
        sx={{
          backgroundImage: `url("https://jooinn.com/images/blur-restaurant-3.png")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '100vh',
        }}
      >
        <AppBar position="static" sx={{ backgroundImage: `url('https://wonderfulengineering.com/wp-content/uploads/2016/01/black-wallpaper-8.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Stack direction="row" spacing={2}>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={toggleDrawer(true)}
                  edge="start"
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography
                  variant="h4"
                  noWrap
                  sx={{
                    mr: 2,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  FUSION FOOD
                </Typography>&nbsp;
              </Stack>
              <Stack direction="row" spacing={2}>
                <Avatar
                  alt="Remy Sharp"
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjT8wj6UxwpLeo_c-NBeGR56ioJYn_qVKgbZZ6IfyD9ZzcrW9DP3CIrXj-TY5oiMRiJ3HIMV4VhGxf6JEgqGLOI6ADmesG1VOEZrJ-L0hKfI0rmzod7Tqok9J-7fcvNfHtR04bVUwU5JtfTFfGiz_lhmLwpba7s1s5Gu5Grq9jeoSIxXgsTSK4ydEolITc/s320/IMG-20240417-WA0060.jpg"
                  sx={{ width: 60, height: 60 }}
                />
              </Stack>
              <Box sx={{ flexGrow: 1 }} />
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar src="/broken-image.jpg" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography sx={{textDecoration:'none'}} textAlign="center" component={Link} to={
                      setting === 'Feedback' ? '/FeedbackView' :
                      setting === 'Logout' ? '/' : '#'}>
                        {setting}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        <Drawer
          anchor="left"
          open={openDrawer}
          onClose={toggleDrawer(false)}
        >
          <div
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <List>
              <ListItem button component={Link} to="/Cardadd">
                <ListItemText primary="add food items" />
              </ListItem>
              <ListItem button component={Link} to="/DataviewA">
                <ListItemText primary="Update & delete Food items" />
              </ListItem>
              <ListItem button component={Link} to="/AddFoodOffer">
                <ListItemText primary="Add food Offers" />
              </ListItem>
              <ListItem button component={Link} to="/ManageFoodOffers">
                <ListItemText primary="update and delete offers" />
              </ListItem>
              <ListItem button component={Link} to="/OrderView">
                <ListItemText primary="orderlist" />
              </ListItem>
              <ListItem button component={Link} to="/OrderView1">
                <ListItemText primary="order management" />
              </ListItem>
            </List>
          </div>
        </Drawer>
      </Box>
    </React.Fragment>
  );
}

export default Navbarnew2;
