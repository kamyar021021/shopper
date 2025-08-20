// src/components/Header.tsx
'use client';

import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton, 
  Box,
  useScrollTrigger,
  Slide,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { 
  Menu, 
  Close,
  Brightness4, 
  Brightness7,
  ShoppingCart
} from '@mui/icons-material';
import { useThemeContext } from '@/providers/ThemeProvider';
import { useState } from 'react';

interface HeaderProps {
  onCartClick: () => void;
}

interface HideOnScrollProps {
  children: React.ReactElement;
}

function HideOnScroll({ children }: HideOnScrollProps) {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Header = ({ onCartClick }: HeaderProps) => {
  const { toggleTheme, mode } = useThemeContext();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const menuItems = [
    { text: 'خانه', href: '#home' },
    { text: 'امکانات', href: '#features' },
    { text: 'محصولات', href: '#products' },
    { text: 'نظرات', href: '#testimonials' },
    { text: 'قیمت‌ها', href: '#pricing' },
    { text: 'تماس با ما', href: '#contact' },
  ];

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <HideOnScroll>
        <AppBar position="sticky">
          <Container maxWidth="xl">
            <Toolbar sx={{ py: 1 }}>
              <Typography 
                variant="h4" 
                component="div" 
                sx={{ 
                  flexGrow: 1,
                  fontWeight: 'bold',
                  background: theme.palette.mode === 'light' 
                    ? 'linear-gradient(45deg, #7E57C2 30%, #FF8A65 90%)' 
                    : 'linear-gradient(45deg, #B39DDB 30%, #FFAB91 90%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                LuxeStyle
              </Typography>
              
              {!isMobile ? (
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  {menuItems.map((item) => (
                    <Button
                      key={item.text}
                      color="inherit"
                      href={item.href}
                      sx={{ mx: 1, fontWeight: 500 }}
                    >
                      {item.text}
                    </Button>
                  ))}
                  
                  <IconButton color="inherit" onClick={onCartClick} sx={{ ml: 1 }}>
                    <ShoppingCart />
                  </IconButton>
                  
                  {/* <IconButton color="inherit" onClick={toggleTheme} sx={{ ml: 1 }}>
                    {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
                  </IconButton> */}
                </Box>
              ) : (
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <IconButton color="inherit" onClick={onCartClick} sx={{ ml: 1 }}>
                    <ShoppingCart />
                  </IconButton>
                  
                  {/* <IconButton color="inherit" onClick={toggleTheme} sx={{ ml: 1 }}>
                    {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
                  </IconButton> */}
                  
                  <IconButton 
                    edge="start" 
                    color="inherit" 
                    aria-label="menu"
                    onClick={toggleDrawer(true)}
                    sx={{ ml: 1 }}
                  >
                    <Menu />
                  </IconButton>
                </Box>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>

      {/* منوی موبایل */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: 280,
            backgroundColor: theme.palette.background.paper,
          }
        }}
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" component="div">
            منو
          </Typography>
          <IconButton onClick={toggleDrawer(false)}>
            <Close />
          </IconButton>
        </Box>
        <List>
          {menuItems.map((item) => (
            <ListItem  
              key={item.text} 
              component="a" 
              href={item.href}
              onClick={toggleDrawer(false)}
            >
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Header;