// src/components/Testimonials.tsx
'use client';

import { Container, Typography, Box, Card, CardContent, Avatar, Grid, useTheme } from '@mui/material';

const Testimonials = () => {
  const theme = useTheme();

  const testimonials = [
    {
      name: 'محمد رضایی',
      role: 'مدیر عامل',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
      content: 'خرید از این فروشگاه تبدیل به تجربه‌ای لذت‌بخش برای من شده. کیفیت محصولات و خدمات پس از فروش بی‌نظیر است.',
      rating: 5
    },
    {
      name: 'فاطمه محمدی',
      role: 'طراح داخلی',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      content: 'تنوع محصولات و طراحی زیبای سایت واقعاً تحسین برانگیز است. همیشه اولین انتخاب من برای خریدهای آنلاین هستید.',
      rating: 5
    },
    {
      name: 'علی حسینی',
      role: 'برنامه‌نویس',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
      content: 'سرعت ارسال محصولات شگفت‌انگیز است. کمتر از 12 ساعت پس از خرید، محصول به دستم رسید.',
      rating: 4
    }
  ];

  return (
    <Box id="testimonials" sx={{ py: 10, backgroundColor: theme.palette.background.default }}>
      <Container maxWidth="lg">
        <Box textAlign="center" mb={8}>
          <Typography variant="h2" component="h2" gutterBottom>
            نظر مشتریان ما
          </Typography>
          <Typography variant="h6" color="textSecondary">
            آنچه مشتریان درباره تجربه خریدشان می‌گویند
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid size={{xs:12, md:4}} key={index}>
              <Card 
                sx={{ 
                  height: '100%',
                  textAlign: 'center',
                  position: 'relative',
                  background: theme.palette.background.paper,
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Avatar
                    src={testimonial.avatar}
                    sx={{
                      width: 80,
                      height: 80,
                      mx: 'auto',
                      mb: 3,
                      border: `4px solid ${theme.palette.primary.main}`,
                    }}
                  />
                  
                  <Typography variant="body1" paragraph sx={{ fontStyle: 'italic', lineHeight: 1.8 }}>
                    "{testimonial.content}"
                  </Typography>
                  
                  <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                    {[...Array(5)].map((_, i) => (
                      <Box
                        key={i}
                        component="span"
                        sx={{
                          color: i < testimonial.rating ? theme.palette.secondary.main : theme.palette.grey[400],
                          fontSize: '1.2rem',
                          mx: 0.5,
                        }}
                      >
                        ★
                      </Box>
                    ))}
                  </Box>
                  
                  <Typography variant="h6" component="h4" gutterBottom>
                    {testimonial.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {testimonial.role}
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

export default Testimonials;