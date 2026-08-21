import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import { ErrorPage } from './pages/ErrorPage.jsx'
import Edit from './pages/Edit.jsx'
import View from './pages/View.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import Createstd from './pages/Createstd.jsx'
import './App.css'




let router = createBrowserRouter([
  {
    path : "/",
    element : <Home/>,
    errorElement : <ErrorPage/>

  },
  {
    path: "/edit/:id",
    element : <Edit/>
  },
  {
    path: "/view/:id",
    element : <View/>
  },
  {
    path:"/create",
    element:<Createstd/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
