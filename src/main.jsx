import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/home/home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Users from './components/Users/Users';
import Help from './components/Help/Help';
import UserDetails from './components/UserDetails/UserDetails';




const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
        children: [
      {
        path: "about",
        element: <About></About>
      },
      {
        path:"/contact",
        element: <Contact></Contact>
      },
      {
        path:"/footer",
        element:<Footer></Footer>
      },
      {
        path:"/users",
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element:<Users></Users>
      },
      {
        path:'/user/:userId',
        loader:({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element:<UserDetails></UserDetails>
      },
      {
        path:"/help",
        element:<Help></Help>
      },
    ],
  }
    
 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
