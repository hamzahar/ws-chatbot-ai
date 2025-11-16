import React from 'react';
import { Paper, Typography, Box, Avatar } from '@mui/material';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import PersonIcon from '@mui/icons-material/Person';

const ChatBubble = ({ message, isAI = true, timestamp }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: isAI ? 'flex-start' : 'flex-end',
        mb: 2,
        gap: 1
      }}
    >
      {isAI && (
        <Avatar
          sx={{
            bgcolor: 'primary.main',
            width: 32,
            height: 32
          }}
        >
          <SmartToyIcon fontSize="small" />
        </Avatar>
      )}
      
      <Paper
        className={isAI ? 'chat-bubble-ai' : 'chat-bubble-user'}
        sx={{
          p: 2,
          maxWidth: '70%',
          position: 'relative'
        }}
      >
        <Typography variant="body1" sx={{ lineHeight: 1.4 }}>
          {message}
        </Typography>
        {timestamp && (
          <Typography
            variant="caption"
            color="text.secondary"
            sx={{ mt: 0.5, display: 'block' }}
          >
            {timestamp}
          </Typography>
        )}
      </Paper>

      {!isAI && (
        <Avatar
          sx={{
            bgcolor: 'secondary.main',
            width: 32,
            height: 32
          }}
        >
          <PersonIcon fontSize="small" />
        </Avatar>
      )}
    </Box>
  );
};

export default ChatBubble;