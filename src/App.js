import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/header/Header';
import Page1 from './components/page/Page1';
import Page2 from './components/page/Page2';
import Page3 from './components/page/Page3';
import Page4 from './components/page/Page4';


function App(props) {
  return (
    <div className="container">
      <Header />
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Footer />
    </div>
  );
}

export default App;
