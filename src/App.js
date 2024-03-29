import React, { useContext, useEffect, useState } from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Restuarants from "./Components/Restuarants/Restuarants";
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
import LoginSideBar from "./Components/LoginSidebar/LoginSideBar";
import Collections from "./Components/Collections/Collections";
import Error from "./Components/Error/Error";

function App() {
  const [name, setName] = useState("");

  useEffect(() => {
    alert(
      "This Web App uses live Swiggy API's, Please install cors browser plugin to enjoy the app "
    );
  }, []);

  return (
    <div>
      <Provider store={store}>
        <userContext.Provider value={{ name, setName }}>
          <Header />
          <Outlet />
        </userContext.Provider>

        <Footer />
      </Provider>
    </div>
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
        errorElement: <Error />,
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
        errorElement: <Error />,
      },
      {
        path: "/restuarants/:id",
        element: (
          <Suspense fallback={<Shimmer />}>
            <RestuarantDetails />
          </Suspense>
        ),
        errorElement: <Error />,
      },
      {
        path: "/login",
        element: (
          <Suspense fallback={<Shimmer />}>
            <LoginSideBar />
          </Suspense>
        ),
      },
      {
        path: "/collections/:collectionid",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Collections />
          </Suspense>
        ),
        errorElement: <Error />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={Approuter} />);
