import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router'
import Home from './Pages/Home/Home'
import { RouterProvider } from 'react-router/dom'
import Status from './Pages/Status/Status.jsx'
import Timeline from './Pages/Timeline/Timeline'
import MainLayout from './MainLayout/MainLayout'
import ErrorPage from './Pages/ErrorPage/ErrorPage.jsx'
import SIngleCard from './Pages/SingleCard/SingleCard.jsx'
import ContextProvider from './Context/ContextProvider.jsx'
import { ToastContainer } from 'react-toastify'

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
       path:'/SIngleCard/:id',
       element: <SIngleCard></SIngleCard>,
       loader:()=> fetch('/Friends.json'),
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
    <ContextProvider>

 <Suspense fallback={<span className="loading loading-spinner text-primary"></span>} >
<RouterProvider router={router} ></RouterProvider>
 </Suspense>
       
   <ToastContainer />
    </ContextProvider>
  </StrictMode>,
)
