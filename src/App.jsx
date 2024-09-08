import Home from '../components/Home/Home'
import Product from '../components/product/Product'
import Create from '../components/create/Create'
import Edit  from '../components/edit/Edit'
import Single from '../components/single/Single'

import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'


function App() {


  return (
   <BrowserRouter>
   <Routes>
    <Route path="/"  element={<Home/>}  />
    <Route path="/product/:id"  element={<Product/>}  />
    <Route path="/create"  element={<Create/>} />
    <Route path="/edit/:id"  element={<Edit/>}  />
    <Route path="/single/:id" element={<Single/>} />
   </Routes>
   </BrowserRouter>

  )
}

export default App
