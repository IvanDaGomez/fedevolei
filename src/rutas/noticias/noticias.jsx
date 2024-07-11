import Footer from "../../componentes/footer";
import Header from "../../componentes/header";
import Portada from "../../componentes/portada";
import CuerpoNoticias from "./cuerpoNoticias";
import { useEffect } from "react";

export default function NoticiasPag(){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <>
        <Header/>
        <Portada titulo="Noticias" fondo="/portada1.jpg" altura="200"/>
        
        <CuerpoNoticias/>
        <Footer/>
        </>
    )
}