import Navbar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {

  return (
    <div className='App'>
      <header>
        <Navbar/>
      </header>
      
      <main>
      <Hero/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Contact/>
      </main>

      <footer>
        <Footer/>
      </footer>

    
    </div>
  )
}

export default App
