
import { RouterProvider } from 'react-router-dom';
import './App.css';
import routers from './Routers/Router/Router';

function App() {
  return (
    <div className="mx-0 lg:mx-0 ">
       <RouterProvider router={routers}>
         
       </RouterProvider>
    </div>
  );
}

export default App;
