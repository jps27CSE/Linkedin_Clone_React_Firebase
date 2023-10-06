import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { router } from "./Routes/index.jsx";
import { RouterProvider } from "react-router-dom";
import { app } from "./Firebase/FirebaseConfig";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);