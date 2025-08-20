// src/components/Footer.tsx
'use client';

import {
    Container,
    Grid,
    Typography,
    Box,
    IconButton,
    Link,
    Divider
} from '@mui/material';
import {
    Facebook,
    Twitter,
    Instagram,
    LinkedIn,
    Email,
    Phone,
    LocationOn
} from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

const Footer = () => {
    const theme = useTheme();

    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: theme.palette.background.paper,
                py: 8,
                mt: 8,
                borderTop: `1px solid ${theme.palette.divider}`,
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid size={{ xs: 12, md: 4, sm: 6 }}>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                            LuxeStyle
                        </Typography>
                        <Typography variant="body2" color="textSecondary" paragraph>
                            ارائه‌دهنده بهترین محصولات با کیفیت عالی و طراحی بی‌نظیر برای زندگی لوکس شما.
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                            <IconButton size="small" sx={{ color: theme.palette.text.secondary }}>
                                <Facebook />
                            </IconButton>
                            <IconButton size="small" sx={{ color: theme.palette.text.secondary }}>
                                <Twitter />
                            </IconButton>
                            <IconButton size="small" sx={{ color: theme.palette.text.secondary }}>
                                <Instagram />
                            </IconButton>
                            <IconButton size="small" sx={{ color: theme.palette.text.secondary }}>
                                <LinkedIn />
                            </IconButton>
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 12, md: 4, sm: 6 }}>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                            لینک‌های سریع
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <Link href="#home" color="textSecondary" underline="hover">
                                خانه
                            </Link>
                            <Link href="#products" color="textSecondary" underline="hover">
                                محصولات
                            </Link>
                            <Link href="#features" color="textSecondary" underline="hover">
                                امکانات
                            </Link>
                            <Link href="#pricing" color="textSecondary" underline="hover">
                                قیمت‌ها
                            </Link>
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 12, md: 4, sm: 6 }}>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                            پشتیبانی
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                            <Link href="#" color="textSecondary" underline="hover">
                                سوالات متداول
                            </Link>
                            <Link href="#" color="textSecondary" underline="hover">
                                راهنمای خرید
                            </Link>
                            <Link href="#" color="textSecondary" underline="hover">
                                شرایط بازگشت
                            </Link>
                            <Link href="#" color="textSecondary" underline="hover">
                                حریم خصوصی
                            </Link>
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 12, md: 4, sm: 6 }}>
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                            تماس با ما
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <LocationOn fontSize="small" color="primary" />
                                <Typography variant="body2" color="textSecondary">
                                    تهران، خیابان ولیعصر، پلاک ۱۲۳
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Phone fontSize="small" color="primary" />
                                <Typography variant="body2" color="textSecondary">
                                    ۰۲۱-۱۲۳۴۵۶۷۸
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Email fontSize="small" color="primary" />
                                <Typography variant="body2" color="textSecondary">
                                    info@luxestyle.com
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

                <Divider sx={{ my: 4 }} />

                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="body2" color="textSecondary">
                        © ۲۰۲۴ LuxeStyle. تمام حقوق محفوظ است.
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 3, mt: { xs: 2, sm: 0 } }}>
                        <Link href="#" variant="body2" color="textSecondary" underline="hover">
                            شرایط استفاده
                        </Link>
                        <Link href="#" variant="body2" color="textSecondary" underline="hover">
                            حریم خصوصی
                        </Link>
                        <Link href="#" variant="body2" color="textSecondary" underline="hover">
                            کوکی‌ها
                        </Link>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;