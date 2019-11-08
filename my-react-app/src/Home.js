import React from 'react';
import Navigation from './Navigation/Navigation';
import Features from './Features/Features';
import Footer from './Footer/Footer';
// import Register from './Registration/Register';
import './Home.css';

function Home() {
  return (
    <div className="Home">
      <Navigation />
      <Features />
      {/* <Register /> */}
      <Footer />
    </div>
  );
}

export default Home;
