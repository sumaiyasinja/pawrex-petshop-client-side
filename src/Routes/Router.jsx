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
        loader: () => fetch("http://localhost:5000/services"),
      },
      {
        path: "/addService",
        element:<PrivateRoutes><AddService></AddService></PrivateRoutes>

        
      },
      {
        path: "/my-schedules",
        element: <PrivateRoutes><MySchedule></MySchedule></PrivateRoutes> 
      },
      {
        path: "/my-schedules",
        element: <PrivateRoutes><ManageService></ManageService></PrivateRoutes> ,
        loader: () => fetch("http://localhost:5000/services"),
      },
      {
        path: `/services/:id`,
        element: <ServiceDetails></ServiceDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: `/updateBooking/:id`,
        element: <UpdateBookingModal></UpdateBookingModal>,
        loader: ({params}) => fetch(`http://localhost:5000/bookings/${params.id}`),
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