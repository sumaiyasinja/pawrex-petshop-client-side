import { createBrowserRouter } from "react-router-dom";
import ErrorPage from './../pages/ErrorPage';
import Root from "../pages/Root";
import Home from './../pages/Home';
import Register from "../pages/Register";
import Login from './../pages/Login';
import Services from './../components/Services';
import ServiceDetails from "../pages/ServiceDetails";
import AddService from './../pages/AddService';
import MySchedule from './../pages/MySchedule';
import UpdateBookingModal from './../components/UpdateBookingModal';
import PrivateRoutes from "./PrivateRoutes";
import ManageService from "../pages/ManageService";
import UpdateService from "../pages/UpdateService";

 const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services></Services>,
        loader: () => fetch("https://b8a11-server-side-iota.vercel.app/services"),
      },
      {
        path: "/addService",
        element:<PrivateRoutes><AddService></AddService></PrivateRoutes>

        
      },
      {
        path: "/manage",
        element:<PrivateRoutes><ManageService></ManageService></PrivateRoutes>
      },
      {
        path: "/my-schedules",
        element: <PrivateRoutes><MySchedule></MySchedule></PrivateRoutes> 
      },
      {
        path: "/my-schedules",
        element: <PrivateRoutes><ManageService></ManageService></PrivateRoutes> ,
        loader: () => fetch("https://b8a11-server-side-iota.vercel.app/services"),
      },
      {
        path: `/services/:id`,
        element: <PrivateRoutes><ServiceDetails></ServiceDetails></PrivateRoutes>,
        loader: ({params}) => fetch(`https://b8a11-server-side-iota.vercel.app/services/${params.id}`),
      },
      {
        path: `/updateBooking/:id`,
        element: <PrivateRoutes><UpdateBookingModal></UpdateBookingModal></PrivateRoutes>,
        loader: ({params}) => fetch(`https://b8a11-server-side-iota.vercel.app/bookings/${params.id}`),
      },
      {
        path: `/updateService/:id`,
        element: <PrivateRoutes><UpdateService></UpdateService></PrivateRoutes>,
        loader: ({params}) => fetch(`https://b8a11-server-side-iota.vercel.app/services/${params.id}`),
      },
      

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>
      },
    ],
  },
  ]);
  export default router;