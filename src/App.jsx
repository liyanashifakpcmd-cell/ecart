
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Product from './pages/Product'
import Wishlit from './pages/Wishlit'
import Cart from './pages/Cart'
import Footer from './components/Footer'

function App() {
 

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/product/:id/view' element={<Product/>} />
     
       <Route path='/wishlist' element={<Wishlit/>} />
      <Route path='/cart' element={<Cart/>} />
      
      {/* route heigher order component aan */}
    </Routes>
    <Footer/>
    </>
  )
}

export default App
