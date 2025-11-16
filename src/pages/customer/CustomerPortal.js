import React, { useState } from 'react';
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Box,
  Alert,
  Chip
} from '@mui/material';
import { ShoppingCart, Store, Chat } from '@mui/icons-material';
import ShopSearch from '../../components/customer/ShopSearch';
import AIChatBot from '../../components/ai/AIChatBot';

const CustomerPortal = () => {
  const [selectedStore, setSelectedStore] = useState(null);
  const [currentOrder, setCurrentOrder] = useState(null);

  const handleStoreSelect = (store) => {
    setSelectedStore(store);
    setCurrentOrder(null);
  };

  const handleOrderPlace = (store, products) => {
    const order = {
      id: Date.now(),
      store: store.name,
      products: products,
      total: products.reduce((total, product) => {
        const storeProduct = store.products.find(sp => 
          sp.name.toLowerCase().includes(product)
        );
        return total + (storeProduct?.price || 0);
      }, 0),
      status: 'confirmed',
      timestamp: new Date()
    };
    setCurrentOrder(order);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom className="gradient-text">
          Shopping Portal
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Find stores and shop through AI chat
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {/* Store Search Section */}
        <Grid item xs={12} lg={6}>
          <Card className="glass-effect">
            <CardContent>
              <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Store color="primary" />
                Find Stores
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Search for stores in your area and select one to start chatting with AI
              </Typography>
              
              <ShopSearch onStoreSelect={handleStoreSelect} />
            </CardContent>
          </Card>
        </Grid>

        {/* AI Chat Section */}
        <Grid item xs={12} lg={6}>
          <Card className="glass-effect">
            <CardContent>
              <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Chat color="primary" />
                AI Shopping Assistant
              </Typography>
              
              {selectedStore ? (
                <Box>
                  <Alert 
                    severity="info" 
                    sx={{ mb: 2 }}
                    action={
                      <Chip 
                        label={selectedStore.name} 
                        size="small" 
                        color="primary"
                      />
                    }
                  >
                    Chatting with AI about {selectedStore.name}
                  </Alert>
                  <AIChatBot 
                    selectedStore={selectedStore}
                    onOrderPlace={handleOrderPlace}
                  />
                </Box>
              ) : (
                <Box 
                  sx={{ 
                    height: '500px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    flexDirection: 'column',
                    gap: 2
                  }}
                >
                  <ShoppingCart sx={{ fontSize: 64, color: 'text.secondary', opacity: 0.5 }} />
                  <Typography variant="h6" color="text.secondary">
                    Select a store to start chatting with AI
                  </Typography>
                  <Typography variant="body2" color="text.secondary" textAlign="center">
                    Choose a store from the left panel to check product availability and place orders through natural conversation
                  </Typography>
                </Box>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Order Confirmation */}
      {currentOrder && (
        <Alert 
          severity="success" 
          sx={{ mt: 3 }}
          onClose={() => setCurrentOrder(null)}
        >
          <Typography variant="h6">
            Order Confirmed! 🎉
          </Typography>
          <Typography variant="body2">
            Order #{currentOrder.id} at {currentOrder.store} for Rs. {currentOrder.total}
          </Typography>
        </Alert>
      )}
    </Container>
  );
};

export default CustomerPortal;