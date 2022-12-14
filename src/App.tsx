import './App.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Experience from './components/Experience/Experience'
import Home from './components/Home/Home'
import NabBar from './components/NavBar/NabBar'
import Portfolio from './components/Portfolio/Portfolio'
import SocialLinks from './components/SocialLinks/SocialLinks'

function App() {

  return (
    <div className="App">
      <NabBar />
      <Home />
      <SocialLinks />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
    </div>
  )
}

export default App
