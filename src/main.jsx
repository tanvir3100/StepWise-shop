import { RouterProvider } from "react-router-dom";
import Router from './Router/Router.jsx';
import ReactDOM from 'react-dom/client'
import React from 'react'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>,
)
