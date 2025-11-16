import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  TextField,
  Button,
  Paper,
  IconButton,
  Typography
} from '@mui/material';
import { Send, Mic, SmartToy } from '@mui/icons-material';
import ChatBubble from '../common/ChatBubble';
import { AI_RESPONSES } from '../../utils/constants';

const AIChatBot = ({ selectedStore, onOrderPlace }) => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    setMessages([
      {
        id: 1,
        text: AI_RESPONSES.greeting,
        isAI: true,
        timestamp: new Date()
      },
      {
        id: 2,
        text: AI_RESPONSES.helpMessage,
        isAI: true,
        timestamp: new Date()
      }
    ]);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const simulateAIResponse = async (userMessage) => {
    setIsProcessing(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    let aiResponse = "";
    const lowerMessage = userMessage.toLowerCase();
    
    // Help commands
    if (lowerMessage.includes('help') || lowerMessage.includes('madad') || lowerMessage.includes('मदद')) {
      aiResponse = AI_RESPONSES.helpMessage;
    }
    // Greetings
    else if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('salam')) {
      aiResponse = AI_RESPONSES.greeting;
    } 
    // Search for specific products like shampoo
    else if ((lowerMessage.includes('shampoo') || lowerMessage.includes('शैंपू') || lowerMessage.includes('شیمپو')) && selectedStore) {
      const shampooProducts = selectedStore.products.filter(product => 
        product.name.toLowerCase().includes('shampoo')
      );
      if (shampooProducts.length > 0) {
        aiResponse = `Haan ji! Shampoo available hai:\n${shampooProducts.map(p => `• ${p.name} - Rs. ${p.price} (${p.brand})`).join('\n')}\n\nKya aap order karna chahenge?`;
      } else {
        aiResponse = "Maazrat, shampoo currently available nahi hai. Kya aap koi aur product check karna chahenge?";
      }
    }
    // Order placement
    else if ((lowerMessage.includes('order') || lowerMessage.includes('order karo') || lowerMessage.includes('ऑर्डर करो') || lowerMessage.includes('خرید')) && selectedStore) {
      const products = extractProductsFromMessage(userMessage, selectedStore);
      if (products.length > 0) {
        const availableProducts = checkProductAvailability(products, selectedStore);
        if (availableProducts.length > 0) {
          const total = calculateTotal(availableProducts, selectedStore);
          aiResponse = `Bahut acha! Main ye products order kar raha hun:\n${availableProducts.join(', ')}\n\nTotal Amount: Rs. ${total}\n\nKya confirm karna hai?`;
        } else {
          aiResponse = `${AI_RESPONSES.itemNotFound} ${AI_RESPONSES.suggestAlternatives}`;
        }
      } else {
        aiResponse = "Aap kunsay products order karna chahte hain?";
      }
    }
    // Confirm order
    else if ((lowerMessage.includes('yes') || lowerMessage.includes('haan') || lowerMessage.includes('confirm') || lowerMessage.includes('हाँ') || lowerMessage.includes('جی ہاں')) && selectedStore) {
      aiResponse = AI_RESPONSES.orderConfirmed;
      if (onOrderPlace) {
        const products = extractProductsFromMessage(messages[messages.length - 2]?.text || "");
        onOrderPlace(selectedStore, products);
      }
    }
    // Product availability check
    else if (lowerMessage.includes('available') || lowerMessage.includes('hai') || lowerMessage.includes('है') || lowerMessage.includes('موجود')) {
      if (selectedStore) {
        const products = extractProductsFromMessage(userMessage, selectedStore);
        if (products.length > 0) {
          const availableProducts = checkProductAvailability(products, selectedStore);
          if (availableProducts.length > 0) {
            aiResponse = `Haan ji! Ye products available hain:\n${availableProducts.map(p => `• ${p} - Rs. ${getProductPrice(p, selectedStore)}`).join('\n')}`;
          } else {
            aiResponse = `Nahi ji, ye products currently available nahi hain. ${AI_RESPONSES.suggestAlternatives}`;
          }
        } else {
          aiResponse = "Aap kunsay products check karna chahte hain?";
        }
      } else {
        aiResponse = AI_RESPONSES.askShop;
      }
    }
    // Price inquiry
    else if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('कीमत') || lowerMessage.includes('قیمت')) {
      if (selectedStore) {
        const products = extractProductsFromMessage(userMessage, selectedStore);
        if (products.length > 0) {
          const priceInfo = products.map(product => {
            const price = getProductPrice(product, selectedStore);
            return price ? `${product}: Rs. ${price}` : `${product}: Available nahi hai`;
          });
          aiResponse = `Products ki prices:\n${priceInfo.join('\n')}`;
        } else {
          aiResponse = "Kunsay products ki price jan'na chahte hain?";
        }
      } else {
        aiResponse = AI_RESPONSES.askShop;
      }
    }
    // Default response
    else {
      aiResponse = "Main aapki madad kar sakta hun products dhoondhne, prices batane, aur orders place karne mein. Aap kya karwana chahte hain?";
    }
    
    return aiResponse;
  };

  const extractProductsFromMessage = (message, store = null) => {
    if (!store) return [];
    
    const productNames = store.products.map(product => 
      product.name.toLowerCase()
    );
    
    return productNames.filter(productName => 
      message.toLowerCase().includes(productName)
    );
  };

  const checkProductAvailability = (products, store) => {
    return products.filter(product => 
      store.products.some(storeProduct => 
        storeProduct.name.toLowerCase().includes(product) && storeProduct.available
      )
    );
  };

  const getProductPrice = (productName, store) => {
    const product = store.products.find(p => 
      p.name.toLowerCase().includes(productName.toLowerCase())
    );
    return product?.price || null;
  };

  const calculateTotal = (products, store) => {
    return products.reduce((total, product) => {
      const price = getProductPrice(product, store);
      return total + (price || 0);
    }, 0);
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      isAI: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    const aiResponse = await simulateAIResponse(inputMessage);
    
    const aiMessage = {
      id: messages.length + 2,
      text: aiResponse,
      isAI: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, aiMessage]);
    setIsProcessing(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <Box sx={{ height: '500px', display: 'flex', flexDirection: 'column' }}>
      <Paper 
        sx={{ 
          p: 2, 
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          background: 'rgba(15, 23, 42, 0.8)'
        }}
      >
        <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <SmartToy color="primary" />
          Pakistan AI Shopping Assistant
          {selectedStore && (
            <Typography variant="body2" color="primary" component="span">
              • {selectedStore.name}
            </Typography>
          )}
        </Typography>
      </Paper>

      <Box 
        sx={{ 
          flex: 1, 
          overflow: 'auto', 
          p: 2,
          background: 'rgba(15, 23, 42, 0.5)'
        }}
      >
        {messages.map((message) => (
          <ChatBubble
            key={message.id}
            message={message.text}
            isAI={message.isAI}
            timestamp={message.timestamp.toLocaleTimeString()}
          />
        ))}
        {isProcessing && (
          <ChatBubble
            message="Checking products..."
            isAI={true}
          />
        )}
        <div ref={messagesEndRef} />
      </Box>

      <Paper 
        sx={{ 
          p: 2, 
          borderTop: '1px solid rgba(255,255,255,0.1)',
          background: 'rgba(15, 23, 42, 0.8)'
        }}
      >
        <Box sx={{ display: 'flex', gap: 1 }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Apna message yahan likhein... (e.g., 'Al-Fatah mein shampoo hai? Price batao')"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={isProcessing}
            size="small"
          />
          <IconButton 
            color="primary"
            disabled={isProcessing}
          >
            <Mic />
          </IconButton>
          <Button
            variant="contained"
            endIcon={<Send />}
            onClick={handleSendMessage}
            disabled={!inputMessage.trim() || isProcessing}
            sx={{
              background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)'
            }}
          >
            Send
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default AIChatBot;