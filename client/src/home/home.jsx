import React from 'react';
import Navbar from './components/Navbar/navbar';
import Responsivemenu from './components/Responsive menu';
import Herosection from './components/hero section';
import Footer from './components/Footer';

const home = () => {
  return (
    <div>
      <Navbar />
      <Herosection />
      <Responsivemenu />
      <Footer />
    </div>
  );
};

export default home;
