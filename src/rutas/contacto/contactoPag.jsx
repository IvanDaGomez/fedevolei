import Footer from "../../componentes/footer";
import Header from "../../componentes/header";
import CuerpoContacto from "./cuerpoContacto";
import { useEffect } from "react";
export default function ContactoPag(){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return(
        <>
        <Header/>
        {/*<Portada titulo="Contacto" fondo="/fedevolei7.jpeg"/>*/}
        <CuerpoContacto />
        <Footer/>
        </>
    )
}