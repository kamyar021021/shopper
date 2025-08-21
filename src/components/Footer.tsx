'use client';

import * as React from 'react';
import {
    Box,
    Container,
    Grid,
    Typography,
    Link,
    Divider,
    TextField,
    Button,
    IconButton,
    Stack,
    useTheme,
    useMediaQuery,
    styled
} from '@mui/material';
import {
    Facebook as FacebookIcon,
    Twitter as TwitterIcon,
    Instagram as InstagramIcon,
    LinkedIn as LinkedInIcon,
    Telegram as TelegramIcon,
    YouTube as YouTubeIcon,
    Email as EmailIcon,
    Phone as PhoneIcon,
    LocationOn as LocationIcon,
    AccessTime as TimeIcon,
    Send as SendIcon
} from '@mui/icons-material';

// استایل‌های سفارشی
const FooterContainer = styled(Box)(({ theme }) => ({
    background: 'linear-gradient(135deg, #1976d2 0%, #64b5f6 100%)',
    color: '#fff',
    padding: theme.spacing(6, 0),
    marginTop: 'auto',
    position: 'relative',
    overflow: 'hidden',
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 20% 80%, rgba(100, 181, 246, 0.4) 0%, transparent 50%)',
        pointerEvents: 'none',
    },
    '&::after': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 80% 20%, rgba(25, 118, 210, 0.3) 0%, transparent 50%)',
        pointerEvents: 'none',
    },
}));

const FooterContent = styled(Box)({
    position: 'relative',
    zIndex: 1,
});

const FooterTitle = styled(Typography)(({ theme }) => ({
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
    fontSize: '1.2rem',
    position: 'relative',
    paddingBottom: theme.spacing(1),
    '&::after': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: 40,
        height: 3,
        backgroundColor: '#fff',
    },
}));

const FooterLink = styled(Link)(({ theme }) => ({
    color: 'rgba(255, 255, 255, 0.9)',
    display: 'block',
    marginBottom: theme.spacing(1),
    transition: 'all 0.3s ease',
    '&:hover': {
        color: '#fff',
        transform: 'translateX(-5px)',
        textShadow: '0 0 5px rgba(255, 255, 255, 0.5)',
    },
}));

const SocialIcon = styled(IconButton)(({ theme }) => ({
    color: '#fff',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    margin: theme.spacing(0, 0.5),
    transition: 'all 0.3s ease',
    '&:hover': {
        backgroundColor: '#fff',
        color: '#1976d2',
        transform: 'translateY(-3px)',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
}));

const NewsletterInput = styled(TextField)(({ theme }) => ({
    '& .MuiInputBase-root': {
        color: '#fff',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: theme.spacing(1),
        backdropFilter: 'blur(10px)',
    },
    '& .MuiOutlinedInput-notchedOutline': {
        border: '1px solid rgba(255, 255, 255, 0.3)',
    },
    '& .MuiInputBase-input::placeholder': {
        color: 'rgba(255, 255, 255, 0.7)',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
        border: '1px solid rgba(255, 255, 255, 0.5)',
    },
}));

const FooterDivider = styled(Divider)(({ theme }) => ({
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    margin: theme.spacing(3, 0),
}));

const SubscribeButton = styled(Button)(({ theme }) => ({
    background: 'linear-gradient(45deg, #fff 30%, #e3f2fd 90%)',
    color: '#1976d2',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
    '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
    },
}));

// تعریف انواع TypeScript
interface FooterSection {
    title: string;
    links: string[];
}

