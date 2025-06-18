import React from 'react'
import ReactDOM from 'react-dom/client'
import ErrorPage from './componentes/errorPage.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './rutas/main/App.jsx'
import NoticiasPag from './rutas/noticias/noticias.jsx'
import './index.css'
import ContactoPag from './rutas/contacto/contactoPag.jsx'
import NoticiaEspecifico from './rutas/noticias/noticiaEspecífico.jsx'
import AgregarDoc from './rutas/protected/agregar/agregar.jsx'
import PaginaDIAN from './rutas/DIAN/paginadian.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<App />} errorElement={<ErrorPage />} />
          <Route path="/contacto" element={<ContactoPag />} />
          <Route path="/noticias/:noticiaNro" element={<NoticiaEspecifico />} />
          <Route path="/noticias" element={<NoticiasPag />} />
          <Route path="/documentos-DIAN-RTE/:year" element={<PaginaDIAN />} />
          <Route path="/protected/agregar-doc" element={<AgregarDoc />} />
          <Route path="/:dianString" element={<PaginaDIAN />} />
        </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
)
