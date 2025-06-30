import React, { useState } from 'react';
import { 
  AppBar, Toolbar, Typography, Button, Box, Container, IconButton,
  Drawer, List, ListItem, ListItemText, ListItemButton
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';

console.log('Header.jsx loaded');

const categories = [
  { name: 'Sarees', path: '/category/sarees' },
  { name: 'Lehengas', path: '/category/lehengas' },
  { name: 'Salwar Suits', path: '/category/salwar-suits' },
  { name: 'Men\'s Wear', path: '/category/mens-wear' },
  { name: 'Jewelry', path: '/category/jewelry' },
  { name: 'Custom-Made', path: '/custom-tailoring' }
];

const Header = () => {
  console.log('Header component rendering');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <AppBar position="sticky" color="default" elevation={1} sx={{ bgcolor: 'white' }}>
      <Container maxWidth="xl">
        {/* Top Bar with MyShaadiDreams link - MUST KEEP */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          py: 0.5,
          borderBottom: '1px solid #eee'
        }}>
          <Box>
            <Typography variant="body2" component="span" sx={{ mr: 2 }}>
              +1-215-341-9990
            </Typography>
            <Typography variant="body2" component="span">
              support@glamorousdesi.com
            </Typography>
          </Box>
          <Box>
            {/* MyShaadiDreams link - MUST KEEP */}
            <Button 
              component={Link} 
              to="/myshaadidreams" 
              color="primary" 
              size="small"
            >
              MyShaadiDreams
            </Button>
          </Box>
        </Box>
        
        {/* Main Header */}
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Mobile menu button */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={() => setMobileMenuOpen(true)}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography variant="h5" sx={{ fontFamily: 'Playfair Display' }}>
                GlamorousDesi
              </Typography>
            </Link>
          </Box>
          
          {/* Desktop Navigation */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            {categories.map((category) => (
              <Button
                key={category.name}
                component={Link}
                to={category.path}
                sx={{ color: 'text.primary', mx: 1 }}
              >
                {category.name}
              </Button>
            ))}
          </Box>
          
          {/* Action Buttons */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {/* Book Appointment Button - MUST KEEP */}
            <Button 
              variant="contained" 
              color="primary"
              component={Link}
              to="/book-appointment"
              sx={{ 
                mr: 1,
                display: { xs: 'none', sm: 'block' }
              }}
            >
              Book Appointment
            </Button>
            
            {/* WhatsApp CTA - MUST KEEP */}
            <IconButton 
              color="primary" 
              aria-label="WhatsApp support"
              onClick={() => window.open('https://wa.me/12153419990', '_blank')}
            >
              <WhatsAppIcon />
            </IconButton>
            
            {/* User Account */}
            <IconButton color="inherit">
              <PersonIcon />
            </IconButton>
            
            {/* Shopping Cart */}
            <IconButton color="inherit" component={Link} to="/cart">
              <ShoppingCartIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
      
      {/* Mobile Navigation Drawer */}
      <Drawer
        anchor="left"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      >
        <Box sx={{ width: 280 }} role="presentation">
          <List>
            {categories.map((category) => (
              <ListItem key={category.name} disablePadding>
                <ListItemButton 
                  component={Link}
                  to={category.path}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <ListItemText primary={category.name} />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem disablePadding>
              <ListItemButton 
                component={Link}
                to="/book-appointment"
                onClick={() => setMobileMenuOpen(false)}
              >
                <ListItemText primary="Book Appointment" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton 
                component={Link}
                to="/myshaadidreams"
                onClick={() => setMobileMenuOpen(false)}
              >
                <ListItemText primary="MyShaadiDreams" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
