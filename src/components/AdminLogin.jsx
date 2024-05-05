import { useState } from 'react';
import { Box, Button, TextField, Typography, CircularProgress } from '@mui/material';
import axios from 'axios';

function AdminLogin() {
  const [inputs, setInputs] = useState({
    username: "",
    password: ""
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInputs((prevData) => ({ ...prevData, [name]: value }));
  };

  const loginHandler = () => {
    setLoading(true); // Set loading state to true
    axios.post("http://localhost:3006/admin/login", inputs) // Adjust the endpoint for admin login
      .then((response) => {
        console.log(response.data);
        if (response.data === "success") {
          // Redirect to admin dashboard upon successful login
          // Implement your navigation logic here
        } else {
          setMessage(response.data);
        }
      })
      .catch((err) => {
        console.error(err);
        setMessage("An error occurred. Please try again later.");
      })
      .finally(() => {
        setLoading(false); // Reset loading state regardless of success or failure
      });
  };

  return (
    <div style={{ 
      background: 'url("your-admin-background-image-url")', // Customize with your admin background image
      backgroundSize: 'cover',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      <Box
        height={310}
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
          ADMIN LOGIN
        </Typography>
        <TextField
          label='Username'
          variant='outlined'
          name='username'
          value={inputs.username}
          onChange={inputHandler}
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          variant="outlined"
          name='password'
          value={inputs.password}
          onChange={inputHandler}
        />
        <Button
          variant='contained'
          color='secondary'
          onClick={loginHandler}
          style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : 'Login'}
        </Button>
        {message && (
          <Typography variant="body1" color="error" style={{ marginTop: '8px' }}>
            {message}
          </Typography>
        )}
      </Box>
    </div>
  );
}

export default AdminLogin;
