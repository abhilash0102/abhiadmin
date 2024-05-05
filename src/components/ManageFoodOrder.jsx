import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
import axios from 'axios';

const ManageFoodOffers = () => {
  const [foodOffers, setFoodOffers] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [updatedOfferData, setUpdatedOfferData] = useState({
    name: "",
    description: "",
    image: ""
  });

  useEffect(() => {
    // Fetch food offers data from the server
    axios.get("http://localhost:3006/foodOffers")
      .then(response => {
        setFoodOffers(response.data);
      })
      .catch(error => {
        console.error("Error fetching food offers:", error);
      });
  }, []);

  const handleEditOffer = (offer) => {
    setSelectedOffer(offer);
    setUpdatedOfferData(offer);
    setOpenDialog(true);
  };

  const handleSaveChanges = () => {
    // Send PUT request to update the offer
    axios.put(`http://localhost:3006/foodOffers/${selectedOffer._id}`, updatedOfferData)
      .then(response => {
        // Update the offer in the foodOffers state
        setFoodOffers(foodOffers.map(offer =>
          offer._id === selectedOffer._id ? response.data : offer
        ));
        setOpenDialog(false);
      })
      .catch(error => {
        console.error("Error updating food offer:", error);
      });
  };

  const handleDeleteOffer = (offerId) => {
    // Send DELETE request to delete the offer
    axios.delete(`http://localhost:3006/foodOffers/${offerId}`)
      .then(() => {
        // Remove the offer from the foodOffers state
        setFoodOffers(foodOffers.filter(offer => offer._id !== offerId));
      })
      .catch(error => {
        console.error("Error deleting food offer:", error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedOfferData(prevData => ({ ...prevData, [name]: value }));
  };

  return (
    <Box>
      <Typography variant="h4" align="center" gutterBottom>
        Manage Food Offers
      </Typography>
      {foodOffers.map(offer => (
        <Box key={offer._id} p={2} borderBottom="1px solid #ccc">
          <Typography variant="h6">{offer.name}</Typography>
          <Typography variant="body1">{offer.description}</Typography>
          <Button onClick={() => handleEditOffer(offer)} variant="outlined" color="primary" sx={{ mr: 1, mt: 1 }}>Edit</Button>
          <Button onClick={() => handleDeleteOffer(offer._id)} variant="outlined" color="secondary" sx={{ mt: 1 }}>Delete</Button>
        </Box>
      ))}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Edit Offer</DialogTitle>
        <DialogContent>
          <TextField
            name="name"
            label="Name"
            value={updatedOfferData.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="description"
            label="Description"
            value={updatedOfferData.description}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
            margin="normal"
          />
          <TextField
            name="image"
            label="Image URL"
            value={updatedOfferData.image}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSaveChanges} color="primary">
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ManageFoodOffers;
