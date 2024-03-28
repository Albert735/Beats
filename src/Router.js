import { createBrowserRouter } from "react-router-dom";
import CheckOut from "../src/Pages/CheckOut"
// import App from "./App";


export const router = createBrowserRouter([

    {
        path:'/checkout',
        element:<CheckOut/>
    }
])