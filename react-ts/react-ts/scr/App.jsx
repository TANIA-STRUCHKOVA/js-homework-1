import React from 'react'
import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Trailer from './pages/Trailer/Trailer'
import {Favorite} from "./pages/Favorite/Favorite "

function App() {
  return (
    <>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/trailer/:id' element={<Trailer/>}/>
    <Route path='/favorite' element={<Favorite/>}/>
    </Routes>
    </>
  )
}

export default App