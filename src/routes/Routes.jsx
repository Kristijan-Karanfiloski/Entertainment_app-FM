import { createBrowserRouter, Outlet } from "react-router-dom";
import SignUp from "../components/signUp/SignUp.jsx";
import RootLayout from "../components/RootLayout.jsx";
import Login from "../components/login/Login.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/signUp", element: <SignUp /> },
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
