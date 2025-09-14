import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import About from "../pages/About/About";
import Achievements from "../pages/Achievements/Achievements";
import Gallery from "../pages/Gallery/Gallery";
import TestimonialPage from "../pages/TestimonialPage/TestimonialPage";
import NotFound from "../pages/NotFound/NotFound";
import PrivateRoute from "./PrivateRoute";
import RoleRoute from "../Components/RoleRoute";
import Secret from "../pages/Shared/Secret/Secret";
import Dashboard from "../Components/Dashboard/Dashboard";
import AddEvent from "../pages/Events/AddEvent/AddEvent";
import AddGalleryItem from "../pages/Gallery/AddGalleryItem";
import AlumniPage from "../pages/Alumni/AlumniPage";
import Events from "../pages/Events/UpcomingEvents/Events";
import AddAlumniPage from "../pages/Alumni/AddAlumniPage";
import UpdateAlumniPage from "../pages/Alumni/UpdateAlumniPage";
import EventGallery from "../pages/Gallery/EventGallery";

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
                element: <Events />
            },
            {
                path: 'gallery',
                element: <Gallery />
            },
            {
                path: 'event/:eventId',
                element: <EventGallery />
            },
            {
                path: 'testimonials',
                element: <TestimonialPage />
            },
            {
                path: 'alumni',
                element: <AlumniPage />
            },
            {
                path: 'secret',
                element: <PrivateRoute><Secret /></PrivateRoute>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [

        ]
    },
    {
        path: '*',
        element: <NotFound />
    },
]);
