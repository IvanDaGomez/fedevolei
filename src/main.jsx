import React from 'react'
import ReactDOM from 'react-dom/client'
import ErrorPage from './componentes/errorPage.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './rutas/main/App.jsx'
import './index.css'

const router = createBrowserRouter([{
  path: "/",
    element: <App />,
    errorElement: <ErrorPage />
}]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>,
)
