import { Suspense } from "react";
import { useRoutes, Outlet } from "react-router-dom";

import * as h from "../pages/Home/Home";
import Home from "../pages/Home2/Home";
import Services from "../pages/Services/Services";
import About from "../pages/About/About";
import Consult from "../pages/About/Consult";
import Contact from "../pages/Contact/Contact";
import Navbar2 from "../components/navbar/navbar";

const Router = () => {
  const routes = useRoutes([
    {
      element: (
        <>
          <Suspense>
            <Navbar2 />
            <Outlet />
          </Suspense>
        </>
      ),
      children: [
        {
          path: "",
          element: <Home />,
          index: true,
        },
        {
          path: "home2",
          // index: true,
          children: [
            {
              path:"",
              element: <h.default />,
            }
          ],
        },
        {
          path: "home",
          // index: true,
          children: [
            {
              path:"",
              element: <Home />,
            }
          ],
        },
        {
          path: "about",
          element: <About />,
          children: [
            {
              path:"consulting",
              element:<Consult />
            }
          ],
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "Services",
          element: <Services />,
        },
      ],
    },
    //   {
    //     path: 'login',
    //     element: <LoginPage />,
    //   },
    //   {
    //     path: '404',
    //     element: <Page404 />,
    //   },
    //   {
    //     path: '*',
    //     element: <Navigate to="/404" replace />,
    //   },
  ]);

  return routes;
};

export default Router;
