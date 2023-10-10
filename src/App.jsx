import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>

        <Routes>
          <Route path='/' element={<Hero/>}/>
          <Route path='/nosotros' element={<About/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path="/proyecto/:id" element={<ProjectDetail />} />
          <Route path='/contacto' element={<Contact/>}/>
        </Routes>

        
      </BrowserRouter>
    </>
  )
}

export default App
