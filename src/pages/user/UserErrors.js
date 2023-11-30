import React from 'react'
import { NavLink , useRouteError } from 'react-router-dom';


const UserErrors = () => {
  const error = useRouteError();
  return (
    <div>
      <h2>Errors</h2>
      <p>{error.data}</p>
      <NavLink to="/">Home Page</NavLink>
    </div>
  )
}

export default UserErrors