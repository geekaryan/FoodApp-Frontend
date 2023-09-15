import { Offline, Online } from "react-detect-offline";
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
import Signal from "./components/Signal/Signal";

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
  return (
    <>
      <Online>
        <RouterProvider router={router} />
      </Online>
      <Offline>
        <Signal />
      </Offline>
    </>
  );
};

export default App;
