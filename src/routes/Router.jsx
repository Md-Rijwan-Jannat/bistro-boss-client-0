import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Authentication from "../layout/Authentication";
import Login from "../pages/Login/Login";
import SignUp from "../SignUp/SignUp";
import Contact from "../pages/Contact/Contact";
import DashBroad from "../layout/DashBroad";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import AddItems from "../pages/Dashboard/AddItems/AddItems";
import PrivateRouter from "../provider/PrivateRouter";
import AdminRoute from "../provider/AdminRoute";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import Payment from "../pages/Dashboard/Payment/Payment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/menu',
        element: <Menu></Menu>
      },
      {
        path: '/order/:category',
        element: <Order></Order>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }
    ],
  },
  {
    path: '/',
    element: <Authentication></Authentication>,
    children: [
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRouter><DashBroad></DashBroad></PrivateRouter>,
    children: [
      {
        path: 'myCart',
        element:<MyCart></MyCart>
      },
      {
        path: 'payment',
        element:<Payment></Payment>
      },
      {
        path: 'allUsers',
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path: 'addItems',
        element: <AdminRoute><AddItems></AddItems></AdminRoute>
      },
    
      {
        path: 'manageItems',
        element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
      },
    ]
  }
]);

export default router;