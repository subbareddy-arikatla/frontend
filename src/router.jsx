import React from 'react'
import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import AddTask from "./pages/AddTask";
import TaskDetails from "./pages/TaskDetails";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/add-task",
        element: <AddTask />,
    },
    {
        path: "/task/:id",
        element: <TaskDetails />,
    },
])

export default router
