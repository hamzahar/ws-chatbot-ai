import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Chip
} from '@mui/material';
import { Link } from 'react-router-dom';
import {
  Store,
  ShoppingCart,
  SmartToy,
  RocketLaunch
} from '@mui/icons-material';

const Home = () => {
  const features = [
    {
      icon: <Store sx={{ fontSize: 40 }} />,
      title: "Store Registration",
      description: "Business owners can easily register their stores and manage products in real-time.",
      color: "#6366F1"
    },
    {
      icon: <ShoppingCart sx={{ fontSize: 40 }} />,
      title: "AI-Powered Shopping",
      description: "Customers can chat with AI to check product availability and place orders automatically.",
      color: "#10B981"
    },
    {
      icon: <SmartToy sx={{ fontSize: 40 }} />,
      title: "Smart Processing",
      description: "Natural language understanding for seamless customer interactions.",
      color: "#F59E0B"
    },
    {
      icon: <RocketLaunch sx={{ fontSize: 40 }} />,
      title: "Real-time Updates",
      description: "Instant product updates and order status notifications.",
      color: "#8B5CF6"
    }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #334155 100%)',
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', maxWidth: '800px', mx: 'auto' }}>
            <Chip
              label="Pakistan Shopping AI"
              sx={{
                bgcolor: 'rgba(16, 185, 129, 0.1)',
                color: '#10B981',
                mb: 3,
                fontWeight: 600
              }}
            />
            
            <Typography
              variant="h1"
              sx={{
                mb: 3,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                lineHeight: 1.2
              }}
            >
              Pakistan ki Pehli{' '}
              <span className="gradient-text">AI Shopping Assistant</span>
            </Typography>
            
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ mb: 4, maxWidth: '600px', mx: 'auto' }}
            >
              Al-Fatah, Jalalsons, J., Bundu Khan aur Pakistan ke top stores se AI ke through shopping karein.
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                component={Link}
                to="/customer"
                variant="contained"
                size="large"
                startIcon={<ShoppingCart />}
                className="hover-lift"
                sx={{
                  px: 4,
                  py: 1.5,
                  background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)'
                }}
              >
                Start Shopping
              </Button>
              
              <Button
                component={Link}
                to="/retailer"
                variant="outlined"
                size="large"
                startIcon={<Store />}
                sx={{
                  px: 4,
                  py: 1.5,
                  borderColor: 'rgba(255,255,255,0.3)',
                  color: 'white',
                  '&:hover': {
                    borderColor: 'primary.main',
                    bgcolor: 'rgba(99, 102, 241, 0.1)'
                  }
                }}
              >
                Register Store
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h2"
          textAlign="center"
          sx={{ mb: 6 }}
        >
          How It Works
        </Typography>
        
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card className="hover-lift glass-effect">
                <CardContent sx={{ p: 4, textAlign: 'center' }}>
                  <Box
                    sx={{
                      color: feature.color,
                      mb: 2
                    }}
                  >
                    {feature.icon}
                  </Box>
                  
                  <Typography variant="h5" gutterBottom>
                    {feature.title}
                  </Typography>
                  
                  <Typography variant="body1" color="text.secondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;