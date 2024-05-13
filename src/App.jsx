import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home';
import About from './components/routes/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App = () => {
  return (

    <>
      <Router>
        <Navbar />
        <Home />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/product'  /> {/* Make sure ProductPage is imported */}
          <Route path='/contact' /> {/* Make sure Contact is imported */}
          <Route path='/career'/> {/* Make sure Career is imported */}
        </Routes>
      </Router>
    </>
  )
}

export default App
