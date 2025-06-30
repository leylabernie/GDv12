import React from 'react';
import { 
  Box, Container, Typography, Grid, Button, Card, CardMedia, 
  CardContent, CardActions, Divider
} from '@mui/material';
import { Link } from 'react-router-dom';

console.log('HomePage.jsx loaded');

// Sample featured products
const featuredProducts = [
  {
    id: 'ld_600_fashid_2024',
    name: 'Beautiful Stylish Colorful Fancy Party Wear Dull Satin Lehenga',
    category: 'lehengas',
    price: 2000,
    originalPrice: 2200,
    image: 'https://fashidwholesale.in/images/l600-1.jpg',
    currency: 'INR',
  },
  {
    id: 'sws_cotton_salwar_51192',
    name: 'Pure Cotton Wholesale Printed Salwar Suit',
    category: 'salwar-kameez',
    price: 1455,
    originalPrice: 1600,
    image: 'https://suratwholesaleshop.com/images/salwar-51192.jpg',
    currency: 'INR',
  },
  {
    id: 'silk_saree_1001',
    name: 'Traditional Banarasi Silk Wedding Saree',
    category: 'sarees',
    price: 3500,
    originalPrice: 4000,
    image: 'https://suratwholesaleshop.com/images/saree-1001.jpg',
    currency: 'INR',
  },
  {
    id: 'mens_kurta_2001',
    name: 'Designer Embroidered Silk Wedding Kurta',
    category: 'mens-wear',
    price: 1800,
    originalPrice: 2000,
    image: 'https://fashidwholesale.in/images/kurta-2001.jpg',
    currency: 'INR',
  },
];

// Sample categories
const categories = [
  { id: 1, name: 'Sarees', image: 'https://i.pinimg.com/originals/a0/82/40/a082403d7a9207fac83a6d2b006a5dfa.jpg', link: '/category/sarees' },
  { id: 2, name: 'Lehengas', image: 'https://i.pinimg.com/originals/e8/cf/89/e8cf89e2e76f0a2eef5bcc2fd86d0714.jpg', link: '/category/lehengas' },
  { id: 3, name: 'Salwar Suits', image: 'https://i.pinimg.com/originals/a9/33/90/a93390f2a8f8cd42a59d0f3231132e89.jpg', link: '/category/salwar-suits' },
  { id: 4, name: 'Men\'s Wear', image: 'https://i.pinimg.com/originals/e5/38/2f/e5382f4f4e0c8c5a2f9622c634c1c8eb.jpg', link: '/category/mens-wear' },
];

