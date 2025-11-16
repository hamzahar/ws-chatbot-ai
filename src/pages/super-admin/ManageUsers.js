import React from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent
} from '@mui/material';
import { People } from '@mui/icons-material';

const ManageUsers = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h3" gutterBottom className="gradient-text">
          Manage Users
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Manage all users and their roles
        </Typography>
      </Box>

      <Card className="glass-effect">
        <CardContent sx={{ p: 4, textAlign: 'center' }}>
          <People sx={{ fontSize: 64, color: 'text.secondary', mb: 2 }} />
          <Typography variant="h5" gutterBottom>
            User Management
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Manage all users, assign roles, and set permissions across the platform.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ManageUsers;