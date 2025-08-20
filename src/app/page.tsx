// src/app/page.tsx
'use client';

import { useState, useEffect } from 'react';
import {
  CssBaseline,
  Fab,
  useScrollTrigger,
  Zoom,
  Box,
} from '@mui/material';
import { KeyboardArrowUp } from '@mui/icons-material';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Products from '@/components/Products';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ShoppingCart from '@/components/ShoppingCart';
import MuiThemeProvider from '@/providers/ThemeProvider';

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

function ScrollTop() {
  const trigger = useScrollTrigger({
    threshold: 100,
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={scrollToTop}
        role="presentation"
        sx={{ position: 'fixed', bottom: 24, left: 24, zIndex: 1000 }}
      >
        <Fab color="primary" size="medium" aria-label="scroll back to top">
          <KeyboardArrowUp />
        </Fab>
      </Box>
    </Zoom>
  );
}

export default function HomePage() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedCart = localStorage.getItem('luxe-cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('luxe-cart', JSON.stringify(cartItems));
    }
  }, [cartItems, mounted]);

  if (!mounted) return null;

  return (
    <MuiThemeProvider>
      <CssBaseline />
      <Header onCartClick={() => setCartOpen(true)} />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="features">
          <Features />
        </section>
        
        <section id="products">
          <Products onAddToCart={(product) => setCartItems(prev => [...prev, {...product, quantity: 1}])} />
        </section>
        
        <section id="testimonials">
          <Testimonials />
        </section>
        
        <section id="pricing">
          <Pricing />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
      
      <ShoppingCart
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={(id, qty) => setCartItems(prev => 
          prev.map(item => item.id === id ? {...item, quantity: qty} : item)
        )}
        onRemoveItem={(id) => setCartItems(prev => prev.filter(item => item.id !== id))}
      />

      <ScrollTop />
    </MuiThemeProvider>
  );
}