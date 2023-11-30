import React from "react";
import { Outlet } from "react-router-dom";

const UserLayouts = () => {
  return (
    <div className="users-layout">
      <h2>Users</h2>
      <p>Burada kullanıcılar listelenecektir.</p>
      <Outlet />
    </div>
  );
};

export default UserLayouts;
