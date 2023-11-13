import React, { lazy, Suspense, useState } from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import Offers from "./components/Offers";
import Help from "./components/Help";
import Error from "./components/Error";
import ResInfo from "./components/ResInfo";
import UserContext from "./utils/Usercontext";

const Offers = lazy(() => import("./components/Offers"));

const App = () => {
  const [userName, setUserName] = useState("manoranjan");

  return (
    <div>
      <UserContext.Provider value={{ userName: userName , setUserName}}>
        <Header />
        <Outlet />
      </UserContext.Provider>
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
