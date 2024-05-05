import React from 'react'
import { Box, Button, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

const Cardadd = () => {
    const [inputs, setInputs] = useState({
        title: "",
        price: "",
        image: ""
      });
    
      const inputHandler = (e) => {
        const { name, value } = e.target;
        setInputs((prevData) => ({ ...prevData, [name]: value }));
      };
    
      const addHandler = () => {
        console.log("button clicked");
        axios.post("http://localhost:3006/add1", inputs)
          .then((response) => {
            console.log(response.data);
            alert(response.data);
          })
          .catch((err) => console.log(err));
      };
  return (
    <div>
      <div style={{ 
    //   background: 'url("https://c4.wallpaperflare.com/wallpaper/559/564/946/cuisine-food-india-indian-wallpaper-preview.jpg")',
    //   backgroundSize: 'cover',
    //   backdropFilter: 'blur(8px)',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   height: '100vh'
    }}>
      <Box
        height={400}
        width={300}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap={4}
        p={7}
        bgcolor="white" // Transparent background
        boxShadow={3} // 3D effect
        borderRadius={16} // Rounded corners
      >
        <Typography variant='h4' color="dimgray">
          Add Menu
        </Typography>
        <TextField
          label='Enter title'
          variant='outlined'
          name='title'
          value={inputs.title}
          onChange={inputHandler}
        />
        <TextField
          label='enter price'
          variant='outlined'
          name='price'
          value={inputs.price}
          onChange={inputHandler}
        />
        <TextField
          label='Enter image link'
          variant='outlined'
          name='image'
          value={inputs.image}
          onChange={inputHandler}
        />

        <Button
          variant='contained'
          color='secondary'
          onClick={addHandler}
          component={Link}
        //   to={'/Login'}
          style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}
        >
          Submit
        </Button>
      </Box>
    </div>
    </div>
  )
}

export default Cardadd
