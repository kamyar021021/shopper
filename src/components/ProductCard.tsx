// src/components/ProductCard.tsx
'use client';

import { 
  Card, 
  CardMedia, 
  CardContent, 
  Typography, 
  Button, 
  CardActions,
  Rating,
  Box
} from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  return (
    <Card sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.name}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {product.description}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Rating value={product.rating} readOnly precision={0.5} />
          <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
            ({product.rating})
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          دسته: {product.category}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between', p: 2 }}>
        <Typography variant="h6" color="primary">
          {product.price.toLocaleString()} تومان
        </Typography>
        <Button 
          size="small" 
          variant="contained" 
          endIcon={<AddShoppingCart />}
          onClick={() => onAddToCart(product)}
        >
          افزودن
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;