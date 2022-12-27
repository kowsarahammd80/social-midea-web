
import { RouterProvider } from 'react-router-dom';
import './App.css';
import routers from './Routers/Router/Router';

function App() {
  return (
    <div className="mx-auto lg:mx-10">
       <RouterProvider router={routers}>
         
       </RouterProvider>
    </div>
  );
}

export default App;
