import './Layout.css';
import Header from './components/Header/Header.tsx'
import Footer from './components/Footer/Footer.tsx'
import React from 'react';
import HeroImage from "./components/HeroImage/HeroImage";
function App() {
  return (
    <React.Fragment>
          <Header/>
        <HeroImage/>
          <Footer/>
    </React.Fragment>
  );
}

export default App;
