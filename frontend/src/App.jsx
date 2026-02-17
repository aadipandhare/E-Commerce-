import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route,Routes } from "react-router-dom"
import {Home} from './pages/Home'
import {About  } from "./pages/About";
import { Cart } from "./pages/Cart.jsx";
import { Collection } from "./pages/Collection";
import { Contact } from "./pages/Contact";
import {Login  } from "./pages/Login";
import { Order } from "./pages/Order";
import { Placeorder } from "./pages/Placeorder";
import {Product} from "./pages/Product";
import {products} from './assets/assets.js'
import {Navbar} from './components/Navbar'
import {Title} from './components/Title'
import {ProductItem} from './components/ProductItem'
import {SearchBar} from './components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify. css'


import {Footer} from "./components/Footer" 



function App() {


  return (
    <>
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer/>
      <Navbar/>
      <SearchBar/>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/cart' element={<Cart/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/order' element={<Order/>}/>
       <Route path='/placeorder' element={<Placeorder/>}/>
       <Route path='/product/:productId' element={<Product/>}/>
       <Route path='/collection' element={<Collection/>}/>

      </Routes>
      <Footer/>
    </div>
      
    </>
  )
}

export default App
