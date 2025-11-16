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
import { Inventory, ShoppingCart, Store, TrendingUp } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const StoreAdminDashboard = () => {
  const stats = [
    { label: 'Total Products', value: '45', icon: <Inventory />, color: '#6366F1' },
    { label: 'Pending Orders', value: '12', icon: <ShoppingCart />, color: '#F59E0B' },
    { label: 'Today\'s Revenue', value: 'Rs. 45,230', icon: <TrendingUp />, color: '#10B981' },
    { label: 'Store Rating', value: '4.8/5', icon: <Store />, color: '#8B5CF6' }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" gutterBottom className="gradient-text">
          Store Admin Dashboard
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Manage your store inventory and orders
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
        <Grid item xs={12} md={6}>
          <Card className="glass-effect">
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Inventory />
                Inventory Management
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Add, edit, and manage your store products and stock levels.
              </Typography>
              <Button
                component={Link}
                to="/store-inventory"
                variant="contained"
                fullWidth
              >
                Manage Inventory
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card className="glass-effect">
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <ShoppingCart />
                Order Management
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                View and process customer orders, update order status.
              </Typography>
              <Button
                component={Link}
                to="/store-orders"
                variant="contained"
                fullWidth
              >
                Manage Orders
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default StoreAdminDashboard;