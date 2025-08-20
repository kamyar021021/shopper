// src/components/Features.tsx
'use client';

import { Container, Grid, Typography, Box, Card, CardContent, alpha, useTheme } from '@mui/material';
import {
    LocalShipping,
    Security,
    SupportAgent,
    Autorenew,
    Payment,
} from '@mui/icons-material';

const Features = () => {
    const theme = useTheme();

    const features = [
        {
            icon: <LocalShipping sx={{ fontSize: 50 }} />,
            title: 'ارسال سریع',
            description: 'تحویل در کمتر از 24 ساعت در تهران و حومه'
        },
        {
            icon: <Security sx={{ fontSize: 50 }} />,
            title: 'ضمانت اصالت',
            description: 'تمام محصولات با گارانتی اصالت و سلامت فیزیکی'
        },
        {
            icon: <SupportAgent sx={{ fontSize: 50 }} />,
            title: 'پشتیبانی 24/7',
            description: 'پشتیبانی آنلاین در تمام ساعات شبانه روز'
        },
        {
            icon: <Autorenew sx={{ fontSize: 50 }} />,
            title: 'بازگشت 7 روزه',
            description: 'امکان بازگشت محصول تا 7 روز پس از خرید'
        },
        {
            icon: <Payment sx={{ fontSize: 50 }} />,
            title: 'پرداخت امن',
            description: 'پرداخت آنلاین با امنیت کامل و چندلایه'
        },
        {
            icon: <Autorenew sx={{ fontSize: 50 }} />,
            title: 'محصولات',
            description: 'استفاده از مواد اولیه سازگار با محیط زیست'
        }
    ];

    return (
        <Box id="features" sx={{ py: 10, backgroundColor: theme.palette.background.default }}>
            <Container maxWidth="lg">
                <Box textAlign="center" mb={8}>
                    <Typography variant="h2" component="h2" gutterBottom>
                        چرا ما را انتخاب کنید؟
                    </Typography>
                    <Typography variant="h6" color="textSecondary" sx={{ maxWidth: '600px', mx: 'auto' }}>
                        با ویژگی‌های منحصر به فردی که برای راحتی و اطمینان شما طراحی شده‌اند
                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    {features.map((feature, index) => (
                        <Grid size={{ xs: 12, md: 4, sm: 6 }} key={index}>
                            <Card
                                sx={{
                                    height: '100%',
                                    textAlign: 'center',
                                    transition: 'all 0.3s ease',
                                    background: theme.palette.mode === 'light'
                                        ? `linear-gradient(135deg, ${alpha(theme.palette.primary.light, 0.1)} 0%, ${alpha(theme.palette.primary.main, 0.1)} 100%)`
                                        : `linear-gradient(135deg, ${alpha(theme.palette.primary.dark, 0.2)} 0%, ${alpha(theme.palette.primary.main, 0.2)} 100%)`,
                                    '&:hover': {
                                        transform: 'translateY(-8px)',
                                        boxShadow: theme.shadows[8],
                                    }
                                }}
                            >
                                <CardContent sx={{ p: 4 }}>
                                    <Box
                                        sx={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            width: 80,
                                            height: 80,
                                            borderRadius: '50%',
                                            backgroundColor: alpha(theme.palette.primary.main, 0.1),
                                            color: theme.palette.primary.main,
                                            mb: 3,
                                        }}
                                    >
                                        {feature.icon}
                                    </Box>
                                    <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                                        {feature.title}
                                    </Typography>
                                    <Typography variant="body1" color="textSecondary">
                                        {feature.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Features;