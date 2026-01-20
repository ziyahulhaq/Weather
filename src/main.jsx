import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Open from './components/Open'
import Home from './components/Home'
import About from './components/About'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const router=createBrowserRouter([
  {path:"first",element:<About />},
  {path:"/",element:<Open />},
    {path:"about",element:<Home />}
  ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
