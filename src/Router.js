import { createBrowserRouter } from "react-router-dom";
// import CheckOut from "../src/Pages/CheckOut";
import App from "./App";
import Page404 from "./Components/Page404";
import ThankYouPage from "./Pages/ThankYouPage";
import Home from "./Sections/Home";
import Specs from "./Sections/Specs";
import Products from "./Sections/Products";
import Case from "./Sections/Case";
import CheckOut from "./Pages/CheckOut";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path:'*',
    element:<Page404/>,
  },
  {
    path:'/thankyoupage',
    element:<ThankYouPage/>,
  },
  {
    path:"/home",
    element:<Home/>
  },
  {
    path:'/specs',
    element:<Specs/>
  },
  {
    path:'/home',
    element:<Home/>
  },
  {
    path:'/checkout',
    element:<CheckOut/>
  },
  {
    path:'/product',
    element:<Products/>
  },
  {
     path:'/#case',
     element:<Case/>
  }
]);
