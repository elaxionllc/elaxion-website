import { Suspense } from "react";
import { useRoutes, Outlet } from "react-router-dom";

import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";
import About from "../pages/About/About";
import Consult from "../pages/About/Consult";
import Contact from "../pages/Contact/Contact";
import Navbar from "../components/navbar/navbar";

const Router = () => {
  const routes = useRoutes([
    {
      element: (
        <>
          <Suspense>
            <Navbar />
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
