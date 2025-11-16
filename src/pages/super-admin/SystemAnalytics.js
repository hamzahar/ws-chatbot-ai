import React from 'react';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent
} from '@mui/material';
import { Analytics } from '@mui/icons-material';

const SystemAnalytics = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h3" gutterBottom className="gradient-text">
          System Analytics
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Platform analytics and performance metrics
        </Typography>
      </Box>

      <Card className="glass-effect">
        <CardContent sx={{ p: 4, textAlign: 'center' }}>
          <Analytics sx={{ fontSize: 64, color: 'text.secondary', mb: 2 }} />
          <Typography variant="h5" gutterBottom>
            System Analytics
          </Typography>
          <Typography variant="body1" color="text.secondary">
            View platform-wide analytics, performance metrics, and business insights.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default SystemAnalytics;