import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './routes/Login/index.jsx'
import Home from './routes/Home/index.jsx'
import './index.css'
import Inauguration from './routes/Inauguration/index.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      { path: '/', Component: Home },
      { path: '/inauguration', Component: Inauguration },
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
