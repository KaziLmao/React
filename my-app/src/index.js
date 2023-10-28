import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from './App';
import './styles/App.css';
import Landing from "./pages/landing";

const createRoot = document.getElementById('root');
const root = ReactDOM.createRoot(createRoot);

const routes = createBrowserRouter([
    {
        path: '/posts',
        element: <App />
    },
    {
        path: '/home',
        element: <Landing/>
    }
]);

root.render(
    <StrictMode>
        <RouterProvider router={routes}/>
    </StrictMode>
);
