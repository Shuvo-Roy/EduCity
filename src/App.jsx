import React from 'react'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import Landing from './pages/Landing'

const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element: <Landing/>,
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
