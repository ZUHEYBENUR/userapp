import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "./layouts/MainLayouts"
import Home from "./pages/Home"
import About from "./pages/About"
import HelpLayouts from "./layouts/HelpLayouts"
import Contact from "./pages/help/Contact"
import Faq from "./pages/help/Faq"
import Users from "./pages/user/Users"
import UserLayout from "./layouts/UserLayouts"
import UserErrors from "./pages/user/UserErrors"
import UserDetails, { userDetailsLoader } from "./pages/user/UserDetails"
import NotFound from "./pages/NotFound"


import {usersLoader} from "./pages/user/Users"



const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      {
        path: "help",
        element: <HelpLayouts />,
        children:[
          { path: "contact", element: <Contact /> },
          { path: "faq", element: <Faq /> },
        ]
      },
      {
        path: "users",
        element: <UserLayout />,
        errorElement: <UserErrors />,
        children: [
          { index: true, element: <Users /> , loader:usersLoader},
          { path: ":userid" , element:<UserDetails/> , loader:userDetailsLoader},
        ]
      },
      {path:"*" , element:<NotFound/>}
    ]
  }
])



function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
