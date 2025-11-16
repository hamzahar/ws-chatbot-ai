import React from 'react';
import { Container, Typography, Box, Card, CardContent } from '@mui/material';
import { AdminPanelSettings } from '@mui/icons-material';

const AdminDashboard = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h3" gutterBottom className="gradient-text">
          Admin Dashboard
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Coming Soon - System Administration
        </Typography>
      </Box>

      <Card className="glass-effect">
        <CardContent sx={{ p: 4, textAlign: 'center' }}>
          <AdminPanelSettings sx={{ fontSize: 64, color: 'text.secondary', mb: 2 }} />
          <Typography variant="h5" gutterBottom>
            Admin Panel
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Administrative features and system monitoring will be available here.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default AdminDashboard;