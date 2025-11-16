import React from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent
} from '@mui/material';
import { Inventory } from '@mui/icons-material';

const StoreInventory = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h3" gutterBottom className="gradient-text">
          Store Inventory
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Manage your store products and stock
        </Typography>
      </Box>

      <Card className="glass-effect">
        <CardContent sx={{ p: 4, textAlign: 'center' }}>
          <Inventory sx={{ fontSize: 64, color: 'text.secondary', mb: 2 }} />
          <Typography variant="h5" gutterBottom>
            Inventory Management
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Add, edit, and manage your store products, prices, and stock levels.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default StoreInventory;