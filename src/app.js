import React, { lazy, Suspense } from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import Offers from "./components/Offers";
import Help from "./components/Help";
import Error from "./components/Error";
import ResInfo from "./components/ResInfo";

const Offers = lazy(() => import("./components/Offers"));

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/offers",
        element: (
          <Suspense fallback={<h1>Loading</h1>}>
            <Offers />
          </Suspense>
        ),
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/restaurant/:resId",
        element: <ResInfo />,
      },
    ],

    errorElement: <Error />,
  },
]);

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
