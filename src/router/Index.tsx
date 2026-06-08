import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Arrivals from "../pages/Arrivals";
import About from "../pages/About";
import TShirts from "../pages/TShirts";
import Jackets from "../pages/Jackets";
import Hoodies from "../pages/Hoodies";
import Pants from "../pages/Pants";
import Sneakers from "../pages/Sneakers";
import Glasses from "../pages/Glasses";
import Hats from "../pages/Hats";
import Seasonal from "../pages/Seasonal";
import Product from "../pages/Product";

const routes = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/product/:id?", element: <Product /> },
  { path: "/arrivals", element: <Arrivals /> },
  { path: "/about", element: <About /> },
  { path: "/shop/t-shirts", element: <TShirts /> },
  { path: "/shop/jackets", element: <Jackets /> },
  { path: "/shop/hoodies", element: <Hoodies /> },
  { path: "/shop/pants", element: <Pants /> },
  { path: "/shop/sneakers", element: <Sneakers /> },
  { path: "/shop/glasses", element: <Glasses /> },
  { path: "/shop/hats", element: <Hats /> },
  { path: "/seasonal", element: <Seasonal /> },
  { path: "*", element: <Error /> }
]);

export default function Router() {
  return <RouterProvider router={routes} />;
}