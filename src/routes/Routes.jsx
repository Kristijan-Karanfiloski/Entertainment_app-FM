import { createBrowserRouter, Outlet } from "react-router-dom";
import SignUp from "../components/signUp/SignUp.jsx";
import Dashboard from "../components/Dashboard.jsx";
import Login from "../components/login/Login.jsx";
// import ProtectedRoute from "../components/protectedRoute/ProtectedRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    // { path:'/dashboard',element:<ProtectedRoute></ProtectedRoute>}
  },
  { path: "/signUp", element: <SignUp /> },
  // {
  //   path: "/dashboard",
  //   element: (
  //     <ProtectedRoute>
  //       <Dashboard />
  //     </ProtectedRoute>
  //   ),
  // },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
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
