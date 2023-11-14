import React from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import Landing from './pages/Landing'
import Courses from './pages/Courses'

const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element: <Landing/>,
      },
      {
        path:"/courses",
        element: <Courses/>,
      }
    ]
  }
])


function App() {
  return (
    <React.Fragment>
     <RouterProvider  router={router}/>
    </React.Fragment>
  )
}

export default App
