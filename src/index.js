import React, { StrictMode } from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import App from "./App.js"
import "./index.css"

// const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <App />,
//     },
//   ]);

ReactDOM.createRoot(document.getElementById("root")).render(    
    <React.StrictMode>
        <App />
    </React.StrictMode>   
)