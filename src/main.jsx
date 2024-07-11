import React from 'react'
import ReactDOM from 'react-dom/client'
import ErrorPage from './componentes/errorPage.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './rutas/main/App.jsx'
import Dian from './rutas/DIAN/dian.jsx'
import NoticiasPag from './rutas/noticias/noticias.jsx'
import './index.css'
import ContactoPag from './rutas/contacto/contactoPag.jsx'
import NoticiaEspecifico from './rutas/noticias/noticiaEspecífico.jsx'

const router = createBrowserRouter([{
  path: "/",
    element: <App />,
    errorElement: <ErrorPage />

},{
  path: "documentos-DIAN-RTE-2024",
  element: <Dian />

},{
  path:"noticias",
  element: <NoticiasPag/>,

},{
  path: "noticias/:noticiaNro",
  element: <NoticiaEspecifico />
},
{
  path:"contacto",
  element: <ContactoPag />
}
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>,
)
