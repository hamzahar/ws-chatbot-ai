import React from 'react';
import { Box, Typography, Container, IconButton } from '@mui/material';
import { GitHub, Twitter, LinkedIn } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: 'rgba(15, 23, 42, 0.8)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        py: 3,
        mt: 4
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © 2024 WS-Chatbot AI. All rights reserved.
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 1 }}>
            <IconButton size="small" sx={{ color: 'text.secondary' }}>
              <GitHub />
            </IconButton>
            <IconButton size="small" sx={{ color: 'text.secondary' }}>
              <Twitter />
            </IconButton>
            <IconButton size="small" sx={{ color: 'text.secondary' }}>
              <LinkedIn />
            </IconButton>
          </Box>
          
          <Typography variant="body2" color="text.secondary">
            Powered by AI 🤖
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;