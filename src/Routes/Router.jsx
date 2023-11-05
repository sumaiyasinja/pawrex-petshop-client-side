import { createBrowserRouter } from "react-router-dom";
import ErrorPage from './../pages/ErrorPage';
import Root from "../pages/Root";
import Home from './../pages/Home';

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
    ],
  },
  ]);
  export default router;