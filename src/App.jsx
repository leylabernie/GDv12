import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';

console.log('App.jsx loaded');

// Create theme with brand colors
const theme = createTheme({
  palette: {
    primary: {
      main: '#87A96B', // Sage Green
    },
    secondary: {
      main: '#D4A574', // Dusty Pink
    },
    text: {
      primary: '#2C2C2C', // Charcoal
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    h1: { fontFamily: 'Playfair Display, serif' },
    h2: { fontFamily: 'Playfair Display, serif' },
    h3: { fontFamily: 'Playfair Display, serif' },
    h4: { fontFamily: 'Playfair Display, serif' },
    h5: { fontFamily: 'Playfair Display, serif' },
    h6: { fontFamily: 'Playfair Display, serif' },
  },
});

function App() {
  console.log('App component rendering');
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<div style={{padding: '2rem', textAlign: 'center'}}>Page not found</div>} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
