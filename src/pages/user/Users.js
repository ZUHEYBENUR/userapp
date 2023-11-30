import React from "react";
import { NavLink, useLoaderData } from "react-router-dom";

const Users = () => {
  const users = useLoaderData();
  return (
    <div className="users">
      {users.map((user) => (
        <div className="card" key={user.id}>
          <h3>
            <i className="fa-solid fa-caret-right"></i>
            <span>{user.name}</span>
          </h3>
          <NavLink to={user.id.toString()}>
            <i className="fa-regular fa-square-caret-right"></i>
          </NavLink>
        </div>
      ))}
    </div>
  );
};

// appi çekme stili

export const usersLoader = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if(res.status ===404){
    throw new Response("kaynak bulunamadı." , {status:404})
  }
  return res.json();
};

export default Users;
