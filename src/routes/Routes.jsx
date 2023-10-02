import { createBrowserRouter, Outlet } from "react-router-dom";
import SignUp from "../components/signUp/SignUp.jsx";
import Dashboard from "../components/Dashboard.jsx";
import Login from "../components/login/Login.jsx";
import HomePage from "../pages/homePage/HomePage.jsx";
import MoviesPage from "../pages/moviesPage/MoviesPage.jsx";
import SeriesPage from "../pages/seriesPage/SeriesPage.jsx";
import BookmarkedPage from "../pages/bookmarkedPage/BookmarkedPage.jsx";
import SearchResult from "../pages/searchResultPage/SearchResult.jsx";
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
  // {
  //   path: "/dashboard",
  //   element: <Dashboard />,
  // },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      { path: "home", element: <HomePage /> },
      { path: "movies", element: <MoviesPage /> },
      { path: "series", element: <SeriesPage /> },
      { path: "bookmarks", element: <BookmarkedPage /> },
      { path: "searchResults", element: <SearchResult /> },
    ],
  },
]);

export default router;
