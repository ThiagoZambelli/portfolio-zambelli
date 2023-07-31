import Home from 'pages/Home'
import PaginaComum from 'pages/PaginaComum'
import PaginaTecnologia from 'pages/PaginaTecnologia'
import React from 'react'
import {Routes, Route} from 'react-router-dom'


function RoutesApp() {
  return (
    <Routes>
      <Route path='/' element={<PaginaComum />}>
        <Route index element={<Home />} />
        <Route path='tecnologia/:id' element={<PaginaTecnologia />} />
      </Route>
    </Routes>
  )
}

export default RoutesApp