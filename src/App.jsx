import { RouterProvider } from "react-router-dom";
import "./App.scss";

import router from "./routes/Routes.jsx";

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
