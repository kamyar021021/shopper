// src/components/Pricing.tsx
'use client';

import { useState } from 'react';
import {
    Container,
    Typography,
    Box,
    Card,
    CardContent,
    Button,
    Grid,
    Chip,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    ToggleButtonGroup,
    ToggleButton,
    useTheme
} from '@mui/material';
import { CheckCircle, Star } from '@mui/icons-material';

const Pricing = () => {
    const theme = useTheme();
    const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

    const plans = [
        {
            name: 'پایه',
            price: { monthly: 29000, yearly: 290000 },
            description: 'مناسب برای شروع کار',
            features: [
                '۵ محصول',
                'پشتیبانی ایمیل',
                'فضای ذخیره‌سازی ۱GB',
                'گزارشات پایه'
            ],
            popular: false
        },
        {
            name: 'حرفه‌ای',
            price: { monthly: 59000, yearly: 590000 },
            description: 'مناسب برای کسب و کارهای کوچک',
            features: [
                '۲۰ محصول',
                'پشتیبانی优先',
                'فضای ذخیره‌سازی ۵GB',
                'گزارشات پیشرفته',
                'تحلیل بازار'
            ],
            popular: true
        },
        {
            name: 'enterprise',
            price: { monthly: 99000, yearly: 990000 },
            description: 'مناسب برای سازمان‌های بزرگ',
            features: [
                'محصولات نامحدود',
                'پشتیبانی ۲۴/۷',
                'فضای ذخیره‌سازی نامحدود',
                'گزارشات سفارشی',
                'تحلیل پیشرفته',
                'API دسترسی'
            ],
            popular: false
        }
    ];

    return (
        <Box id="pricing" sx={{ py: 10, backgroundColor: theme.palette.background.paper }}>
            <Container maxWidth="lg">
                <Box textAlign="center" mb={8}>
                    <Typography variant="h2" component="h2" gutterBottom>
                        تعرفه‌های مناسب
                    </Typography>
                    <Typography variant="h6" color="textSecondary" sx={{ maxWidth: '600px', mx: 'auto' }}>
                        پلن‌های قیمت‌گذاری شفاف برای هر نیازی
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
                    <ToggleButtonGroup
                        value={billingPeriod}
                        exclusive
                        onChange={(_, newPeriod) => newPeriod && setBillingPeriod(newPeriod)}
                        sx={{
                            backgroundColor: theme.palette.background.default,
                            borderRadius: 3,
                            p: 1,
                        }}
                    >
                        <ToggleButton value="monthly" sx={{ px: 4, py: 1, borderRadius: 2 }}>
                            ماهانه
                        </ToggleButton>
                        <ToggleButton value="yearly" sx={{ px: 4, py: 1, borderRadius: 2 }}>
                            سالانه (۲ ماه رایگان)
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Box>

                <Grid container spacing={4} alignItems="stretch">
                    {plans.map((plan, index) => (
                        <Grid size={{ xs: 12, md: 4 }} key={index}>
                            <Card
                                sx={{
                                    height: '100%',
                                    position: 'relative',
                                    border: plan.popular ? `2px solid ${theme.palette.primary.main}` : 'none',
                                    transform: plan.popular ? 'scale(1.05)' : 'none',
                                    zIndex: plan.popular ? 1 : 0,
                                }}
                            >
                                {plan.popular && (
                                    <Chip
                                        icon={<Star />}
                                        label="پرفروش"
                                        color="primary"
                                        sx={{
                                            position: 'absolute',
                                            top: -12,
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            fontWeight: 'bold',
                                        }}
                                    />
                                )}

                                <CardContent sx={{ p: 4, textAlign: 'center' }}>
                                    <Typography variant="h4" component="h3" gutterBottom>
                                        {plan.name}
                                    </Typography>

                                    <Typography variant="h6" color="textSecondary" paragraph>
                                        {plan.description}
                                    </Typography>

                                    <Box sx={{ my: 3 }}>
                                        <Typography variant="h3" component="div" color="primary">
                                            {plan.price[billingPeriod].toLocaleString()}
                                            <Typography variant="h6" component="span" color="textSecondary">
                                                تومان
                                            </Typography>
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            {billingPeriod === 'monthly' ? 'هر ماه' : 'هر سال'}
                                        </Typography>
                                    </Box>

                                    <List sx={{ mb: 3 }}>
                                        {plan.features.map((feature, idx) => (
                                            <ListItem key={idx} sx={{ px: 0 }}>
                                                <ListItemIcon sx={{ minWidth: 40 }}>
                                                    <CheckCircle color="primary" />
                                                </ListItemIcon>
                                                <ListItemText primary={feature} />
                                            </ListItem>
                                        ))}
                                    </List>

                                    <Button
                                        variant={plan.popular ? "contained" : "outlined"}
                                        fullWidth
                                        size="large"
                                        sx={{
                                            borderRadius: 2,
                                            py: 1.5,
                                            fontSize: '1.1rem',
                                        }}
                                    >
                                        شروع کنید
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Pricing;