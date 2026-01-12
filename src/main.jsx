import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Open from './components/Open'
import Home from './components/Home'
// import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const router=createBrowserRouter([
  {path:"/",element:<Open />},
    {path:"about",element:<Home />}
  ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </StrictMode>,
)
