
import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddJob from "../Pages/AddJob";
import JobDetails from "../Pages/JobDetails";
import AppliedJobs from "../Pages/AppliedJobs";
import PrivateRoute from "../Pages/PrivateRoute";
import AllJobs from "../Pages/AllJobs";
import Blog from "../Pages/Blog";
import Profile from "../Pages/Profile";

const Router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path:"/login",
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/add-job',
          element: <AddJob></AddJob>
        },
        {
          path: '/details/:id',
          element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`)
        },
       
        {
          path:'/applied-jobs',
          element: <PrivateRoute><AppliedJobs></AppliedJobs></PrivateRoute>,
        },
        {
          path:'/all-jobs',
          element:<AllJobs></AllJobs>,
          loader: ()=> fetch('http://localhost:5000/jobs')
        },
        {
          path:'/blogs',
          element:<Blog></Blog>
        },
        {
          path:'/profile',
          element:<Profile></Profile>
        }
      ]
    },
  ]);

export default Router ;