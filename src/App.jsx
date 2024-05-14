  import React from 'react'
  import Navbar from './components/Navbar'
  import Home from './components/Home';
  import About from './components/About';
  import AppSection from './components/AppSection';
  import Slider from './components/Slider';
  import Form from './components/Form';
  import Footer from './components/Footer';
  import AboutUs from './components/screens/AboutUs';
  import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Card from './components/Card';
import Stores from './components/Stores';


  const App = () => {
    return (

      <>
        <Router>
          <Navbar />
          <About/>
          <Card/>
          <AppSection/>
          
          <Stores/>
          <Slider/>
          <Form/>
          <Footer/>
          
         
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<AboutUs />} />
            <Route path='/product'  /> 
            <Route path='/contact' />
            <Route path='/career'/>
          </Routes>
        </Router>
      </>
    )
  }

  export default App
