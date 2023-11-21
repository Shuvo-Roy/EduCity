import React from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Landing from "./pages/landing/Landing";
import Courses from "./pages/courses/Courses";
import CourseDetail from "./pages/courses/CourseDetail";
import Teachers from "./pages/teacher/Teachers";
import TeacherDetails from "./pages/teacher/TeacherDetails";
import SignUp from "./pages/auth/SignUp";
import LogIn from "./pages/auth/LogIn";
import CoursesList from "./pages/courses/CoursesList";
import Pricing from "./pages/landing/Pricing";
import TeacherDash from "./pages/dashboard/TeacherDash";
import TeacherCourses from "./pages/dashboard/TeacherCourses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/courses/:category",
        element: <CoursesList />,
      },
      {
        path: "/course/:id",
        element: <CourseDetail />,
      },
      {
        path: "/teachers",
        element: <Teachers />,
      },
      {
        path: "/teacher/:tid",
        element: <TeacherDetails />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <LogIn />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
    ],
  },
  {
    path: "/teacher/dash",
    element: <TeacherDash />,
    children:[
      {
    path: "/teacher/dash/courses",
    children:[
      <TeacherCourses/>
    ]
  },
    ]
  },
  
]);

function App() {
  return (
    <React.Fragment>
      <RouterProvider router={router} />
    </React.Fragment>
  );
}

export default App;
