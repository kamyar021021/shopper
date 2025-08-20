// src/components/Hero.tsx
'use client';

import { Box, Container, Typography, Button, alpha, useTheme } from '@mui/material';
import { PlayArrow, ArrowDownward } from '@mui/icons-material';

const Hero = () => {
  const theme = useTheme();

  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      id="home"
      sx={{
        width: '100%',
        minHeight: '100vh',
        background: theme.palette.mode === 'light'
          ? `linear-gradient(135deg, ${alpha('#7E57C2', 0.9)} 0%, ${alpha('#5E35B1', 0.9)} 100%), url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=2000&q=80')`
          : `linear-gradient(135deg, ${alpha('#4527A0', 0.9)} 0%, ${alpha('#1A237E', 0.9)} 100%), url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=2000&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 75% 50%, transparent 20%, rgba(0,0,0,0.4) 80%)',
        }
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
        <Typography
          variant="h1"
          component="h1"
          gutterBottom
          sx={{
            fontSize: { xs: '2.5rem', md: '4rem', lg: '5rem' },
            mb: 3,
            textShadow: '2px 2px 8px rgba(0,0,0,0.5)',
            fontWeight: 800,
          }}
        >
          تجربه‌ای لوکس از 
          <Box component="span" sx={{ display: 'block', color: '#FF8A65' }}>
            خرید آنلاین
          </Box>
        </Typography>
        
        <Typography
          variant="h5"
          component="p"
          gutterBottom
          sx={{
            mb: 4,
            maxWidth: '800px',
            mx: 'auto',
            textShadow: '1px 1px 4px rgba(0,0,0,0.5)',
            fontWeight: 300,
            lineHeight: 1.8,
            fontSize: { xs: '1.1rem', md: '1.4rem' }
          }}
        >
          کشف کنید مجموعه‌ای از برترین محصولات با کیفیت استثنایی و طراحی بی‌نظیر 
          که زندگی روزمره شما را به تجربه‌ای لوکس تبدیل می‌کند
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap', mb: 6 }}>
          <Button
            variant="contained"
            size="large"
            href="#products"
            sx={{
              px: 6,
              py: 2,
              fontSize: '1.2rem',
              backgroundColor: theme.palette.secondary.main,
              '&:hover': {
                backgroundColor: theme.palette.secondary.dark,
                transform: 'translateY(-2px)',
              },
            }}
          >
            شروع خرید
          </Button>
          <Button
            variant="outlined"
            size="large"
            endIcon={<PlayArrow />}
            sx={{
              px: 6,
              py: 2,
              fontSize: '1.2rem',
              borderColor: 'white',
              color: 'white',
              '&:hover': {
                borderColor: 'white',
                backgroundColor: 'rgba(255,255,255,0.1)',
                transform: 'translateY(-2px)',
              },
            }}
          >
            تماشای ویدیو
          </Button>
        </Box>

        <Button
          onClick={scrollToFeatures}
          sx={{
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1,
            '&:hover': {
              backgroundColor: 'transparent',
              transform: 'translateY(5px)',
            }
          }}
        >
          <Typography variant="body2">
            کشف بیشتر
          </Typography>
          <ArrowDownward sx={{ animation: 'bounce 2s infinite' }} />
        </Button>
      </Container>

      <style jsx global>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
          40% {transform: translateY(-10px);}
          60% {transform: translateY(-5px);}
        }
      `}</style>
    </Box>
  );
};

export default Hero;