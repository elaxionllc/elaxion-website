import Home from '../pages/home'
import { Suspense } from "react";
import { useRoutes, Outlet } from "react-router-dom";
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

import Development from '../pages/services/Development'
import CloudSolutions from '../pages/services/CloudSolutions'
import Consulting from '../pages/services/Consulting'
import DataAnalytics from '../pages/services/DataAnalytics'
import Infrastructure from '../pages/services/Infrastructure'
import Strategic from '../pages/services/Strategic'


const Router = () => {
  const routes = useRoutes([
    {
      element: (
        <>
          <Suspense>
            <Navbar />
            <Outlet />
            <Footer />
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
              path: "",
              element: <Home />,
            }
          ],
        },
        // {
        //   path: "contacts",
        //   // index: true,
        //   children: [
        //     {
        //       path: "",
        //       element: <Contacts closeClicked={() => { }} />,
        //     }
        //   ],
        // },
        {
          path: "services",
          // index: true,
          children: [
            {
              path: "",
              element: <Development />,
            },
            {
              path: "cloud-solutions",
              element: <CloudSolutions />,
            },
            {
              path: "data-analytics",
              element: <DataAnalytics />,
            },
            {
              path: "consulting-advisory",
              element: <Consulting />,
            },
            {
              path: "infrastructure-optimization",
              element: <Infrastructure />,
            },
            {
              path: "strategic-partnership",
              element: <Strategic />,
            },
            {
              path: "development",
              element: <Development />,
            },
          ],
        },
      ],
    },
  ]);

  return routes;
};

export default Router;
