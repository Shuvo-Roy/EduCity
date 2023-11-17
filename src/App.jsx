import React from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import Landing from './pages/Landing'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'
import Teachers from './pages/Teachers'
import TeacherDetails from './pages/TeacherDetails'
import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn'
import CoursesList from './pages/CoursesList'

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
        path:"/courses/:category",
        element: <CoursesList/>,
      },
      {
        path:"/course/:id",
        element: <CourseDetail/>,
      },
      {
        path:"/teachers",
        element: <Teachers/>,
      },
      {
        path:"/teacher/:tid",
        element: <TeacherDetails/>,
      },
      {
        path:"/signup",
        element: <SignUp/>,
      },
      {
        path:"/login",
        element: <LogIn/>,
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
