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
    ],
  }
    
 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
