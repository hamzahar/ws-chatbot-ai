import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Toaster } from 'react-hot-toast';
import 'bootstrap/dist/css/bootstrap.min.css';

// Theme and Styles
import { wsChatbotTheme } from './styles/theme';
import './App.css';

// Components
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

// Pages - Public
import Home from './pages/Home';
import Login from './pages/Login';

// Pages - Customer
import CustomerPortal from './pages/customer/CustomerPortal';
import OrderTracking from './pages/customer/OrderTracking';

// Pages - Store Admin
import StoreAdminDashboard from './pages/store-admin/StoreAdminDashboard';
import StoreInventory from './pages/store-admin/StoreInventory';
import StoreOrders from './pages/store-admin/StoreOrders';

// Pages - Super Admin
import SuperAdminDashboard from './pages/super-admin/SuperAdminDashboard';
import ManageStores from './pages/super-admin/ManageStores';
import ManageUsers from './pages/super-admin/ManageUsers';
import SystemAnalytics from './pages/super-admin/SystemAnalytics';

// Context for Authentication
import { AuthProvider, useAuth } from './context/AuthContext';

// Protected Route Component
const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user } = useAuth();
  
  if (!user) {
    return <Navigate to="/login" />;
  }
  
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" />;
  }
  
  return children;
};

function App() {
  return (
    <ThemeProvider theme={wsChatbotTheme}>
      <CssBaseline />
      <AuthProvider>
        <Router>
          <div className="App">
            <Navbar />
            <main>
              <Routes>
                {/* Public Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                
                {/* Customer Routes */}
                <Route path="/customer" element={
                  <ProtectedRoute allowedRoles={['customer', 'store_admin', 'super_admin']}>
                    <CustomerPortal />
                  </ProtectedRoute>
                } />
                <Route path="/track-order" element={
                  <ProtectedRoute allowedRoles={['customer', 'store_admin', 'super_admin']}>
                    <OrderTracking />
                  </ProtectedRoute>
                } />
                
                {/* Store Admin Routes */}
                <Route path="/store-admin" element={
                  <ProtectedRoute allowedRoles={['store_admin', 'super_admin']}>
                    <StoreAdminDashboard />
                  </ProtectedRoute>
                } />
                <Route path="/store-inventory" element={
                  <ProtectedRoute allowedRoles={['store_admin', 'super_admin']}>
                    <StoreInventory />
                  </ProtectedRoute>
                } />
                <Route path="/store-orders" element={
                  <ProtectedRoute allowedRoles={['store_admin', 'super_admin']}>
                    <StoreOrders />
                  </ProtectedRoute>
                } />
                
                {/* Super Admin Routes */}
                <Route path="/super-admin" element={
                  <ProtectedRoute allowedRoles={['super_admin']}>
                    <SuperAdminDashboard />
                  </ProtectedRoute>
                } />
                <Route path="/manage-stores" element={
                  <ProtectedRoute allowedRoles={['super_admin']}>
                    <ManageStores />
                  </ProtectedRoute>
                } />
                <Route path="/manage-users" element={
                  <ProtectedRoute allowedRoles={['super_admin']}>
                    <ManageUsers />
                  </ProtectedRoute>
                } />
                <Route path="/system-analytics" element={
                  <ProtectedRoute allowedRoles={['super_admin']}>
                    <SystemAnalytics />
                  </ProtectedRoute>
                } />
              </Routes>
            </main>
            <Footer />
            <Toaster 
              position="top-right"
              toastOptions={{
                style: {
                  background: '#1E293B',
                  color: '#F1F5F9',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                },
              }}
            />
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;