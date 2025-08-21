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
    Divider,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Chip,
    Rating,
    Stack
} from '@mui/material';
import {
    Menu as MenuIcon,
    Close as CloseIcon,
    Phone as PhoneIcon,
    ShoppingCart as ShoppingCartIcon,
    Person as PersonIcon,
    Search as SearchIcon,
    KeyboardArrowDown as KeyboardArrowDownIcon,
    FavoriteBorder as FavoriteIcon,
    CompareArrows as CompareIcon
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

const ProductCard = styled(Card)(({ theme }) => ({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.3s, box-shadow 0.3s',
    '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
    },
}));

const ProductImage = styled(CardMedia)(({ theme }) => ({
    height: 200,
    objectFit: 'contain',
    padding: theme.spacing(2),
    backgroundColor: '#f5f5f5',
}));

const OldPrice = styled(Typography)(({ theme }) => ({
    textDecoration: 'line-through',
    color: theme.palette.text.secondary,
    fontSize: '0.9rem',
    marginLeft: theme.spacing(1),
}));

const DiscountBadge = styled(Chip)(({ theme }) => ({
    position: 'absolute',
    top: theme.spacing(1),
    left: theme.spacing(1),
    backgroundColor: theme.palette.error.main,
    color: '#fff',
    fontWeight: 'bold',
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
    fontWeight: 'bold',
    marginBottom: theme.spacing(3),
    position: 'relative',
    paddingBottom: theme.spacing(1),
    '&::after': {
        content: '""',
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: 50,
        height: 3,
        backgroundColor: theme.palette.primary.main,
    },
}));

