import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Arrivals from "../pages/Arrivals";
import About from "../pages/About";
import Product from "../pages/Product";
import Tops from "../pages/Shop/Tops";
import Bottoms from "../pages/Shop/Bottoms";
import Footwear from "../pages/Shop/Footwear";
import Accessories from "../pages/Shop/Accessories";
import Seasonal from "../pages/Seasonal";

const routes = createBrowserRouter([
  { path: "*", element: <Error /> },
  { path: "/", element: <Home /> },
  { path: "/product/:id?", element: <Product /> },
  { path: "/arrivals", element: <Arrivals /> },
  { path: "/about", element: <About /> },
  { path: "/shop/tops", element: <Tops /> },
  { path: "/shop/bottoms", element: <Bottoms /> },
  { path: "/shop/footwear", element: <Footwear /> },
  { path: "/shop/accessories", element: <Accessories /> },
  { path: "/seasonal", element: <Seasonal /> },
]);

export default function Router() {
  return <RouterProvider router={routes} />;
}