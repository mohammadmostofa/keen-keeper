import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router'
import Home from './Pages/Home/Home'
import { RouterProvider } from 'react-router/dom'
import Status from './Pages/Status/Status.jsx'
import Timeline from './Pages/Timeline/Timeline'
import MainLayout from './MainLayout/MainLayout'
import ErrorPage from './Pages/ErrorPage/ErrorPage.jsx'

const router = createBrowserRouter([
  
  {
      path:'/',
      element:<MainLayout></MainLayout>,

      children:[
        
        {
     path:"/",
     element: <Home></Home>
    },
    
  
  {
    path:'/Timeline',
    element: <Timeline></Timeline>
  },

  {
    path:'/Status',
    element: <Status></Status>

  },

  {

    path: "*",
    element:<ErrorPage></ErrorPage>

  }

      ],

      
  }


])


// root connector system
createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router} ></RouterProvider>
  </StrictMode>,
)