const HomePage = () => {
  console.log('HomePage component rendering');
  return (
    <Box>
      {/* Hero Banner */}
      <Box 
        sx={{ 
          height: { xs: '50vh', md: '70vh' }, 
          backgroundImage: 'url(https://i.pinimg.com/originals/e8/cf/89/e8cf89e2e76f0a2eef5bcc2fd86d0714.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          mb: 6
        }}
      >
        <Box 
          sx={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            right: 0, 
            bottom: 0, 
            bgcolor: 'rgba(0,0,0,0.4)' 
          }} 
        />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, color: 'white', textAlign: 'center' }}>
          <Typography 
            variant="h2" 
            component="h1" 
            gutterBottom
            sx={{ fontFamily: 'Playfair Display', fontWeight: 'bold' }}
          >
            Authentic Indian Ethnic Wear
          </Typography>
          <Typography variant="h5" gutterBottom>
            Premium Quality, International Shipping
          </Typography>
          <Button 
            variant="contained" 
            color="primary" 
            size="large"
            component={Link}
            to="/products"
            sx={{ mt: 3 }}
          >
            Shop Now
          </Button>
        </Container>
      </Box>

      <Container maxWidth="lg">
        {/* Categories */}
        <Box sx={{ mb: 6 }}>
          <Typography 
            variant="h4" 
            component="h2" 
            align="center" 
            gutterBottom
            sx={{ fontFamily: 'Playfair Display', mb: 4 }}
          >
            Shop By Category
          </Typography>
          <Grid container spacing={3}>
            {categories.map((category) => (
              <Grid item xs={6} md={3} key={category.id}>
                <Box 
                  component={Link} 
                  to={category.link}
                  sx={{
                    position: 'relative',
                    height: 200,
                    borderRadius: 1,
                    overflow: 'hidden',
                    display: 'block',
                    '&:hover .overlay': {
                      backgroundColor: 'rgba(0,0,0,0.4)',
                    },
                  }}
                >
                  <Box 
                    component="img" 
                    src={category.image} 
                    alt={category.name}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                  <Box 
                    className="overlay"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      backgroundColor: 'rgba(0,0,0,0.3)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      transition: 'background-color 0.3s ease',
                    }}
                  >
                    <Typography 
                      variant="h5" 
                      component="h3" 
                      color="white"
                      sx={{ fontFamily: 'Playfair Display' }}
                    >
                      {category.name}
                    </Typography>
                    <Button 
                      variant="outlined" 
                      size="small" 
                      sx={{ 
                        mt: 1, 
                        color: 'white', 
                        borderColor: 'white',
                        '&:hover': {
                          borderColor: 'white',
                          backgroundColor: 'rgba(255,255,255,0.1)',
                        }
                      }}
                    >
                      Shop Now
                    </Button>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Featured Products - MUST KEEP real products */}
        <Box sx={{ mb: 6 }}>
          <Typography 
            variant="h4" 
            component="h2" 
            align="center" 
            gutterBottom
            sx={{ fontFamily: 'Playfair Display', mb: 4 }}
          >
            Featured Products
          </Typography>
          <Grid container spacing={3}>
            {featuredProducts.map((product) => (
              <Grid item xs={12} sm={6} md={3} key={product.id}>
                <Card 
                  sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    transition: '0.3s',
                    '&:hover': {
                      boxShadow: 6,
                    }
                  }}
                >
                  <CardMedia
                    component="img"
                    height="280"
                    image={product.image}
                    alt={product.name}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography 
                      gutterBottom 
                      variant="body1" 
                      component="h3"
                      noWrap
                      title={product.name}
                    >
                      {product.name}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Typography variant="h6" color="primary" component="span">
                        ₹{product.price.toLocaleString()}
                      </Typography>
                      {product.originalPrice > product.price && (
                        <Typography 
                          variant="body2" 
                          color="text.secondary" 
                          component="span" 
                          sx={{ ml: 1, textDecoration: 'line-through' }}
                        >
                          ₹{product.originalPrice.toLocaleString()}
                        </Typography>
                      )}
                    </Box>
                  </CardContent>
                  <CardActions>
                    <Button 
                      size="small" 
                      component={Link} 
                      to={`/product/${product.id}`}
                    >
                      View Details
                    </Button>
                    <Button 
                      size="small" 
                      color="primary"
                    >
                      Add to Cart
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ textAlign: 'center', mt: 3 }}>
            <Button 
              variant="contained" 
              color="primary"
              component={Link}
              to="/products"
            >
              View All Products
            </Button>
          </Box>
        </Box>

        {/* AI Style Quiz Banner - MUST KEEP */}
        <Box 
          sx={{ 
            mb: 6, 
            p: 4, 
            bgcolor: '#f5f5f5', 
            borderRadius: 2,
            textAlign: 'center'
          }}
        >
          <Typography 
            variant="h4" 
            component="h2" 
            gutterBottom
            sx={{ fontFamily: 'Playfair Display' }}
          >
            Discover Your Perfect Style
          </Typography>
          <Typography variant="body1" paragraph>
            Take our AI-powered style quiz and get personalized recommendations based on your preferences and body type.
          </Typography>
          <Button 
            variant="contained" 
            color="secondary"
            component={Link}
            to="/style-quiz"
            size="large"
          >
            Take Style Quiz
          </Button>
        </Box>

        {/* Wedding Integration - MUST KEEP */}
        <Box sx={{ mb: 6 }}>
          <Typography 
            variant="h4" 
            component="h2" 
            align="center" 
            gutterBottom
            sx={{ fontFamily: 'Playfair Display', mb: 4 }}
          >
            Planning a Wedding?
          </Typography>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box 
                component="img" 
                src="https://i.pinimg.com/originals/e8/cf/89/e8cf89e2e76f0a2eef5bcc2fd86d0714.jpg" 
                alt="Wedding Planning" 
                sx={{ width: '100%', borderRadius: 2 }} 
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom sx={{ fontFamily: 'Playfair Display' }}>
                MyShaadiDreams Integration
              </Typography>
              <Typography variant="body1" paragraph>
                Synchronize your wedding planning with outfit selection. Coordinate styles for the entire family and get special discounts on wedding packages.
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Typography variant="body1" sx={{ fontWeight: 'bold', mb: 1 }}>
                  Special Wedding Package:
                </Typography>
                <Typography variant="body2" component="div">
                  • 20% off on bridal outfits<br />
                  • Free custom alterations<br />
                  • Complimentary styling session<br />
                  • Priority support<br />
                  • Wedding timeline coordination
                </Typography>
              </Box>
              <Button 
                variant="contained" 
                color="primary"
                component={Link
                  );
};
