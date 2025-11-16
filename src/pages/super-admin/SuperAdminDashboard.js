import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Box,
  Button
} from '@mui/material';
import { Store, People, Analytics, Settings } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const SuperAdminDashboard = () => {
  const stats = [
    { label: 'Total Stores', value: '25', icon: <Store />, color: '#6366F1' },
    { label: 'Active Users', value: '1,234', icon: <People />, color: '#10B981' },
    { label: 'Total Revenue', value: 'Rs. 12.5L', icon: <Analytics />, color: '#F59E0B' },
    { label: 'System Health', value: '98%', icon: <Settings />, color: '#8B5CF6' }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" gutterBottom className="gradient-text">
          Super Admin Dashboard
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Manage the entire shopping platform
        </Typography>
      </Box>

      <Grid container spacing={3} sx={{ mb: 4 }}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card className="glass-effect hover-lift">
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Box>
                    <Typography variant="h4" fontWeight="bold">
                      {stat.value}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {stat.label}
                    </Typography>
                  </Box>
                  <Box sx={{ color: stat.color }}>
                    {stat.icon}
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card className="glass-effect">
            <CardContent sx={{ p: 4, textAlign: 'center' }}>
              <Store sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" gutterBottom>
                Manage Stores
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Add, edit, and manage all stores on the platform.
              </Typography>
              <Button
                component={Link}
                to="/manage-stores"
                variant="contained"
                fullWidth
              >
                Manage Stores
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card className="glass-effect">
            <CardContent sx={{ p: 4, textAlign: 'center' }}>
              <People sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" gutterBottom>
                Manage Users
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Manage all users, roles, and permissions.
              </Typography>
              <Button
                component={Link}
                to="/manage-users"
                variant="contained"
                fullWidth
              >
                Manage Users
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card className="glass-effect">
            <CardContent sx={{ p: 4, textAlign: 'center' }}>
              <Analytics sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" gutterBottom>
                System Analytics
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                View platform analytics and performance metrics.
              </Typography>
              <Button
                component={Link}
                to="/system-analytics"
                variant="contained"
                fullWidth
              >
                View Analytics
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SuperAdminDashboard;