import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main"
import Home from "../pages/Home/Home/Home";

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
                path: 'notice',
                element: <Home></Home>
            },
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/',
                element: <Home></Home>
            },
        ]
    },
]);
const navOptionsTiny = [
    { name: "Notice", path: "/notice" },
    { name: "Executive Members", path: "/executive-members" },
    { name: "Alumni", path: "/alumni" },
    { name: "Gallery", path: "/gallery" },
    { name: "Donate", path: "/donate" },
];

const navOptionsLarge = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "About",
        subOptions: [
            { name: "Mission", path: "/about/mission" },
            { name: "Vision", path: "/about/vision" },
            { name: "Team", path: "/about/team" },
        ]
    },
    {
        name: "Achievements",
        subOptions: [
            { name: "Awards", path: "/achievements/awards" },
            { name: "Recognition", path: "/achievements/recognition" },
            { name: "Media Coverage", path: "/achievements/media-coverage" },
        ]
    },
    {
        name: "Events",
        subOptions: [
            { name: "Workshops", path: "/events/workshops" },
            { name: "Competitions", path: "/events/competitions" },
            { name: "Guest Lectures", path: "/events/guest-lectures" },
        ]
    },
    {
        name: "Debate",
        subOptions: [
            { name: "Topics", path: "/debate/topics" },
            { name: "Guideline", path: "/debate/guideline" },
        ]
    },
];