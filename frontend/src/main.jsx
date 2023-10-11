import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";
import "./index.css";
import DataContextProvider from "./utilities/DataContextProvider.jsx";
import {BrowserRouter} from "react-router-dom";




ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <DataContextProvider>
            <App />
        </DataContextProvider>
    </BrowserRouter>
)
