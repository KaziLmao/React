import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import './styles/App.css';
import Landing from "./pages/Landing";
import About from "./pages/About";
import Profile from "./pages/Profile";
import MyPosts from "./pages/MyPosts";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import App from "./pages/App";
import NotFoundPage from "./pages/NotFoundPage";

const root = ReactDOM.createRoot(document.getElementById('root'));

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Landing/>,
    },
    {
        path: "/posts",
        element: <App/>,
    },
    {
        path: "/myposts",
        element: <MyPosts/>,
    },
    {
        path: "/profile",
        element: <Profile/>,
    },
    {
        path: "/about",
        element: <About/>,
    },
    {
        path: "/login",
        element: <LoginPage/>,
    },
    {
        path: "/registration",
        element: <RegistrationPage/>,
    },
    {
        path: "*",
        element: <NotFoundPage/>,
    }
]);

root.render(
    <RouterProvider router={routes}></RouterProvider>
);
