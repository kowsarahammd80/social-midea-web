import { createBrowserRouter } from "react-router-dom";
import Loging from "../../Components/Loging/Loging";
import Media from "../../Components/Media/Media";
import Register from "../../Components/Register/Register";
import Main from "../../Layout/Main/Main";
import Homepages from "../../Pages/HomePages/Homepages";
import MassagePage from "../../Pages/MassagePage/MassagePage";
import ProfilePage from "../../Pages/ProfilePage.js/ProfilePage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";



const routers = createBrowserRouter([
  

  {
    path: '/',
    element: <Loging></Loging> 
  },

  {
    path: '/register',
    element: <Register></Register>
  },

  
   
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/home',
        element: <PrivateRoute><Homepages></Homepages></PrivateRoute>
      },
      
      {
        path: '/profile',
        element: <PrivateRoute><ProfilePage></ProfilePage></PrivateRoute>
      },

      {
        path:'/massage',
        element: <PrivateRoute><MassagePage/></PrivateRoute>
      },

      {
        path: '/media',
        element: <PrivateRoute><Media></Media></PrivateRoute>
      }
      
    ]
    
  },

  

])

export default routers;