import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import Home from './pages/Home';
import Contact from './pages/Contact';
import Layout from './Layout';
import About from './pages/About';
import Profile from './pages/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
        {
            path: "" , element: <Home />,
        },
        {
            path:"pages/contact", element:<Contact />
        },
        {
            path:"pages/about", element:<About />
        },
        {
            path:"pages/profile", element:<Profile />
        }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
