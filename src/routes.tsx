import Home from 'pages/Home'
import NotFoud from 'pages/NotFound'
import PaginaComum from 'pages/PaginaComum'
import PaginaDeContato from 'pages/PaginaDeContato'
import PaginaTecnologia from 'pages/PaginaTecnologia'
import React from 'react'
import {Routes, Route} from 'react-router-dom'


function RoutesApp() {
  return (
    <Routes>
      <Route path='/' element={<PaginaComum />}>
        <Route index element={<Home />} />
        <Route path='tecnologia/:id' element={<PaginaTecnologia />} />
        <Route path='contact' element={<PaginaDeContato />} />
      </Route>
      <Route path='*' element={<NotFoud />} />
    </Routes>
  )
}

export default RoutesApp