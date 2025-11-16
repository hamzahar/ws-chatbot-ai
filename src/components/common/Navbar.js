import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Chip, Menu, MenuItem } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  SmartToy, Store, ShoppingCart, AdminPanelSettings, 
  Person, Logout, Dashboard 
} from '@mui/icons-material';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout, isSuperAdmin, isStoreAdmin, isCustomer } = useAuth();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
    handleClose();
  };

  const getRoleColor = (role) => {
    const colors = {
      super_admin: '#F59E0B',
      store_admin: '#10B981', 
      customer: '#6366F1'
    };
    return colors[role] || '#6B7280';
  };

  const getRoleIcon = (role) => {
    const icons = {
      super_admin: <AdminPanelSettings fontSize="small" />,
      store_admin: <Store fontSize="small" />,
      customer: <Person fontSize="small" />
    };
    return icons[role] || <Person fontSize="small" />;
  };

  const publicNavItems = [
    { path: '/', label: 'Home', icon: <SmartToy /> }
  ];

  const customerNavItems = [
    { path: '/customer', label: 'Shopping', icon: <ShoppingCart /> },
    { path: '/track-order', label: 'Track Order' }
  ];

  const storeAdminNavItems = [
    { path: '/store-admin', label: 'Dashboard', icon: <Dashboard /> },
    { path: '/store-inventory', label: 'Inventory' },
    { path: '/store-orders', label: 'Orders' }
  ];

  const superAdminNavItems = [
    { path: '/super-admin', label: 'Dashboard', icon: <Dashboard /> },
    { path: '/manage-stores', label: 'Stores' },
    { path: '/manage-users', label: 'Users' },
    { path: '/system-analytics', label: 'Analytics' }
  ];

  const getNavItems = () => {
    if (!user) return publicNavItems;
    if (isSuperAdmin) return [...publicNavItems, ...superAdminNavItems];
    if (isStoreAdmin) return [...publicNavItems, ...storeAdminNavItems, ...customerNavItems];
    return [...publicNavItems, ...customerNavItems];
  };

  return (
    <AppBar position="sticky" elevation={0}>
      <Toolbar>
        <Typography
          variant="h4"
          component={Link}
          to="/"
          sx={{
            textDecoration: 'none',
            background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 800,
            mr: 4,
          }}
        >
          WS-Chatbot AI
        </Typography>

        <Box sx={{ display: 'flex', gap: 1, flexGrow: 1 }}>
          {getNavItems().map((item) => (
            <Button
              key={item.path}
              component={Link}
              to={item.path}
              startIcon={item.icon}
              sx={{
                color: location.pathname === item.path ? '#6366F1' : '#94A3B8',
                background: location.pathname === item.path ? 
                  'rgba(99, 102, 241, 0.1)' : 'transparent',
                borderRadius: 2,
                fontWeight: 600,
                '&:hover': {
                  background: 'rgba(99, 102, 241, 0.2)',
                  color: '#6366F1',
                },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>

        {user ? (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Chip 
              icon={getRoleIcon(user.role)}
              label={user.role.replace('_', ' ')}
              sx={{ 
                color: getRoleColor(user.role),
                borderColor: getRoleColor(user.role),
                fontWeight: 600,
              }}
              variant="outlined"
            />
            
            <Button
              onClick={handleMenu}
              sx={{ 
                color: 'white',
                textTransform: 'none',
                fontWeight: 600 
              }}
            >
              {user.name}
            </Button>
            
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleLogout}>
                <Logout sx={{ mr: 1 }} />
                Logout
              </MenuItem>
            </Menu>
          </Box>
        ) : (
          <Button
            component={Link}
            to="/login"
            variant="outlined"
            sx={{
              borderColor: 'rgba(255,255,255,0.3)',
              color: 'white',
              fontWeight: 600,
              '&:hover': {
                borderColor: 'primary.main',
                bgcolor: 'rgba(99, 102, 241, 0.1)'
              }
            }}
          >
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;