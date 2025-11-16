import React, { useState } from 'react';
import {
  Box,
  TextField,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  Chip,
  InputAdornment
} from '@mui/material';
import { Search, Store, LocationOn, Phone, Category } from '@mui/icons-material';
import { mockStores } from '../../utils/mockData';

const ShopSearch = ({ onStoreSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredStores, setFilteredStores] = useState(mockStores);

  const handleSearch = (value) => {
    setSearchTerm(value);
    if (value.trim() === '') {
      setFilteredStores(mockStores);
    } else {
      const filtered = mockStores.filter(store =>
        store.name.toLowerCase().includes(value.toLowerCase()) ||
        store.location.toLowerCase().includes(value.toLowerCase()) ||
        store.category.toLowerCase().includes(value.toLowerCase()) ||
        store.products.some(product => 
          product.name.toLowerCase().includes(value.toLowerCase())
        )
      );
      setFilteredStores(filtered);
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      CLOTHING: '#6366F1',
      SHOES: '#10B981', 
      ELECTRONICS: '#F59E0B',
      HOME: '#8B5CF6',
      BEAUTY: '#EC4899',
      SPORTS: '#3B82F6',
      BOOKS: '#06B6D4',
      JEWELRY: '#F97316'
    };
    return colors[category] || '#6B7280';
  };

  return (
    <Box>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search for stores, products, categories or locations..."
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search color="primary" />
            </InputAdornment>
          ),
        }}
        sx={{ mb: 3 }}
      />

      <List sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {filteredStores.map((store) => (
          <ListItem key={store.id} sx={{ p: 0 }}>
            <Card 
              className="hover-lift glass-effect" 
              sx={{ 
                width: '100%', 
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 25px rgba(99, 102, 241, 0.2)',
                }
              }}
              onClick={() => onStoreSelect(store)}
            >
              <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <Store fontSize="small" color="primary" />
                      {store.name}
                    </Typography>
                    
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                      <Category fontSize="small" sx={{ color: 'text.secondary' }} />
                      <Chip 
                        label={store.category}
                        size="small"
                        sx={{
                          backgroundColor: `${getCategoryColor(store.category)}20`,
                          color: getCategoryColor(store.category),
                          border: `1px solid ${getCategoryColor(store.category)}30`,
                          fontWeight: 500,
                        }}
                      />
                    </Box>
                    
                    <Typography variant="body2" sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: 1, 
                      color: 'text.secondary',
                      mb: 0.5 
                    }}>
                      <LocationOn fontSize="small" />
                      {store.location}
                    </Typography>
                    
                    <Typography variant="body2" sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: 1, 
                      color: 'text.secondary' 
                    }}>
                      <Phone fontSize="small" />
                      {store.phone}
                    </Typography>
                    
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1, fontStyle: 'italic' }}>
                      {store.description}
                    </Typography>
                  </Box>
                  
                  <Chip 
                    label={`${store.products.filter(product => product.available).length} products available`}
                    sx={{
                      backgroundColor: 'rgba(16, 185, 129, 0.1)',
                      color: '#10B981',
                      border: '1px solid rgba(16, 185, 129, 0.3)',
                      fontWeight: 500,
                    }}
                    size="small"
                  />
                </Box>
                
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 2 }}>
                  {store.products.slice(0, 5).map((product, index) => (
                    <Chip
                      key={index}
                      label={`${product.name} - ₹${product.price}`}
                      size="small"
                      sx={{
                        backgroundColor: product.available ? 'rgba(99, 102, 241, 0.1)' : 'rgba(148, 163, 184, 0.1)',
                        color: product.available ? '#6366F1' : '#94A3B8',
                        border: product.available ? '1px solid rgba(99, 102, 241, 0.3)' : '1px solid rgba(148, 163, 184, 0.3)',
                        fontWeight: 500,
                      }}
                    />
                  ))}
                  {store.products.length > 5 && (
                    <Chip 
                      label={`+${store.products.length - 5} more`} 
                      size="small" 
                      sx={{
                        backgroundColor: 'rgba(148, 163, 184, 0.1)',
                        color: '#94A3B8',
                        border: '1px solid rgba(148, 163, 184, 0.3)',
                      }}
                    />
                  )}
                </Box>
              </CardContent>
            </Card>
          </ListItem>
        ))}
      </List>

      {filteredStores.length === 0 && (
        <Box textAlign="center" py={4}>
          <Typography variant="h6" color="text.secondary">
            No stores found matching your search
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Try searching for different categories like clothing, electronics, shoes, etc.
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default ShopSearch;