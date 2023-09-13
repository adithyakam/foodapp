import React, { useContext, useEffect, useState } from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Restuarants from "./Components/Restuarants/Restuarants";
import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

import RestuarantDetails from "./Components/RestuarantDetails/RestuarantDetails";
import { lazy, Suspense } from "react";

const About = lazy(() => import("./Components/About/About"));
const Help = lazy(() => import("./Components/Help/Help"));
const Search = lazy(() => import("./Components/Search/Search"));
const Cart = lazy(() => import("./Components/Cart/Cart"));

import "./App.css";
import Shimmer from "./Components/Shimmer/Shimmer";
import userContext from "./Components/utils/userContext";
import { store } from "./Components/Redux/store";
import { Provider } from "react-redux";

function App() {
  const [loggeduser, setloggeduser] = useState({});

  useEffect(() => {
    const data = {
      name: "Adithya K",
    };

    setloggeduser(data);
  }, []);

  // const MainContext = useContext(userContext);

  return (
    <>
      <Provider store={store}>
        <userContext.Provider value={loggeduser}>
          <Header />
        </userContext.Provider>
        <Outlet />
        <Footer />
      </Provider>
    </>
  );
}

const Approuter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Restuarants />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/help",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Help />
          </Suspense>
        ),
      },
      ,
      {
        path: "/search",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Search />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/restuarants/:id",
        element: (
          <Suspense fallback={<Shimmer />}>
            <RestuarantDetails />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={Approuter} />);
