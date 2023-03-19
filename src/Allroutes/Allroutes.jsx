import React from 'react'
import { Route, Routes } from 'react-router'
import { CartPage } from '../CartPage'
import { MainPage } from '../MainPage'

export const Allroutes = () => {
  return (
    <div>
     <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
     </Routes>
    </div>
  )
}
