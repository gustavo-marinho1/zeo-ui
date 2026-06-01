import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Arrivals from "../pages/Arrivals";
import About from "../pages/About";
import TShirts from "../pages/Shop/TShirts";
import Jackets from "../pages/Shop/Jackets";
import Hoodies from "../pages/Shop/Hoodies";
import Pants from "../pages/Shop/Pants";
import Sneakers from "../pages/Shop/Sneakers";
import Boots from "../pages/Shop/Boots";
import Glasses from "../pages/Shop/Glasses";
import Bags from "../pages/Shop/Bags";
import Hats from "../pages/Shop/Hats";
import Belts from "../pages/Shop/Belts";
import Seasonal from "../pages/Seasonal";

const routes = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/arrivals", element: <Arrivals /> },
  { path: "/about", element: <About /> },
  { path: "/shop/t-shirts", element: <TShirts /> },
  { path: "/shop/jackets", element: <Jackets /> },
  { path: "/shop/hoodies", element: <Hoodies /> },
  { path: "/shop/pants", element: <Pants /> },
  { path: "/shop/sneakers", element: <Sneakers /> },
  { path: "/shop/boots", element: <Boots /> },
  { path: "/shop/glasses", element: <Glasses /> },
  { path: "/shop/bags", element: <Bags /> },
  { path: "/shop/hats", element: <Hats /> },
  { path: "/shop/belts", element: <Belts /> },
  { path: "/seasonal", element: <Seasonal /> },
  { path: "*", element: <Error /> }
]);

export default function Router() {
  return <RouterProvider router={routes} />;
}