import { createBrowserRouter } from "react-router-dom";
import Loging from "../../Components/Loging/Loging";
import Register from "../../Components/Register/Register";
import Main from "../../Layout/Main/Main";
import Homepages from "../../Pages/HomePages/Homepages";

const routers = createBrowserRouter([
  

  {
    path: '/',
    element: <Loging></Loging> 
  },

  {
    path: '/register',
    element: <Register></Register>
  },

  

   
  // {
  //   path: '/',
  //   element: <Main></Main>,
  //   children: [
  //     {
  //       path: '/home',
  //       element: <Homepages></Homepages>
  //     }
  //   ]
    
  // },
])

export default routers;