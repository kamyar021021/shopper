// src/components/Contact.tsx
'use client';

import { useState } from 'react';
import {
    Container,
    Typography,
    Box,
    Grid,
    TextField,
    Button,
    Paper,
    useTheme,
    Alert
} from '@mui/material';
import {
    Phone,
    Email,
    LocationOn,
    Send
} from '@mui/icons-material';

const Contact = () => {
    const theme = useTheme();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // شبیه‌سازی ارسال فرم
        setSubmitStatus('success');
        setTimeout(() => setSubmitStatus('idle'), 3000);
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const contactInfo = [
        {
            icon: <Phone sx={{ fontSize: 40 }} />,
            title: 'تلفن',
            content: '۰۲۱-۱۲۳۴۵۶۷۸',
            description: 'شنبه تا پنجشنبه، ۸ صبح تا ۵ عصر'
        },
        {
            icon: <Email sx={{ fontSize: 40 }} />,
            title: 'ایمیل',
            content: 'info@luxestyle.com',
            description: 'ما در کمتر از ۲۴ ساعت پاسخ می‌دهیم'
        },
        {
            icon: <LocationOn sx={{ fontSize: 40 }} />,
            title: 'آدرس',
            content: 'تهران، خیابان ولیعصر',
            description: 'پلاک ۱۲۳، طبقه چهارم'
        }
    ];

    return (
        <Box id="contact" sx={{ py: 10, backgroundColor: theme.palette.background.default }}>
            <Container maxWidth="lg">
                <Box textAlign="center" mb={8}>
                    <Typography variant="h2" component="h2" gutterBottom>
                        در تماس باشید
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                        ما خوشحال می‌شویم که از شما بشنویم
                    </Typography>
                </Box>

                <Grid container spacing={6}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
                            {submitStatus === 'success' && (
                                <Alert severity="success" sx={{ mb: 3 }}>
                                    پیام شما با موفقیت ارسال شد!
                                </Alert>
                            )}

                            <Grid container spacing={3}>
                                <Grid size={{ xs: 12, sm: 6 }}>
                                    <TextField
                                        fullWidth
                                        label="نام شما"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        sx={{ mb: 3 }}
                                    />
                                </Grid>
                                <Grid size={{ xs: 12, sm: 6 }}>
                                    <TextField
                                        fullWidth
                                        label="ایمیل"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        sx={{ mb: 3 }}
                                    />
                                </Grid>
                            </Grid>

                            <TextField
                                fullWidth
                                label="موضوع"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                sx={{ mb: 3 }}
                            />

                            <TextField
                                fullWidth
                                label="پیام شما"
                                name="message"
                                multiline
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                required
                                sx={{ mb: 3 }}
                            />

                            <Button
                                type="submit"
                                variant="contained"
                                size="large"
                                endIcon={<Send />}
                                sx={{
                                    px: 6,
                                    py: 1.5,
                                    fontSize: '1.1rem',
                                }}
                            >
                                ارسال پیام
                            </Button>
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                            {contactInfo.map((info, index) => (
                                <Paper
                                    key={index}
                                    sx={{
                                        p: 3,
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: 3,
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateX(-8px)',
                                            boxShadow: theme.shadows[8],
                                        }
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            width: 60,
                                            height: 60,
                                            borderRadius: '50%',
                                            backgroundColor: theme.palette.primary.main,
                                            color: 'white',
                                            flexShrink: 0,
                                        }}
                                    >
                                        {info.icon}
                                    </Box>
                                    <Box>
                                        <Typography variant="h6" component="h3" gutterBottom>
                                            {info.title}
                                        </Typography>
                                        <Typography variant="body1" gutterBottom sx={{ fontWeight: 500 }}>
                                            {info.content}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            {info.description}
                                        </Typography>
                                    </Box>
                                </Paper>
                            ))}
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Contact;