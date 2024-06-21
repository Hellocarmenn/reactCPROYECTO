import { BrowserRouter } from 'react-router-dom'
import './App.css'
import ItemListContainer from './components /ItemListContainer'
import NavBar from './components /NavBar'
import Footer from './components /Footer'

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <ItemListContainer/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
