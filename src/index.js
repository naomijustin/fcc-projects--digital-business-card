import React, { StrictMode } from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from "./App.js"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(    
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Route exact path="/" component={App} />               
    </BrowserRouter>    
)