import './App.css'
import { Routes , Route } from 'react-router-dom'
import Products from './pages/Products'
import ProductDetails from "./pages/ProductDetails"
import Card from "./pages/Card"

function App() {

  return (
    <>
     <Routes>
      <Route path='/product' element={ <Products /> } />
      <Route path='/product-details/:id' element={<ProductDetails/>}  /> 
      <Route path='/card' element={<Card/>} />
     </Routes>
    </>
  )
}

export default App
