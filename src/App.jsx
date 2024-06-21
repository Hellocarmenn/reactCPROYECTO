import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ItemListContainer from './components /ItemListContainer'
import NavBar from './components /NavBar'
import Footer from './components /Footer'
import { Nosotros } from './components /Nosotros'
import { Contacto } from './components /Contacto'

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/item/:id" element={<ItemListContainer/>}/>
        <Route path="/nosotros" element={<Nosotros/>}/>
        <Route path="/contacto" element={<Contacto/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}
export default App
