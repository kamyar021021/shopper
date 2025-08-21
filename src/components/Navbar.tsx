'use client';

import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  CssBaseline,
  useMediaQuery,
  Button,
  Container,
  Menu,
  MenuItem,
  Divider
} from '@mui/material';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Phone as PhoneIcon,
  ShoppingCart as ShoppingCartIcon,
  Person as PersonIcon,
  Search as SearchIcon,
  KeyboardArrowDown as KeyboardArrowDownIcon
} from '@mui/icons-material';

// استایل‌های سفارشی
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#fff',
  color: theme.palette.text.primary,
  boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
}));

const Logo = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  fontSize: '1.8rem',
  color: theme.palette.primary.main,
  [theme.breakpoints.down('md')]: {
    fontSize: '1.5rem',
  },
}));

const NavButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(0, 1),
  fontWeight: 500,
  fontSize: '1rem',
  color: theme.palette.text.primary,
  '&:hover': {
    backgroundColor: 'transparent',
    color: theme.palette.primary.main,
  },
}));

const ActionButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
  marginLeft: theme.spacing(1),
  '&:hover': {
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
}));

const DrawerContainer = styled(Box)(({ theme }) => ({
  width: 300,
  padding: theme.spacing(2),
}));

export default function TechnoLifeNavbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [categoryAnchor, setCategoryAnchor] = React.useState(null);
  const [servicesAnchor, setServicesAnchor] = React.useState(null);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleCategoryMenuOpen = (event: { currentTarget: React.SetStateAction<null>; }) => {
    setCategoryAnchor(event.currentTarget);
  };

  const handleCategoryMenuClose = () => {
    setCategoryAnchor(null);
  };

  const handleServicesMenuOpen = (event: { currentTarget: React.SetStateAction<null>; }) => {
    setServicesAnchor(event.currentTarget);
  };

  const handleServicesMenuClose = () => {
    setServicesAnchor(null);
  };

  // منوی ناوبری
  const navItems = [
    { text: 'خانه', href: '#' },
    { 
      text: 'دسته‌بندی محصولات', 
      href: '#',
      hasDropdown: true,
      onClick: handleCategoryMenuOpen
    },
    { 
      text: 'خدمات', 
      href: '#',
      hasDropdown: true,
      onClick: handleServicesMenuOpen
    },
    { text: 'درباره ما', href: '#' },
    { text: 'تماس با ما', href: '#' },
  ];

  // منوی دراپ‌داون دسته‌بندی
  const categoryMenuItems = [
    'لپ‌تاپ و کامپیوتر',
    'موبایل و تبلت',
    'لوازم جانبی',
    'گیمینگ',
    'لوازم خانگی هوشمند'
  ];

  // منوی دراپ‌داون خدمات
  const servicesMenuItems = [
    'تعمیرات تخصصی',
    'پشتیبانی آنلاین',
    'نصب و راه‌اندازی',
    'گارانتی محصولات'
  ];

  return (
    <>
      <CssBaseline />
      <StyledAppBar position="sticky">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* لوگو */}
            <Logo variant="h1" sx={{ flexGrow: { xs: 1, md: 0 } }}>
              تکنولایف
            </Logo>

            {/* منوی ناوبری - نمایش در دسکتاپ */}
            {!isMobile && (
              <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center', mx: 2 }}>
                {navItems.map((item) => (
                  <NavButton
                    key={item.text}
                    href={item.href}
                    endIcon={item.hasDropdown ? <KeyboardArrowDownIcon /> : null}
                  >
                    {item.text}
                  </NavButton>
                ))}
              </Box>
            )}

            {/* بخش اقدامات (آیکون‌ها) */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <ActionButton aria-label="جستجو">
                <SearchIcon />
              </ActionButton>
              <ActionButton aria-label="سبد خرید">
                <ShoppingCartIcon />
              </ActionButton>
              <ActionButton aria-label="پروفایل کاربری">
                <PersonIcon />
              </ActionButton>
              {isMobile && (
                <ActionButton
                  color="inherit"
                  aria-label="باز کردن منو"
                  edge="start"
                  onClick={handleDrawerOpen}
                >
                  <MenuIcon />
                </ActionButton>
              )}
            </Box>
          </Toolbar>
        </Container>

        {/* منوهای دراپ‌داون برای دسکتاپ */}
        <Menu
          anchorEl={categoryAnchor}
          open={Boolean(categoryAnchor)}
          onClose={handleCategoryMenuClose}
          PaperProps={{
            style: {
              width: '250px',
            },
          }}
        >
          {categoryMenuItems.map((item) => (
            <MenuItem key={item} onClick={handleCategoryMenuClose}>
              {item}
            </MenuItem>
          ))}
        </Menu>

        <Menu
          anchorEl={servicesAnchor}
          open={Boolean(servicesAnchor)}
          onClose={handleServicesMenuClose}
          PaperProps={{
            style: {
              width: '250px',
            },
          }}
        >
          {servicesMenuItems.map((item) => (
            <MenuItem key={item} onClick={handleServicesMenuClose}>
              {item}
            </MenuItem>
          ))}
        </Menu>
      </StyledAppBar>

      {/* منوی موبایل */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerClose}
        sx={{
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 300,
          },
        }}
      >
        <DrawerContainer>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Logo>تکنولایف</Logo>
            <IconButton onClick={handleDrawerClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider sx={{ my: 2 }} />

          <List>
            {navItems.map((item) => (
              <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
                <Button
                  fullWidth
                  sx={{ 
                    justifyContent: 'flex-start',
                    py: 1.5,
                    px: 2,
                    color: 'text.primary',
                    fontWeight: item.hasDropdown ? 600 : 400
                  }}
                  href={item.href}
                  onClick={() => {
                    if (item.hasDropdown) {
                      // برای موبایل، منوهای دراپ‌داون به صورت آکاردئون نمایش داده می‌شوند
                      alert(`منوی ${item.text} در نسخه موبایل`);
                    }
                    handleDrawerClose();
                  }}
                  endIcon={item.hasDropdown ? <KeyboardArrowDownIcon /> : null}
                >
                  {item.text}
                </Button>
              </ListItem>
            ))}
          </List>

          <Divider sx={{ my: 2 }} />

          <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 2 }}>
            <IconButton color="primary">
              <SearchIcon />
            </IconButton>
            <IconButton color="primary">
              <ShoppingCartIcon />
            </IconButton>
            <IconButton color="primary">
              <PersonIcon />
            </IconButton>
          </Box>

          <Button
            variant="contained"
            fullWidth
            startIcon={<PhoneIcon />}
            sx={{ mt: 3, py: 1.5 }}
          >
            تماس با پشتیبانی
          </Button>
        </DrawerContainer>
      </Drawer>
    </>
  );
}