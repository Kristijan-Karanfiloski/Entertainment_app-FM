import { createBrowserRouter, Outlet } from "react-router-dom";
import Login from "../components/Login/Login.jsx";
import RootLayout from "../components/RootLayout.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/routeLayout", element: <RootLayout /> },
  // {
  //     path: "/dashboard",
  //     element: <Dashboard />,
  //     children: [
  //         { path: "home", element: <Outlet /> },
  //         { path: "search", element: <Outlet /> },
  //     ],
  // },
]);

export default router;
