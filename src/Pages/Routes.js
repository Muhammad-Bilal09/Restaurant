import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
// components

import Header from '../components/Header'
import Footer from '../components/Footer'
// pages

import Home from './frontend/Home/index'
import About from './frontend/About'
import Contact from './frontend/Contact'
import Menu from './frontend/Menu'
import Services from './frontend/Services'
import Basket from "./basket/cartItem"
export default function CustomRoutes() {
  return (
    <>
    <BrowserRouter>
    <Header/>
   <main>

   < Routes>

   <Route path='/' element={<Home/>}/>
   <Route path="/about" element={<About />}/>
   <Route path="/contact" element={<Contact />}/>
   <Route path="/menu" element={<Menu />}/>
   <Route path="/services" element={<Services />}/>
   <Route path="/basket" element={<Basket/>}/>
   </Routes>
   </main>
  
   <Footer/>
    </BrowserRouter>
    </>
  )
}
