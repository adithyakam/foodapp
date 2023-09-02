import React from 'react'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Restuarants from './Components/Restuarants/Restuarants'
import React from "react"
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import About from './Components/About/About'
import Help from './Components/Help/Help'
import Search from './Components/Search/Search'
import Cart from './Components/Cart/Cart'
import RestuarantDetails from './Components/RestuarantDetails/RestuarantDetails'

function App() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

const Approuter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: '/',
        element: <Restuarants/>

      },
      {
        path: '/about',
        element: <About/>

      },
      {
        path: '/help',
        element: <Help/>

      },
      ,
      {
        path: '/search',
        element: <Search/>

      },
      {
        path: '/cart',
        element: <Cart/>

      },
      {
        path: '/restuarants/:id',
        element: <RestuarantDetails/>

      }
    ]
  }
]);


const root = createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={Approuter}/>
  );


