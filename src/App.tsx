import './App.css'
import Home from './components/Home/Home'
import NabBar from './components/NavBar/NabBar'
import SocialLinks from './components/SocialLinks/SocialLinks'

function App() {

  return (
    <div className="App">
      <NabBar />
      <Home />
      <SocialLinks />
    </div>
  )
}

export default App
