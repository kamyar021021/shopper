// src/providers/ThemeProvider.tsx
'use client';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { faIR } from '@mui/material/locale';

type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
  toggleTheme: () => void;
  mode: ThemeMode;
}

const ThemeContext = createContext<ThemeContextType>({
  toggleTheme: () => {},
  mode: 'light'
});

export const useThemeContext = () => useContext(ThemeContext);

export default function MuiThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>('light');

  useEffect(() => {
    // بررسی تم ذخیره شده در localStorage
    const savedTheme = localStorage.getItem('theme-mode') as ThemeMode;
    if (savedTheme) {
      setMode(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setMode('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    localStorage.setItem('theme-mode', newMode);
  };

  const theme = createTheme({
    direction: 'rtl',
    palette: {
      mode,
      primary: {
        main: mode === 'light' ? '#7E57C2' : '#B39DDB',
        light: mode === 'light' ? '#B39DDB' : '#D1C4E9',
        dark: mode === 'light' ? '#5E35B1' : '#4527A0',
      },
      secondary: {
        main: mode === 'light' ? '#FF8A65' : '#FFAB91',
        light: mode === 'light' ? '#FFAB91' : '#FFCCBC',
        dark: mode === 'light' ? '#D84315' : '#BF360C',
      },
      background: {
        default: mode === 'light' ? '#F5F5F5' : '#121212',
        paper: mode === 'light' ? '#FFFFFF' : '#1E1E1E',
      },
      text: {
        primary: mode === 'light' ? '#212121' : '#FFFFFF',
        secondary: mode === 'light' ? '#757575' : '#BDBDBD',
      },
    },
    typography: {
      fontFamily: 'var(--font-poppins), var(--font-roboto), Arial',
      h1: {
        fontSize: '3.5rem',
        fontWeight: 700,
        background: mode === 'light' 
          ? 'linear-gradient(45deg, #7E57C2 30%, #FF8A65 90%)' 
          : 'linear-gradient(45deg, #B39DDB 30%, #FFAB91 90%)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
        textShadow: mode === 'dark' ? '0 0 10px rgba(179, 157, 219, 0.5)' : 'none',
      },
      h2: {
        fontSize: '2.5rem',
        fontWeight: 600,
        color: mode === 'light' ? '#5E35B1' : '#D1C4E9',
      },
      h3: {
        fontSize: '2rem',
        fontWeight: 600,
        color: mode === 'light' ? '#5E35B1' : '#D1C4E9',
      },
      h4: {
        fontSize: '1.5rem',
        fontWeight: 500,
        color: mode === 'light' ? '#757575' : '#E0E0E0',
      },
    },
    shape: {
      borderRadius: 12,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            borderRadius: 8,
            fontWeight: 500,
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: mode === 'light' 
                ? '0 4px 8px rgba(126, 87, 194, 0.3)' 
                : '0 4px 8px rgba(179, 157, 219, 0.3)',
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            boxShadow: mode === 'light' 
              ? '0 4px 20px rgba(0,0,0,0.1)' 
              : '0 4px 20px rgba(0,0,0,0.3)',
            transition: 'transform 0.3s, box-shadow 0.3s',
            backgroundImage: 'none',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: mode === 'light' 
                ? '0 8px 30px rgba(0,0,0,0.15)' 
                : '0 8px 30px rgba(0,0,0,0.4)',
            },
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: mode === 'light' ? 'rgba(255,255,255,0.95)' : 'rgba(30,30,30,0.95)',
            backdropFilter: 'blur(10px)',
            boxShadow: mode === 'light' 
              ? '0 2px 20px rgba(0,0,0,0.1)' 
              : '0 2px 20px rgba(0,0,0,0.3)',
          },
        },
      },
    },
  });

  return (
    <ThemeContext.Provider value={{ toggleTheme, mode }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}