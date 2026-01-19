import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Open from './components/Open'
import Home from './components/Home'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const router=createBrowserRouter([
  {path:"/",element:<Open />},
    {path:"about",element:<Home />}
  ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
