import React, { StrictMode } from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from "./App.js"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />               
        </BrowserRouter>
    </React.StrictMode>
)