import React, { useState } from 'react';
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert
} from '@mui/material';
import { Login as LoginIcon, Store, SupervisedUserCircle, Person } from '@mui/icons-material';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'customer'
  });
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    // Mock authentication - In real app, this would be an API call
    const mockUsers = {
      super_admin: { id: 1, name: 'Super Admin', email: 'super@admin.com', role: 'super_admin' },
      store_admin: { id: 2, name: 'Al-Fatah Admin', email: 'alfatah@admin.com', role: 'store_admin', storeId: 1 },
      customer: { id: 3, name: 'Customer User', email: 'customer@test.com', role: 'customer' }
    };

    const user = mockUsers[formData.role];
    
    if (user && formData.password === 'password') { // Simple password for demo
      login(user);
      
      // Redirect based on role
      switch(user.role) {
        case 'super_admin':
          navigate('/super-admin');
          break;
        case 'store_admin':
          navigate('/store-admin');
          break;
        default:
          navigate('/customer');
      }
    } else {
      setError('Invalid credentials');
    }
  };

  const roleOptions = [
    { value: 'customer', label: 'Customer', icon: <Person />, description: 'Shop and place orders' },
    { value: 'store_admin', label: 'Store Admin', icon: <Store />, description: 'Manage store inventory and orders' },
    { value: 'super_admin', label: 'Super Admin', icon: <SupervisedUserCircle />, description: 'Manage entire system' }
  ];

  return (
    <Container maxWidth="sm" sx={{ py: 8 }}>
      <Paper className="glass-effect" sx={{ p: 4 }}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <LoginIcon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
          <Typography variant="h3" gutterBottom className="gradient-text">
            Login
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Select your role and enter credentials
          </Typography>
        </Box>

        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}

        <form onSubmit={handleLogin}>
          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel>Select Role</InputLabel>
            <Select
              name="role"
              value={formData.role}
              label="Select Role"
              onChange={handleChange}
            >
              {roleOptions.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    {option.icon}
                    <Box>
                      <Typography variant="body1">{option.label}</Typography>
                      <Typography variant="caption" color="text.secondary">
                        {option.description}
                      </Typography>
                    </Box>
                  </Box>
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            sx={{ mb: 3 }}
            required
          />

          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            sx={{ mb: 3 }}
            required
            helperText="Use 'password' for demo"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            sx={{
              py: 1.5,
              background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)'
            }}
          >
            Login
          </Button>
        </form>

        <Box sx={{ mt: 4, p: 3, bgcolor: 'rgba(255,255,255,0.05)', borderRadius: 2 }}>
          <Typography variant="h6" gutterBottom color="primary">
            Demo Credentials:
          </Typography>
          <Typography variant="body2" color="text.secondary">
            • Password for all roles: <strong>password</strong>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;   