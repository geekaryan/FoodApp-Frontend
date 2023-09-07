import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Order from "./components/Order/Index";
import MenuPage from "./pages/Menupage";
import MenuDetailpage, { loader as DeatilLoader } from "./pages/MenuDetailpage";
import EventRootLayout from "./pages/EventRoot";
import RootLayout from "./pages/Root";
import LoginPage from "./pages/LoginPage";
import AboutPage from "./pages/Aboutpage";
import MobileTest from "./pages/Mobiletest";
// import { useState, useEffect } from "react";
// import LoadingScreen from "./components/LoadingScreen/LoadingScreen";

//Adding a Loading screen for 3 sec before opening the application (done)

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "menu",
        element: <EventRootLayout />,
        children: [
          {
            index: true,
            element: <MenuPage />,
          },
          {
            path: ":id",
            id: "id",
            element: <MenuDetailpage />,
            loader: DeatilLoader,
          },
        ],
      },
    ],
  },
  {
    path: "/order",
    element: <Order />,
  },
  {
    path: "/register",
    element: <LoginPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/mobile",
    element: <MobileTest />,
  },
]);

const App = () => {
  // const [loading, isLoading] = useState(true);

  // useEffect(() => {
  //   const loadingTimeout = setTimeout(() => {
  //     isLoading(false);
  //   }, 3000);
  //   return () => {
  //     clearTimeout(loadingTimeout);
  //   };
  // }, []);

  return <RouterProvider router={router} />;
};

export default App;
