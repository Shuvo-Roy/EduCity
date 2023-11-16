import React from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import Landing from './pages/Landing'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'
import Teachers from './pages/Teachers'

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
      },
      {
        path:"/course/:id",
        element: <CourseDetail/>,
      },
      {
        path:"/teachers",
        element: <Teachers/>,
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
