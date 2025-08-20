// src/components/SampleComponent.tsx
'use client';

import { useState } from 'react';
import {
    Button,
    Container,
    Typography,
    Box,
    AppBar,
    Toolbar,
    Card,
    CardContent,
} from '@mui/material';
import { Home, Settings } from '@mui/icons-material';

const SampleComponent = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Home sx={{ mr: 2 }} />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        My Next.js App
                    </Typography>
                    <Button color="inherit">
                        <Settings />
                    </Button>
                </Toolbar>
            </AppBar>
            <Container maxWidth="lg">
                <Box sx={{ my: 4 }}>
                    <Card>
                        <CardContent>
                            <Typography variant="h4" component="h1" gutterBottom>
                                Welcome to Next.js with Material-UI!
                            </Typography>
                            <Typography variant="body1" paragraph>
                                This is a sample component demonstrating Material-UI integration with Next.js and TypeScript.
                            </Typography>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => setCount(count + 1)}
                            >
                                Count: {count}
                            </Button>
                        </CardContent>
                    </Card>
                </Box>
            </Container>
        </>
    );
};

export default SampleComponent;