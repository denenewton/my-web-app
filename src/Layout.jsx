import React from 'react'
import Header from './components/Header'
import Aside from './components/Aside'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <Header />
    <div className="w-full flex">
      <Aside />
      <main className="w-full p-5 lg:w-3/4">
        <Outlet />
      </main>
    </div>
  </>
  )
}

export default Layout