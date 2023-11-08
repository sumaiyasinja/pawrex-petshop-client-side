import { createBrowserRouter } from "react-router-dom";
import ErrorPage from './../pages/ErrorPage';
import Root from "../pages/Root";
import Home from './../pages/Home';
import Register from "../pages/Register";
// import Login from "../pages/Login";
import Login from './../pages/Login';
import Services from './../components/Services';
import ServiceDetails from "../pages/ServiceDetails";
import AddService from './../pages/AddService';
import UpdateService from "../pages/UpdateService";
import MySchedule from './../pages/MySchedule';
import UpdateBookingModal from './../components/UpdateBookingModal';

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
        element: <AddService></AddService>
      },
      {
        path: "/my-schedules",
        element: <MySchedule></MySchedule>,
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
        path: `/updateService/:id`,
        element: <UpdateService></UpdateService>,
        loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`),
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