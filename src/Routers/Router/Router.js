import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Homepages from "../../Pages/HomePages/Homepages";

const routers = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Homepages></Homepages>
      }
    ]
  }
])

export default routers;