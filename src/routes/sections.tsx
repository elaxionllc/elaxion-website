import { Suspense } from "react";
import { useRoutes, Outlet } from "react-router-dom";

import Home from "../pages/Home/Home";
import Home2 from "../pages/Home2/Home2";
import Navbar from "../components/navbar/navbar";
import Consulatation from "../pages/About/Consultation/consultation";
import Consulation2 from "../pages/About/Consultation/consultation2";
import Services from "../pages/About/Services/Services";

// import About from "../components/About/About";

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
          children: [
            {
              path:"",
              element: <div>About</div>,
            },
            {
              path:"consulting",
              element:<Consulation2 />
            }
          ],
        },
        {
          path: "contact",
          element: <div>Product</div>,
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
