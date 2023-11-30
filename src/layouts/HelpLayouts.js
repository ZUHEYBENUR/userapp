import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'


const HelpLayouts = () => {
  return (
    <div className='help-layout'>
      <h2>
        Help
      </h2>
      <p>
        Burası help sayfasıdır size yardımcı olmak için buradayız.
      </p>
      <nav>
        <NavLink to="Contact" >Contact</NavLink>
        <NavLink to="Faq" >FAQ</NavLink>

      </nav>
      <Outlet/>
    </div>
  )
}

export default HelpLayouts
