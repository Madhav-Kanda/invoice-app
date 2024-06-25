// import logo from './logo.svg';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css';
import Login from './component/login/Login'
import Register from './component/register/Register'

function App() {
  const myRouter = createBrowserRouter([
    {path:'/', Component:Login},
    {path:'/login', Component:Login},
    {path:'/register', Component:Register}
  ])
  return (
   <div>
   <RouterProvider router={myRouter}></RouterProvider>
   </div>
  );
}

export default App;

