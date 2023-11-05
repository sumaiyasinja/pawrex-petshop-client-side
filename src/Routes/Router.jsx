import { createBrowserRouter } from "react-router-dom";
import ErrorPage from './../pages/ErrorPage';
import Root from "../pages/Root";
import Home from './../pages/Home';
import Register from "../pages/Register";
// import Login from "../pages/Login";
import Login from './../pages/Login';
import Services from './../components/Services';
import ServiceDetails from "../pages/ServiceDetails";

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
        path: `/services/:id`,
        element: <ServiceDetails></ServiceDetails>,
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