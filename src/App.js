import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Menu from "./components/Menu/Index";
import Order from "./components/Order/Index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/order",
    element: <Order />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
