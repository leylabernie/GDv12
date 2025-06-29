import React from 'react';
import { 
  Box, Container, Grid, Typography, Link, TextField, Button,
  IconButton, Divider
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = React.useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Newsletter signup logic would go here
    alert(`Thank you for subscribing! Your 10% discount code will be sent to ${email}`);
    setEmail('');
  };

  return (
    <Box sx={{ bgcolor: '#f9f9f9', pt: 6, pb: 3 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* About */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ fontFamily: 'Playfair Display', mb: 2 }}>
              About GlamorousDesi
            </Typography>
            <Typography variant="body2" paragraph>
              Premium Indian ethnic wear e-commerce platform offering authentic craftsmanship with international shipping and custom tailoring services.
            </Typography>
            {/* Social Media Links - MUST KEEP */}
            <Box sx={{ mt: 2 }}>
              <IconButton color="primary" aria-label="Facebook">
                <FacebookIcon />
              </IconButton>
              <IconButton color="primary" aria-label="Instagram">
                <InstagramIcon />
              </IconButton>
              <IconButton color="primary" aria-label="Twitter">
                <TwitterIcon />
              </IconButton>
              <IconButton color="primary" aria-label="Pinterest">
                <PinterestIcon />
              </IconButton>
            </Box>
          </Grid>
          
          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontFamily: 'Playfair Display', mb: 2 }}>
              Quick Links
            </Typography>
            <Link component={RouterLink} to="/about" color="inherit" display="block" sx={{ mb: 1 }}>About Us</Link>
            <Link component={RouterLink} to="/contact" color="inherit" display="block" sx={{ mb: 1 }}>Contact Us</Link>
            <Link component={RouterLink} to="/book-appointment" color="inherit" display="block" sx={{ mb: 1 }}>Book Appointment</Link>
            <Link component={RouterLink} to="/myshaadidreams" color="inherit" display="block" sx={{ mb: 1 }}>MyShaadiDreams</Link>
            <Link component={RouterLink} to="/custom-tailoring" color="inherit" display="block" sx={{ mb: 1 }}>Custom Tailoring</Link>
          </Grid>
          
          {/* Policies */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontFamily: 'Playfair Display', mb: 2 }}>
              Policies
            </Typography>
            <Link component={RouterLink} to="/shipping-policy" color="inherit" display="block" sx={{ mb: 1 }}>Shipping Policy</Link>
            <Link component={RouterLink} to="/return-policy" color="inherit" display="block" sx={{ mb: 1 }}>Return Policy</Link>
            <Link component={RouterLink} to="/privacy-policy" color="inherit" display="block" sx={{ mb: 1 }}>Privacy Policy</Link>
            <Link component={RouterLink} to="/terms-conditions" color="inherit" display="block" sx={{ mb: 1 }}>Terms & Conditions</Link>
            <Link component={RouterLink} to="/faq" color="inherit" display="block" sx={{ mb: 1 }}>FAQ</Link>
          </Grid>
          
          {/* Newsletter - MUST KEEP */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ fontFamily: 'Playfair Display', mb: 2 }}>
              Newsletter
            </Typography>
            <Typography variant="body2" paragraph>
              Subscribe to get 10% off on your first order and stay updated with our latest collections.
            </Typography>
            <Box component="form" onSubmit={handleNewsletterSubmit} noValidate sx={{ display: 'flex' }}>
              <TextField
                size="small"
                placeholder="Your Email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ flexGrow: 1, mr: 1 }}
                required
              />
              <Button variant="contained" color="primary" type="submit">
                Subscribe
              </Button>
            </Box>
            
            {/* WhatsApp Support - MUST KEEP */}
            <Box sx={{ mt: 3, display: 'flex', alignItems: 'center' }}>
              <WhatsAppIcon color="primary" sx={{ mr: 1 }} />
              <Typography variant="body2">
                WhatsApp Support: +1-215-341-9990
              </Typography>
            </Box>
          </Grid>
        </Grid>
        
        <Divider sx={{ my: 3 }} />
        
        {/* Bottom Footer */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} GlamorousDesi. All rights reserved.
          </Typography>
          <Box sx={{ mt: { xs: 2, sm: 0 } }}>
            <Typography variant="body2" color="text.secondary">
              Premium Indian Ethnic Wear Platform
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