export default function TechnoLifeFooter() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [email, setEmail] = React.useState<string>('');

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`ایمیل ${email} برای اشتراک خبرنامه ثبت شد`);
        setEmail('');
    };

    // لینک‌های فوتر
    const footerSections: FooterSection[] = [
        {
            title: 'دسته‌بندی محصولات',
            links: [
                'گوشی موبایل',
                'لپ‌تاپ و کامپیوتر',
                'تبلت',
                'لوازم جانبی موبایل',
                'هدفون و هدست',
                'گجت‌های wearable',
                'پاوربانک',
                'لوازم بازی'
            ]
        },
        {
            title: 'خدمات مشتریان',
            links: [
                'پرسش‌های متداول',
                'رویه بازگرداندن کالا',
                'شرایط استفاده',
                'حریم خصوصی',
                'گزارش باگ در سایت',
                'نظرات مشتریان'
            ]
        },
        {
            title: 'راهنمای خرید',
            links: [
                'نحوه ثبت سفارش',
                'رویه ارسال سفارش',
                'شیوه‌های پرداخت',
                'گارانتی محصولات',
                'پیگیری سفارشات',
                'باشگاه مشتریان'
            ]
        }
    ];

    return (
        <FooterContainer>
            <Container maxWidth="xl">
                <FooterContent>
                    <Grid container spacing={4}>
                        {/* درباره تکنولایف */}
                        <Grid size={{ xs: 12, md: 3 }}>
                            <FooterTitle variant="h6">
                                درباره تکنولایف
                            </FooterTitle>
                            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.9)', mb: 2, lineHeight: 1.8 }}>
                                فروشگاه اینترنتی تکنولایف با بیش از یک دهه سابقه، ارائه‌دهنده بهترین محصولات تکنولوژی با گارانتی معتبر و قیمت‌های رقابتی است.
                            </Typography>

                            {/* شبکه‌های اجتماعی */}
                            <Box sx={{ mt: 2 }}>
                                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.9)', mb: 1 }}>
                                    ما را در شبکه‌های اجتماعی دنبال کنید:
                                </Typography>
                                <Box>
                                    <SocialIcon size="small">
                                        <InstagramIcon fontSize="small" />
                                    </SocialIcon>
                                    <SocialIcon size="small">
                                        <TelegramIcon fontSize="small" />
                                    </SocialIcon>
                                    <SocialIcon size="small">
                                        <FacebookIcon fontSize="small" />
                                    </SocialIcon>
                                    <SocialIcon size="small">
                                        <TwitterIcon fontSize="small" />
                                    </SocialIcon>
                                    <SocialIcon size="small">
                                        <LinkedInIcon fontSize="small" />
                                    </SocialIcon>
                                    <SocialIcon size="small">
                                        <YouTubeIcon fontSize="small" />
                                    </SocialIcon>
                                </Box>
                            </Box>
                        </Grid>

                        {/* لینک‌های فوتر */}
                        {footerSections.map((section: FooterSection, index: number) => (
                            <Grid size={{ xs: 12, md: 2, sm: 6 }} key={index}>
                                <FooterTitle variant="h6">
                                    {section.title}
                                </FooterTitle>
                                <Box>
                                    {section.links.map((link: string, linkIndex: number) => (
                                        <FooterLink
                                            href="#"
                                            key={linkIndex}
                                            variant="body2"
                                            underline="none"
                                        >
                                            {link}
                                        </FooterLink>
                                    ))}
                                </Box>
                            </Grid>
                        ))}

                        {/* اطلاعات تماس و خبرنامه */}
                        <Grid size={{ xs: 12, md: 3 }}>
                            <FooterTitle variant="h6">
                                ارتباط با ما
                            </FooterTitle>

                            {/* اطلاعات تماس */}
                            <Stack spacing={1.5} sx={{ mb: 3 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <PhoneIcon sx={{ color: '#fff', fontSize: '1.2rem', ml: 1 }} />
                                    <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                                        ۰۲۱-۱۲۳۴۵۶۷۸
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <EmailIcon sx={{ color: '#fff', fontSize: '1.2rem', ml: 1 }} />
                                    <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                                        info@technolife.com
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                                    <LocationIcon sx={{ color: '#fff', fontSize: '1.2rem', ml: 1, mt: 0.2 }} />
                                    <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                                        تهران، خیابان ولیعصر، پلاک ۱۲۳۴
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                    <TimeIcon sx={{ color: '#fff', fontSize: '1.2rem', ml: 1 }} />
                                    <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                                        ۷ روز هفته، ۲۴ ساعته
                                    </Typography>
                                </Box>
                            </Stack>

                            {/* خبرنامه */}
                            <Box>
                                <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.9)', mb: 1 }}>
                                    از آخرین تخفیف‌ها و محصولات جدید باخبر شوید:
                                </Typography>
                                <Box component="form" onSubmit={handleSubscribe}>
                                    <NewsletterInput
                                        fullWidth
                                        placeholder="ایمیل خود را وارد کنید"
                                        value={email}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                                        required
                                        type="email"
                                        size="small"
                                        sx={{ mb: 1 }}
                                    />
                                    <SubscribeButton
                                        fullWidth
                                        variant="contained"
                                        endIcon={<SendIcon />}
                                        type="submit"
                                    >
                                        اشتراک در خبرنامه
                                    </SubscribeButton>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>

                    <FooterDivider />

                    {/* بخش پایینی فوتر */}
                    <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.9)', textAlign: isMobile ? 'center' : 'left', mb: isMobile ? 2 : 0 }}>
                            © {new Date().getFullYear()} کلیه حقوق برای فروشگاه اینترنتی تکنولایف محفوظ است.
                        </Typography>

                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.9)', ml: 2 }}>
                                اعتماد و امنیت:
                            </Typography>
                            <Box sx={{ display: 'flex' }}>
                                {/* لوگوهای اعتماد */}
                                <Box
                                    component="img"
                                    src="/static/images/trust-symbol1.png"
                                    alt="نماد اعتماد الکترونیک"
                                    sx={{ height: 40, width: 'auto', ml: 1, filter: 'brightness(0) invert(1)' }}
                                />
                                <Box
                                    component="img"
                                    src="/static/images/trust-symbol2.png"
                                    alt="پرداخت امن"
                                    sx={{ height: 40, width: 'auto', ml: 1, filter: 'brightness(0) invert(1)' }}
                                />
                            </Box>
                        </Box>
                    </Box>
                </FooterContent>
            </Container>
        </FooterContainer>
    );
}