import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App";
import { Header } from "../containers";
import Evaluate from "../components/evaluate/Evaluate";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
            path:'/',
            element:<Header/>
        },
        {
            // path:'/evaluate/:id',
            path:'/evaluate',
            element:<Evaluate/>,
            // loader: ({params})=>fetch(`https://catalog-frontend.onrender.com/evaluate/${params.id}`)
        },
    ]
    },
  ]);

  export default router
