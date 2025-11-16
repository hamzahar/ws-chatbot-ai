import React from 'react';
import { Container, Typography, Box, Card, CardContent } from '@mui/material';
import { Store } from '@mui/icons-material';

const RetailerPortal = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h3" gutterBottom className="gradient-text">
          Retailer Portal
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Coming Soon - Store Registration & Inventory Management
        </Typography>
      </Box>

      <Card className="glass-effect">
        <CardContent sx={{ p: 4, textAlign: 'center' }}>
          <Store sx={{ fontSize: 64, color: 'text.secondary', mb: 2 }} />
          <Typography variant="h5" gutterBottom>
            Under Development
          </Typography>
          <Typography variant="body1" color="text.secondary">
            This section will allow store owners to register their stores and manage inventory.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default RetailerPortal;