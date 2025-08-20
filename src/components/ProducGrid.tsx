// src/components/ProductGrid.tsx
'use client';

import { Grid, Typography } from '@mui/material';
import ProductCard from './ProductCard';
import { Product } from '../types/index';

interface ProductGridProps {
    products: Product[];
    onAddToCart: (product: Product) => void;
}

const ProductGrid = ({ products, onAddToCart }: ProductGridProps) => {
    if (products.length === 0) {
        return (
            <Typography variant="h6" align="center" sx={{ my: 4 }}>
                محصولی یافت نشد
            </Typography>
        );
    }

    return (
        <Grid container spacing={3}>
            {products.map((product) => (
                <Grid size={{ xs: 12, sm: 6, md: 4 }} key={product.id}>
                    <ProductCard product={product} onAddToCart={onAddToCart} />
                </Grid>
            ))}
        </Grid>
    );
};

export default ProductGrid;