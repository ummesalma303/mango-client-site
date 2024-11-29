import {createBrowserRouter,} from "react-router-dom";
import Main from "../components/Main";
import AddMango from "../components/AddMango";
import Home from "../components/Home";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/addMango',
            element:<AddMango></AddMango>
        }
      ]
    },
  ]);

  export default router