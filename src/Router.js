import { createBrowserRouter } from "react-router-dom";
import CheckOut from "../src/Pages/CheckOut";
import App from "./App";
import Page404 from "./Components/Page404";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/checkout",
    element: <CheckOut />,
  },
  {
    path:'*',
    element:<Page404/>
  }
]);
