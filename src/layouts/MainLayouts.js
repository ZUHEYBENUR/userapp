import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const MainLayouts = () => {
  return (
    <div className='main-layout'>
        <header className='container'>
          <h1>
            User App
          </h1>
          <nav>
            <NavLink to="/" >Home</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="help" >Help</NavLink>
            <NavLink to="users" >Users</NavLink>
          </nav>
        </header>
      <Outlet />

    </div>
  )
}

export default MainLayouts