import React  from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import Main from './Layout/Main.jsx';
import Login from './Component/Login/Login.jsx';
import SingUp from './SingUp/SingUp.jsx';
import Logout from './Component/Logout/Logout';
import Dashboard from './Component/Dashboard/Dashboard';
import UserProfile from './Component/UserProfile/UserProfile';
import Banner from './Component/Banner/Banner';

// const [loggedInUserId, setLoggedInUserId] = useState('user1');

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children:[
      {
         path:'/',
         element:<Banner></Banner>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/singup',
        element:<SingUp></SingUp>
      },
      {
        path:'/logout',
        element:<Logout></Logout>
      }
      ,
      {
        path:"/dashboard",
        element:<Dashboard ></Dashboard>
      },
      {
        path:"/profile",
        element:<UserProfile></UserProfile>
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);