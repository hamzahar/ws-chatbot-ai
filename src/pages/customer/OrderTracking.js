import React from 'react';
import { Container, Typography, Box, Card, CardContent } from '@mui/material';
import { TrackChanges } from '@mui/icons-material';

const OrderTracking = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h3" gutterBottom className="gradient-text">
          Order Tracking
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Track your orders in real-time
        </Typography>
      </Box>

      <Card className="glass-effect">
        <CardContent sx={{ p: 4, textAlign: 'center' }}>
          <TrackChanges sx={{ fontSize: 64, color: 'text.secondary', mb: 2 }} />
          <Typography variant="h5" gutterBottom>
            Order Tracking
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Track your orders and get real-time updates on delivery status.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default OrderTracking;