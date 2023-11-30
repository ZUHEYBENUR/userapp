import React from 'react'
import { useLoaderData } from 'react-router-dom'

const UserDetails = () => {
  const user = useLoaderData();
  return (
    <div className='user-details'>
      <h3>
        {user.name}
      </h3>
      <ul>
        <li>{user.username}</li>
        <li>{user.email}</li>
        <li>{user.phone}</li>
        <li>{user.company.name}</li>
      </ul>
    </div>
  )
}


 export const userDetailsLoader = async({params}) =>{
 const {userid} = params;
 const res = await fetch("http://jsonplaceholder.typicode.com/users/" + userid);
 return res.json();
}

export default UserDetails