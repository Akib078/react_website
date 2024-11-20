import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Record from './components/record/Record';
import Service from './components/service/Service';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import Portfolios from './components/portfolios/Portfolios';
import Project from './components/project/Project';

function App() {
  return (
    < >
      <Header></Header>
      <main className='main'>
        <Home></Home>
      </main>
      <Record></Record>
      <Service></Service>
      <Project></Project>
      <Portfolios></Portfolios>
     
      <Contact></Contact>
      <Footer></Footer>
  
    </>
  );
}

export default App;
