import NavHeader from 'components/NavHeader'
import React from 'react'
import { Outlet } from 'react-router-dom';

function PaginaComum() {
  return (
    <section>
      <NavHeader />
      <Outlet />
    </section>
  )
}

export default PaginaComum