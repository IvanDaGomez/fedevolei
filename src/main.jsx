import React from 'react'
import ReactDOM from 'react-dom/client'
import ErrorPage from './componentes/errorPage.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './rutas/main/App.jsx'
import Dian from './rutas/DIAN/dian.jsx'
import './index.css'

const router = createBrowserRouter([{
  path: "/",
    element: <App />,
    errorElement: <ErrorPage />

},{
  path: "documentos-DIAN-RTE-2024",
  element: <Dian />
}]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>,
)
