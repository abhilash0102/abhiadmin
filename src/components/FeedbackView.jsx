import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Typography, Card, CardContent } from '@mui/material';

const FeedbackView = () => {
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3006/feedback')
      .then(response => {
        setFeedback(response.data);
      })
      .catch(error => {
        console.error('Error fetching feedback:', error);
      });
  }, []);

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" p={2}>
      <Box maxWidth={800} width="100%">
        <Typography variant="h4" gutterBottom align="center">Feedback</Typography>
        {feedback.map((item, index) => (
          <Card key={index} variant="outlined" style={{ marginBottom: '16px' }}>
      z      <CardContent>
              <Typography variant="h6" component="div">
                Name: {item.name}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Email: {item.email}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Rating: {item.rating}
              </Typography>
              <Typography variant="body2">
                Message: {item.message}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default FeedbackView;
