import { createBrowserRouter } from "react-router-dom";
import Loging from "../../Components/Loging/Loging";
import Register from "../../Components/Register/Register";
import Main from "../../Layout/Main/Main";
import Homepages from "../../Pages/HomePages/Homepages";
import MassagePage from "../../Pages/MassagePage/MassagePage";
import ProfilePage from "../../Pages/ProfilePage.js/ProfilePage";


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
        element: <Homepages></Homepages>
      },
      
      {
        path: '/profile',
        element: <ProfilePage></ProfilePage>
      },

      {
        path:'/massage',
        element: <MassagePage/>
      }
      
    ]
    
  },

])

export default routers;