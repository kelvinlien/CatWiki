import './Layout.css';
import Header from './components/Header/Header.tsx'
import Footer from './components/Footer/Footer.tsx'
import React from 'react';
import Mainpage from "./pages/Mainpage/Mainpage";

function App() {
  return (
    <React.Fragment>
          <Header/>
        <Mainpage/>
          <Footer/>
    </React.Fragment>
  );
}

export default App;
