import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Error from "../pages/Error";
// import Login from "../pages/auth/login/Index";
// import Register from "../pages/auth/register/Index";
// import Search from "../pages/search/Index";
// import Account from "../pages/account/Index";

const routes = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "*", element: <Error /> }
  // { path: "/login", element: <Login /> },
  // { path: "/register", element: <Register /> },
  // { path: "/search", element: <Search /> },
  // { path: "/account", element: <Account /> },
]);

export default function Router() {
  return <RouterProvider router={routes} />;
}