import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main"
import Home from "../pages/Home/Home/Home";
import Achievements from "../pages/Achievements/Achievements/Achievements";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/achievements/awards',
                element: <Achievements />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: 'signup',
                element: <SignUp />
            }
        ]
    },
]);
