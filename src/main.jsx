import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import UserProvider from "./contexts/UserProvider";
import TaskProvider from "./contexts/TaskProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <TaskProvider>
        <RouterProvider router={router} />
      </TaskProvider>
    </UserProvider>
  </React.StrictMode>
);