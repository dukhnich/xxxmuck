import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import HomePage from './pages/HomePage/index.tsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// konfigurace routeru

const router = createBrowserRouter([
  {
    path: "/",

    element: <App />,

    children: [
      {
        path: "",
        element: <HomePage />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
