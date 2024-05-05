import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

const Nav = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='warning'>
        <Toolbar>
        <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjT8wj6UxwpLeo_c-NBeGR56ioJYn_qVKgbZZ6IfyD9ZzcrW9DP3CIrXj-TY5oiMRiJ3HIMV4VhGxf6JEgqGLOI6ADmesG1VOEZrJ-L0hKfI0rmzod7Tqok9J-7fcvNfHtR04bVUwU5JtfTFfGiz_lhmLwpba7s1s5Gu5Grq9jeoSIxXgsTSK4ydEolITc/s320/IMG-20240417-WA0060.jpg"  sx={{ width: 60, height: 60 }}  />

    </Stack>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          > */}
            {/* <MenuIcon /> */}
          {/* </IconButton> */}
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            FUSION FOOD RESTAURANT
          </Typography>
          {/* <Button color="inherit"><Link to={'/Signup0'} style={{textDecoration:'none', color:'white'}}>Signup</Link></Button> */}
          <Button color="inherit"><Link to={'/Login0'} style={{ textDecoration: 'none', color: 'white' }}>Login</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Nav;