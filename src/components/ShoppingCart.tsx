// src/components/ShoppingCart.tsx
'use client';

import {
  Drawer,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Divider,
  Box,
  Button,
  Badge,
  TextField,
  useTheme
} from '@mui/material';
import { Delete, Add, Remove, Close } from '@mui/icons-material';

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface ShoppingCartProps {
  open: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemoveItem: (productId: number) => void;
}

const ShoppingCart = ({ 
  open, 
  onClose, 
  cartItems, 
  onUpdateQuantity, 
  onRemoveItem 
}: ShoppingCartProps) => {
  const theme = useTheme();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity, 
    0
  );

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity, 
    0
  );

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: { xs: '100%', sm: 450 },
          backgroundColor: theme.palette.background.paper,
        }
      }}
    >
      <Box sx={{ p: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h5" component="h2" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          سبد خرید
          <Badge 
            badgeContent={totalItems} 
            color="secondary" 
            sx={{ ml: 2 }}
          />
        </Typography>
        <IconButton onClick={onClose}>
          <Close />
        </IconButton>
      </Box>
      
      <Divider />

      {cartItems.length === 0 ? (
        <Box sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="h6" color="textSecondary" gutterBottom>
            سبد خرید شما خالی است
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ mb: 3 }}>
            محصولات مورد علاقه خود را به سبد خرید اضافه کنید
          </Typography>
          <Button 
            variant="contained" 
            onClick={onClose}
            sx={{ borderRadius: 2 }}
          >
            ادامه خرید
          </Button>
        </Box>
      ) : (
        <>
          <List sx={{ flexGrow: 1, overflow: 'auto' }}>
            {cartItems.map((item) => (
              <ListItem key={item.id} divider>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexGrow: 1 }}>
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.name}
                    sx={{ 
                      width: 60, 
                      height: 60, 
                      objectFit: 'cover',
                      borderRadius: 1,
                    }}
                  />
                  <Box sx={{ flexGrow: 1 }}>
                    <ListItemText
                      primary={item.name}
                      secondary={`${item.price.toLocaleString()} تومان`}
                    />
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
                      <IconButton 
                        size="small" 
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                      >
                        <Remove fontSize="small" />
                      </IconButton>
                      
                      <TextField
                        value={item.quantity}
                        size="small"
                        sx={{ 
                          width: 60,
                          '& .MuiInputBase-input': { 
                            textAlign: 'center',
                            py: 0.5,
                          }
                        }}
                        inputProps={{ min: 1 }}
                        onChange={(e) => {
                          const value = parseInt(e.target.value);
                          if (!isNaN(value) && value > 0) {
                            onUpdateQuantity(item.id, value);
                          }
                        }}
                      />
                      
                      <IconButton 
                        size="small" 
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      >
                        <Add fontSize="small" />
                      </IconButton>
                    </Box>
                  </Box>
                </Box>
                <ListItemSecondaryAction>
                  <IconButton 
                    edge="end" 
                    onClick={() => onRemoveItem(item.id)}
                    sx={{ ml: 1 }}
                  >
                    <Delete />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
          
          <Box sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h6">جمع کل:</Typography>
              <Typography variant="h6" color="primary">
                {totalPrice.toLocaleString()} تومان
              </Typography>
            </Box>
            
            <Button 
              variant="contained" 
              fullWidth 
              size="large"
              sx={{ 
                mb: 2,
                py: 1.5,
                fontSize: '1.1rem',
              }}
              onClick={() => {
                alert('سفارش با موفقیت ثبت شد!');
                onClose();
              }}
            >
              پرداخت و تکمیل سفارش
            </Button>
            
            <Button 
              variant="outlined" 
              fullWidth 
              onClick={onClose}
            >
              ادامه خرید
            </Button>
          </Box>
        </>
      )}
    </Drawer>
  );
};

export default ShoppingCart;