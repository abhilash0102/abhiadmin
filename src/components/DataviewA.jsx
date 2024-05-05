import React, { useState, useEffect } from 'react';
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Typography, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const DataviewA = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from the server endpoint
    axios.get('http://localhost:3006/view')
      .then(response => {
        setData(response.data); // Set fetched data to state
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const [updateId, setUpdateId] = useState(null);
  const [updateData, setUpdateData] = useState({});

  const updateValues = (val) => {
    setUpdateId(val._id);
    setUpdateData({ fname: val.fname, fprice: val.fprice, imageUrl: val.imageUrl });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateData({ ...updateData, [name]: value });
  };

  const handleUpdate = () => {
    axios.put(`http://localhost:3006/edit/${updateId}`, updateData)
      .then((response) => {
        alert(response.data);
        window.location.reload(false);
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3006/remove/${id}`)
      .then((response) => {
        alert(response.data);
        window.location.reload(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div style={{ margin: '4%' }}>
      <Typography variant='h3'>Update Delete Items</Typography><br />

      <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center" gap={2}>
        {data.map((val, i) => (
          <Card key={i} sx={{ width: 320, height: 300 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={val.image || val.imageUrl} // Check if image exists in data
                alt={val.title || val.fname} // Check if title exists in data
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {val.title || val.fname} {/* Check if title exists in data */}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Price: {val.price || val.fprice} {/* Check if price exists in data */}
                </Typography>
              </CardContent>
            </CardActionArea>
            <Button onClick={() => updateValues(val)} size="small" variant='contained' color='warning'>
              Update
            </Button>
            <Button onClick={() => handleDelete(val._id || val._id)} size="small" variant='contained' color='secondary'>
              Delete
            </Button>
          </Card>
        ))}
      </Box>

      {/* Update Form */}
      {updateId && (
        <div>
          <Typography variant='h4'>Update Item</Typography>
          <form style={{ backgroundColor: 'white' }}>
            <TextField
              label="Name"
              name="title"
              value={updateData.title}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Price"
              name="price"
              value={updateData.price}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Image"
              name="image"
              value={updateData.image}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
            <Button onClick={handleUpdate} variant='contained' color='primary'>
              Update
            </Button>
          </form>
        </div>
      )}
    </div>
  );
};

export default DataviewA;
