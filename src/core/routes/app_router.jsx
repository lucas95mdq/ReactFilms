import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import HomeView from './../../features/home/views/home_view';
import NotFound from './../../features/not_found/views/not_found';
import LoginView from '../../features/login/views/login_view';


export const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <HomeView/>,
    },
    {
        path: "/login",
        element: <LoginView/>,
    },
    {
        path: "*",
        element: <NotFound/>,
    },
])