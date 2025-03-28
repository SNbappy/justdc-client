import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main"
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import About from "../pages/About/About";
import Achievements from "../pages/Achievements/Achievements";
import Gallery from "../pages/Gallery/Gallery";
import Donate from "../pages/Donate/Donate";
import UpcomingEvents from "../pages/Events/UpcomingEvents/UpcomingEvents";
import TestimonialPage from "../pages/TestimonialPage/TestimonialPage";


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
                path: '/login',
                element: <Login />
            },
            {
                path: 'signup',
                element: <SignUp />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'achievements',
                element: <Achievements />
            },
            {
                path: 'events',
                element: <UpcomingEvents />
            },
            {
                path: 'gallery',
                element: <Gallery />
            },
            {
                path: 'donate',
                element: <Donate />
            },
            {
                path: 'testimonials',
                element: <TestimonialPage />
            },
            {
                path: 'donate',
                element: <Donate />
            },
            {
                path: 'donate',
                element: <Donate />
            },
        ]
    },
]);
