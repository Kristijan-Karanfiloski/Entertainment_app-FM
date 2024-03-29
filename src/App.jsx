import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.scss";

import router from "./routes/Routes.jsx";
import store from "./store/store.jsx";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
