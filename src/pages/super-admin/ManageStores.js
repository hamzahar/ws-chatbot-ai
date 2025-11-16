import React from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent
} from '@mui/material';
import { Store } from '@mui/icons-material';

const ManageStores = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h3" gutterBottom className="gradient-text">
          Manage Stores
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Manage all stores on the platform
        </Typography>
      </Box>

      <Card className="glass-effect">
        <CardContent sx={{ p: 4, textAlign: 'center' }}>
          <Store sx={{ fontSize: 64, color: 'text.secondary', mb: 2 }} />
          <Typography variant="h5" gutterBottom>
            Store Management
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Add, edit, and manage all stores, their products, and store admins.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ManageStores;