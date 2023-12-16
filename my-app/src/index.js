import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from './App';
import './styles/App.css';

const createRoot = document.getElementById('root');
const root = ReactDOM.createRoot(createRoot);

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    }
]);

root.render(
    <RouterProvider router={routes}></RouterProvider>
);
