import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Fabrics from './components/Fabrics';
import Portfolio from './components/Portfolio';
import Reviews from './components/Reviews';
import QRVerification from './components/QRVerification';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cream-50">
      <Header />
      <main>
        <Home />
        <About />
        <Fabrics />
        <Portfolio />
        <Reviews />
        <QRVerification />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;