export default function TechnoLifePage() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const [categoryAnchor, setCategoryAnchor] = React.useState(null);
    const [servicesAnchor, setServicesAnchor] = React.useState(null);
    const [isMounted, setIsMounted] = React.useState(false);

    React.useEffect(() => {
        setIsMounted(true);
    }, []);

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

    // داده‌های محصولات موبایل
    const mobileProducts = [
        {
            id: 1,
            name: 'گوشی موبایل سامسونگ گلکسی S23 اولترا',
            price: 32000000,
            oldPrice: 35000000,
            discount: 9,
            rating: 4.8,
            image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDw8NDQ4ODQ0NDQ0NDQ0NDQ8NDQ0NFREWFhURFRUYHSggGBomGxUVITEiJSouLy4uFx8zODMsNygtLisBCgoKDg0OFw8PFy0dFR0rLS0rLSstLS0tLSsrLTcrKy0rLS0tLS0vKy0rKy0rLSstKy0tKy0tLS0tLSstKy0rLf/AABEIAOEA4QMBEQACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAgMBBAYHBQj/xABPEAACAgADAAoMCQgJBQAAAAAAAQIDBAURBgcSEyExNHOxsiJBUVJVYXFydZGSsxUXMjNFU4GT0RQWJTWUodLTIyRCQ2JjgqPBosLD4fH/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQIDBAX/xAAwEQEBAAIAAwMLBAMBAAAAAAAAAQIRAwQSMVFxBRMUFSEiIzIzYaFBUoHhkbHBQv/aAAwDAQACEQMRAD8A9xAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACG+x76PrQDfYd9H2kA32HfR9pAN9h30faQDfYd9H2kA32PfR9aAb7Dvo+tAN9j30fWgG+x76PrQDfY99H1oBvke+j60A32PfR9aAb7Hvo+tAN8j30fWgG+x76PrQGd8j3y9aAkAAAAAAAAAAAAEbJqMXJ8UU5PyJagacMPviU7lupS4VXLhhWu1Hc8TfjLIfPzXOspwUlXi8TgsNNrVV3TqhPTu7l8OhCG7gbMHiYK7DvD31S+TZTvdkH9seAkXfk1X1dfsR/AIReGq+rr9iP4EiuWHr+rr9iJKFN1dUYuThBKKcn2EeJEjwTONk2Z51ibYYGz8kwdUtynW3StzrwOUordNvj3P/0rJcuxnxuPhwZvLtqhbHsw7ea36+J3P/vL+Z+7i9aT9n5/o/N3MPCuI/3f5hPmfuj1pP2fn+mfzZx7+lsR67v5g8z9z1pP2fn+h7Fsw07HNcQ3pwJyvSb8u+cA8z90zypj+uH5/py+DvzC66vDxxeJVtlu8uLxN2tck9JOXDxLhf2GMlt09HPiY4YXO9km3YR2G5g/pfEf7/8ANN/M/d5vrSfs/P8AS2OwnMPDOIX2XP8A8o8x9z1pP2fn+lkdg2YeGb/Zu/mjzH3T6zn7Pz/SUtguZ6awzm5y7SkrorXyqx9A8xe9aeUZ+uLe2GbLc1yjMKsszWyV1GIcY12Sk7NN09IzhN8LWvA0+FeLt45Y3G6rv4XFx4mPVi93KtAAAAAAAAAAA1sy+Zt5qfVYHxNsDPJ5ZluKxlfztcIQpbWqjbZONcZNdvRy108RKr8r34u2+c7JWScpyc5znJudk3/ak+OUmQs6Pat2S4jLs0oipS3nE314XFVa9hOM5qCm130ZNNPj01XbERX6iZdVBskQkSh87PX/AFbEczZ1WRSPEdgFCWBUkuGy66Un3WnueiKJwuo8XyjbeNrukdFvRfqcDKqHUJxqHUhbGsnqGKsvpjY7lVWrpLSVqrirJLuOWmrJ3O1a8TK49Nt6e5uwgW2o2IRJ2LoxLbWlWqIXlcZtkUrfMqt/txzGFaf+GW5bXrgjHj9ker5Oy97KfZ7lV8mPmroOZ6qYAAAAAAAAABrZl8zbzc+gD5mzDI45pgcTgZS3Dvr7Cb4VC2MlOuT8SlGOvi1JVflXOMjx2W3yoxNcsNYnot80jCen9qE32M140Qs7bao2CX4rF0Yy2ElhcPbDETulGUYWzg91CuvXRz7JJuS4NFpw6kyItfoec0tNWk29Fq9NX3EWVRZIhIlD52fclxHMWdVkVMePbXcNcvr8Vl+vi/pGZdWnh8/9e/x/p0u8jqcWmVST1I0mqSepCcaS0yFsai0yQsjWWlQtjAvKlbGJaVKyMSy8cbtlLT4L9KU9DMuN2R6fk6+/l4PbKfkx81dBzPYTAAAAAAAAAANLObNzRY+6ow+yUlH/AJJguvtjXGVk5KEIRlOc5NKMYJauTfaSRKryDZBt2VxscMHg4XUxfY24qcoSs/xKtRe5Xc3T18SI2nTpNgG2Zhc4n+TTr/JMZuXKFTmrKr4rhe9y0T3SXC4tJ6cWuj0mVFjsMVhN8kpNrRJxalDdPTXji9eB/wDruEXHevsS6XsuqhIkfNz3kuI5mzqsipjxra91WBrlH6y7yP8ApGcXEy1k8HyhLOYtn2/07bDNWLuS7aIme2GOsvFsKgt1J6ElQWmSvSkqS0yR0pKovMldJKs0lRpJQLymk1AvKnRKWnlNcZtXLLXi4fbH4XlmvhSjoZXmPlj0PJXt4mXg9rwNm7qqk+OVcG/K4o43vLwAAAAAAAAAD52yB/1eXjlWv+tExFc3tvytWSY51a67mhT0495d9as+zc66+LUIj8uwnFye+N9vXjfD9hCz6+wWVqzPASp3W7WPwiWnHw2pNPTtbnd6+LUmFfrdl1EGEISJHzc95NiOZs6rIqY8n2tqd1l1T/zcR7xnmce++8zm+F1cS11cKGnquBrtmPU5PM6fTwslPglwS/dI1xz20xx37L2tneDSUvDN5Lys7w2N6LyqXBjezSVTpNwXlV0hOXaRtiplddilo6JWWnF7Y/HlfpSjoZnx77I9TyV9TLwezZQ9aKubivsXActe7G2QAAAAAAAAAD5uyDk8vPr66JiK2cXh67oTpthGyq2Eq7K5LWM4SWkotdxpslDxPP8AaNs36U8BiaZUSlrGrFOyuyqPe75FS3flaT8vGNG3WbANrSrKrFib5wvxMFLeY1QcaaHJaSknJtzm1qt09NE9EkTIWu/JQgyUISA+bnvJsRzNnVZFTHm21XXrldT/AM3Ee9Z4/NX4lUz4e7t2UaUc/UyvBTVJaZKXgtumfal9j/E3w4n6VS4L3A22pcEHWWlZXBFwLzJncGvY+0jbGsssVDRvjWFxRaNZWdjidsnjyv0pT0Mrxb7I9LyXPiZeD2TJ+T1eYjCvajcISAAAAAAAAAPm7IeTy8+vromIrdkSqgyRgkRAgyUISA+dnnJsRzNnVZFTHnu1PH9FU89ifeyPF5r6lb447jtIxOdPQsjEmKXBNRLxjlgtrlpwPi6DbHJhlgtaWmvaNZWdxa9nD5DTFlliolE1lY5YqpRNsa58sVbRtjWVxcRtlceV+lKehjiX2R3eTZ7+Xg9iyfk9XmIyr2I3CEgAAAAAAAAD52frXDz8Uq3/ALkSYituRZVB8YGCREIQZIhID52ecmxHMWdVkUjzfark/gurRtf0uJ4m/rWeRzU+JXVh2OyjKXdfrZz6TqrIyl3X62TpSypqUu6/Wy0jLKViUpd9L2mXxc+crZwGrUtW3w8Grb7RtGeEvt2vlEtKm4qpxNJWGWKmcTTGsMsVMkb41z5YuG2zOPK/SlPQy2d9kdnk+e/l4PYsqjpRTzcH61qUr1o2yAAAAAAAAAAfPz7k8/LV7yJM7UVsSLKoskY1CEdSRBgQkB8/POTYjmbOqyKR5xtVr9F1c7ifes8nmfqV28Oe67KKMFtLIomRSxNItIyyg0XkYZxt5fHgl5UXUwna2JRJlTYqnEvKwyiiaNcXPlFE0bY1z5Rwu2b9F+laehl72OnkZ798HsOV/MU81X1UVr1I2gAAAAAAAAAD5+fcns8tfvIkwq+RdRFsIR1JEdQIsCEgNDPOTYjmbOqyKR51tVfqurncT71nl8xPfrt4fyuyiY6XWInSlSRaRnRlpGOTdy9cEvKiarjO1sSQhYqmi8Y5RRNGuLnziiaNcXPlHB7Z6/VfpWnoZo6OT+e+D2HLPmKeZq6qFehGyQkAAAAAAAAAfPz7k9nlr95EmIq2TLqItkiOoGNQIsCLA0M85LiOZs6pFTHnW1T+q6udxPvWedxp7zr4d912UTLpW2midK2pk6UoWkZVvZdxS8q6CM4ri2WRCqpl4yyUTNY58lE0bYufJwW2j9F+laehl2/KfPfB7BlnzFPM1dVCvQjZIAAAAAAAAAB8/P8Ak1nlr95EmdqKnJ8Jooi2BHUDAGNQMAaOeclxHMWdUikecbVb/RdXO4n3rOPiT3nRjfY7GLM+lbaxMdKtqSZOlbWdSdM7W9l3FLyroK5xWVtMiQtVTLyMsqpmaSMMlEzXGMcnBbaX0X6Vp6GXrblPmvg9eyv5inmauqiK9CNogAAAAAAAAAGpm0FKi1PtQcvtXCv3omIquT4TRRFsCOoADAADRz3kuI5izoIqY812rH+i6udxHvWYZRfbsYsp0nUsix0o2mmOlFrOo0ztb2XPsZeVdBXOKytpsrIi1XJl5GdqmbNJGOVUyNZGVrgttP6L9K09DJy7G/KfNfB7HhYKNcIrijCCXkSKPRWgAAAAAAAAAGrmnzF3NT6rERVEnwmqiLAxqBhAAMoDSz3kuI5izoIqY8v2r5foyrncR7xlZNxGV9rsIyHSr1LIyK9KOpYpEdKLkkmT0qXJ9DLn2MvKugpnFepstldK3JXJlpFLVUmaSM7VUjSRla4LbT4sr9K09DGfZHVyfzXwezUfJj5segyeimAAAAAAAAAAauafMXc1Z1WTO0rWk+E0ZosDAGQCAkgNLPuSYjmLOgikeVbWcv0bVzuI94y/Dm8WPFusnWxmTcVOpbGRXpOpbGZGkbTUhpW19HLX2MvKugzzim202V0jauTLSK2qpMvIpaqkaSM64PbS4sr9KU9DK8Tsjq5L574PZ6PkR82PQYvTTAAAAAAAAAANXNfmLuas6rJhWq+M0ZogACAkgJIDSz/kmJ5izoIpHkm1tL9HVc7f7xnRwZ7kcvHvv11kZlrix6lkZlbidS2MiOlHUsUiOlFyfTyt9jLzl0GXEiJW42V0i1CRaRG1UmWkUqqReRSuD20vov0pT0MrxeyOzkfnvg9no+RHzY9BzvTWAAAAAAAAAAGrmvzF3NWdVkwrUZozYAIDKAkgJoDR2QckxPMWdBFTHj211LTL6+cv94zr4E+HHBzN+JXUxma2OfayMyvSjqXRmV6VepbGZGkdT6mV2pRlrwNtNeNaGPEi2N9jddse7+4z0nqiuVse6WkVuUVytXdLyK3KKpWrul5FblHCbZ80/gzTwpT0Mz409kdnIWXPLwe1UfIj5seg5nqrAAAAAAAAAADUzXk93M2dVkwrUfGaMwAgMoCSAsQGjsg5JieYs6CKR4ttfz0wFfOX+8Z38tPhx5/NX4ldNGw2sc1q2NhTTO1dCZGlLk26Y9t+opVsfu2ozKaX6mzC/XgfH0mdw7lbWXISKWq5SLyKWq5SLSK2uJ2yX+rPSdPQzLmPlj0PJt+Jl4PcKPkR82PQcj2VgAAAAAAAAABqZtye7mbOqyYVps0ZgGUBlATQFiA0dkPI8TzFnQRUx4dsEnpga+cu67PS5SfCjzeb+rXRxsN7HHathMrYztbtPBwvj6DOqxtwmUsW2ujMrpO0t2NG1kbu76yOlSsuQkZ2q3ItpW1xm2K+HLfSdPQzDmflni9HyXfiZeD3Oj5EfNj0HG9xYAAAAAAAAAAambcnu5mzqsQrTZqzAMoDFkW00uB9rh07YEN6s4ey4XudOylomkv+dQJRpsWnZa6Ra4Zy4902v3aAaWe1WLC4huWq/J57pbpvh3GnTr+4ipeH7Cp6YOHn29dnp8n9KPM5z6t/h0Ncm+I6K4rW7TovL3Sl9rOtmEymkNiEythtdGZXRtNTI0jY5jStpG7TyEqWp7stpna47bCfDlvpKk5ua+WeL1PJP1MvD/r3ej5EfNj0HC95YAAAAAAAAAAambcnv5mzqsQrTNWYAQE0BNATiBo7IuR4rmLOgipjwDYYm8JBLi3dvD/rZ6nJ34M/l5fOfVv8OmqaXEbVxWL4TIRpfCZXSul8JkWKr42FdIT3ZCLWHYRpS1F2BS0jdoSra5nZ7YpPLtPCVJzc18s8XqeSPqZeH/XveH+RDzY9BwvfWAAAAAAAAAAGpm/J7+Zs6rEK0maswDKAmgJoCaA0NkfI8VzFnQRUx4FsNl/U4efb12elyn0o8znJ8W/w+/GZ0uSxbGZCul0JkK6XwmVVsXRmRpSrFMrpSsOYUqDmFai5hSuZ2ZS1ll/pGk5ea+WeL1vJH1M/D/r9D4f5EPMj0HC99YAAAAAAAAAAaeb8nv5mzqsQrTZqzAMoCcQJxAsiB8/ZHyPFcxZ0EVMfnnYZiE8NvevZV2S1Xb0lwp9PqZ6PJZS8PX6x5/OY2Z773Qxkdbk0tjIhXS2MyFbF8JkKWLozKs6mpEM6zuiGdYbCtQbCrldl+Jjv+X069n+V1WtduMd2opvytv2WcfN5T2R7Pkfh3eef6dj9I4f5EPMj0HE9xYAAAAAAAAAAVYunfa7K9dN8rnDXubpNagfHosck1JbmyHY2Q7cJ/h20+2jRmtJGUBNATiBYgKsbh1dVbS/7yucNe5qtNSB+Us5y3F5Rip0z3dM4SkoT00VkNeB9xri4CMc8sLvG6q2WOOc1ZuMR2S4xf3kH43XDU29M4vf+GPovC7klsoxvfw+6iPS+L3/hHonC7vyytlWO7+H3UR6Xxe/8HofC7vyktluP+sh91Ej0vi9/4R6Fwe78pLZhmH1lf3MB6VxO9X0Hgd35Z/PLMfrK/uYEelcTvR6v4Hdf8n555j9ZX9zAek8TvR6u5fuv+T88sx+sr+5gPSeJ3o9W8v3X/KM9mGYtab9CPjjTXr+9Mek8TvTPJvLT/wA/mt/YHkWLzfMaZdnZGF0Lb75atRUWno39i4DG227rsxwxwkxxmo/VUVoklxJaIhZkAAAAAAAAAAAa+JwVVujnBOSWimm4TS7iktGkBR8E09279qxH8RO6jUPgmnu3ftWI/iG6ah8E092/9qxH8Y3TUZ+Cae+v/a8R/GN01D4Kq77EfteJ/jG6ah8F1d9iP2vE/wAY2ajVx2xnA4laYil3ri0uuttWn+qTGzT5/wAXmR+DsP7LISx8XeReDsP7LAfF1kXg3Dey/wAQHxc5D4Nw3sP8QMfFzkPg3Dew/wAQM/FzkPg3Dew/xAfF1kXg3Dey/wAQM/F3kXg3Dew/xAytr3I19HYb2H+IH3cvy7D4WO94equmHe1xUUBtAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/2Q==',
            features: ['128GB', '5G', '8GB RAM', 'Snapdragon 8 Gen 2']
        },
        {
            id: 2,
            name: 'آیفون 14 پرو مکس',
            price: 45000000,
            oldPrice: 48000000,
            discount: 6,
            rating: 4.9,
            image: 'data:image/jpeg;base64,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',
            features: ['256GB', '5G', '6GB RAM', 'A16 Bionic']
        },
        {
            id: 3,
            name: 'شیائومی ردمی نوت 12',
            price: 8500000,
            oldPrice: 9500000,
            discount: 11,
            rating: 4.3,
            image: 'data:image/jpeg;base64,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',
            features: ['128GB', '5G', '8GB RAM', 'Snapdragon 778G']
        },
        {
            id: 4,
            name: 'گوشی موبایل هوآوی P50 پرو',
            price: 18000000,
            oldPrice: 20000000,
            discount: 10,
            rating: 4.5,
            image: 'data:image/jpeg;base64,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',
            features: ['256GB', '5G', '8GB RAM', 'Snapdragon 888']
        },
        {
            id: 5,
            name: 'گوشی موبایل نوکیا G60',
            price: 7500000,
            oldPrice: 8500000,
            discount: 12,
            rating: 4.0,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKSvzpsfzLbAQGuaDFp3enVd0GyUo_8qkdRQ&s',
            features: ['128GB', '5G', '6GB RAM', 'Snapdragon 695']
        },
        {
            id: 6,
            name: 'گوشی موبایل آنر X8',
            price: 6500000,
            oldPrice: 7500000,
            discount: 13,
            rating: 4.2,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNYvSJJ4wNOLZH06PyMK2JnOzEA1yztgIrPA&s',
            features: ['128GB', '4G', '6GB RAM', 'Snapdragon 680']
        },
        {
            id: 7,
            name: 'گوشی موبایل پوکو X5 پرو',
            price: 12500000,
            oldPrice: 14000000,
            discount: 11,
            rating: 4.4,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfmoDK04QCWYUHgnuWOEPt8Xw9g2sMvAgDig&s',
            features: ['256GB', '5G', '8GB RAM', 'Snapdragon 870']
        },
        {
            id: 8,
            name: 'گوشی موبایل ریلمی GT 2',
            price: 11000000,
            oldPrice: 12500000,
            discount: 12,
            rating: 4.3,
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRswfyninuTfnDrJ_JB2_bdJ_6Gx5Tty5alSA&s',
            features: ['128GB', '5G', '8GB RAM', 'Snapdragon 888']
        }
    ];

    // فرمت کردن قیمت به صورت تومان
    const formatPrice = (price: number | bigint) => {
        return new Intl.NumberFormat('fa-IR').format(price) + ' تومان';
    };

    return (
        <>
            <CssBaseline />
            {isMounted ? (
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
            ) : (
                // Placeholder برای SSR
                <Toolbar disableGutters>
                    <Logo variant="h1" sx={{ flexGrow: 1 }}>
                        تکنولایف
                    </Logo>
                </Toolbar>
            )}

            {/* بخش محصولات موبایل */}
            <Container maxWidth="xl" sx={{ py: 4 }}>
                <SectionTitle sx={{ textAlign: 'right' }} variant="h4" gutterBottom>
                    محصولات موبایل
                </SectionTitle>

                <Grid container spacing={3}>
                    {mobileProducts.map((product) => (
                        <Grid size={{ xs: 12, md: 4, sm: 6, lg: 3 }} key={product.id}>
                            <ProductCard>
                                <Box sx={{ position: 'relative' }}>
                                    <ProductImage
                                        image={product.image}
                                    />
                                    {product.discount > 0 && (
                                        <DiscountBadge label={`${product.discount}%`} size="small" />
                                    )}
                                    <Box sx={{ position: 'absolute', top: 8, right: 8 }}>
                                        <IconButton size="small" sx={{ backgroundColor: 'rgba(255,255,255,0.8)' }}>
                                            <FavoriteIcon fontSize="small" />
                                        </IconButton>
                                        <IconButton size="small" sx={{ backgroundColor: 'rgba(255,255,255,0.8)', ml: 0.5 }}>
                                            <CompareIcon fontSize="small" />
                                        </IconButton>
                                    </Box>
                                </Box>

                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h6" component="h2" sx={{ fontSize: '1rem', height: 48, overflow: 'hidden' }}>
                                        {product.name}
                                    </Typography>

                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                        <Rating name="read-only" value={product.rating} readOnly size="small" />
                                        <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                                            ({product.rating})
                                        </Typography>
                                    </Box>

                                    <Stack direction="row" spacing={0.5} sx={{ mb: 2, flexWrap: 'wrap' }}>
                                        {product.features.map((feature, index) => (
                                            <Chip
                                                key={index}
                                                label={feature}
                                                size="small"
                                                variant="outlined"
                                                sx={{ mb: 0.5, fontSize: '0.7rem' }}
                                            />
                                        ))}
                                    </Stack>

                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 'auto' }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Typography variant="h6" color="primary">
                                                {formatPrice(product.price)}
                                            </Typography>
                                            {product.oldPrice && (
                                                <OldPrice variant="body2">
                                                    {formatPrice(product.oldPrice)}
                                                </OldPrice>
                                            )}
                                        </Box>
                                    </Box>

                                    <Button
                                        variant="contained"
                                        fullWidth
                                        sx={{ mt: 2 }}
                                        startIcon={<ShoppingCartIcon />}
                                    >
                                        افزودن به سبد خرید
                                    </Button>
                                </CardContent>
                            </ProductCard>
                        </Grid>
                    ))}
                </Grid>
            </Container>

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