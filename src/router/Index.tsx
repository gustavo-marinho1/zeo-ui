import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Arrivals from "../pages/Arrivals";
import About from "../pages/About";


const routes = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/arrivals", element: <Arrivals /> },
  { path: "/about", element: <About /> },
  { path: "*", element: <Error /> }
]);

export default function Router() {
  return <RouterProvider router={routes} />;
}