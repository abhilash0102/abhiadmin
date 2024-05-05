import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import axios from 'axios';

const AddFoodOffer = () => {
  const [offerData, setOfferData] = useState({
    name: "",
    description: "",
    image: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOfferData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    // Send POST request to add new food offer
    axios.post("http://localhost:3006/foodOffers", offerData)
      .then(response => {
        console.log("Food offer added successfully:", response.data);
        // Clear input fields after successful submission
        setOfferData({
          name: "",
          description: "",
          image: ""
        });
      })
      .catch(error => {
        console.error("Error adding food offer:", error);
      });
  };

  return (
    <Box>
      <Typography variant="h4" align="center" gutterBottom>
        Add New Food Offer
      </Typography>
      <Box maxWidth={400} mx="auto">
        <TextField
          name="name"
          label="Name"
          value={offerData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          name="description"
          label="Description"
          value={offerData.description}
          onChange={handleChange}
          fullWidth
          multiline
          rows={4}
          margin="normal"
        />
        <TextField
          name="image"
          label="Image URL"
          value={offerData.image}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Box textAlign="center" mt={2}>
          <Button
            onClick={handleSubmit}
            variant="contained"
            color="primary"
          >
            Add Offer
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AddFoodOffer;
