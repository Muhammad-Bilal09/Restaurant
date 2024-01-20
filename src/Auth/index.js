import React from 'react'
import Register from './Register'
import Login from './Login'
export default function Index() {
  return (
    <>
    <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
    </Routes>
    </>
  )
}
