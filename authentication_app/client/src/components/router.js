import { createBrowserRouter } from "react-router-dom";

import PageNotFound from './PageNotFound';
import Password from './Password';
import Profile from './Profile';
import Recovery from './Recovery';
import Register from './Register';
import Reset from './Reset';
import Username from './Username';


const router = createBrowserRouter([
  {
    path: "/profile",
    element: <Profile></Profile>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/password",
    element: <Password></Password>,
  },
  {
    path: "/recovery",
    element: <Recovery></Recovery>,
  },
  {
    path: "/reset",
    element: <Reset></Reset>,
  },
  {
    path: "/",
    element: <Username></Username>,
  },
  {
    path: "*",
    element: <PageNotFound></PageNotFound>,
  },
]);

export default router;