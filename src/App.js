import React, { useRef } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Carousel from './components/Carousel/Carousel';
import About from './components/About/About';
import Menu from './components/Menu/Menu';
import AddToCart from './components/AddToCart/AddToCart';
import { Routes, Route } from "react-router-dom";
import Cart from './components/Cart/Cart';
import ContactUs from './components/ContactUs/ContactUs';
import UserInfo from './components/UserInfo/UserInfo';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { yellow } from '@mui/material/colors';
import Home from './components/Home/Home';


function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: yellow[600],
      },
      secondary: {
        main: '#f44336',
      },
    },
    typography: {
      h4:
      {
        fontFamily: "Amatic SC, sans-serif",
      },
      h2:
      {
        fontFamily: "Amatic SC, sans-serif",
      },
      h3:
      {
        fontFamily: "SUSE sans-serif",
      },
    }
  });

  const navbarRef = useRef(null);
  const ScrollUpward = () => {
    if (navbarRef.current) {
      navbarRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar ref={navbarRef} />
        <Routes>
          <Route path="/home"
            element={
              <>
                <Home />
                <Carousel />
                <About />
                <ContactUs />
                <ArrowUpwardIcon
                  onClick={ScrollUpward}
                  style={{ cursor: 'pointer', position: 'fixed', bottom: '10px', right: '20px', fontSize: '36px' }}
                />
              </>
            }
          />
          <Route path="/"
            element={
              <>
                <Home />
                <Carousel />
                <About />
                <ContactUs />
                <ArrowUpwardIcon
                  onClick={ScrollUpward}
                  style={{ cursor: 'pointer', position: 'fixed', bottom: '10px', right: '20px', fontSize: '36px' }}
                />
              </>
            }
          />

          <Route path="/cart" element={<Cart />} />
          <Route path="/userinfo" element={<UserInfo />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/add-to-cart" element={<AddToCart />} />
          <Route path="/menu" element={
            <>
              <Menu />
              <ArrowUpwardIcon
                onClick={ScrollUpward}
                style={{ cursor: 'pointer', position: 'fixed', bottom: '10px', right: '20px', fontSize: '36px' }}
              />
            </>
          } />
        </Routes>
      </ThemeProvider>

    </div>
  );
}

export default App;
