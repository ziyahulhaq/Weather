import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Open from './components/Open'
import Home from './components/Home'
import About from './components/About'
import Sighnup from './components/Sighnup'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const router=createBrowserRouter([
    {path:"/",element:<Sighnup />},
  {path:"/second",element:<About />},
  {path:"/home",element:<Home />},
  {path:"/open",element:<Open />},
    
  ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
