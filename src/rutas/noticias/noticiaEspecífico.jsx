
import { useParams } from "react-router-dom";
import Header from "../../componentes/header";
import Footer from "../../componentes/footer";
import NroNoticiaError from "./nroNoticiaError";
import { useState, useEffect } from "react";
export default function NoticiaEspecifico(){
    let nroNoticia= useParams();

    const nroNoticiaNumerico = parseInt(nroNoticia.noticiaNro, 10);
    const [noticia, setNoticia]= useState({});
    const [error, setError] = useState(null);
    useEffect(()=>{
        const func = async () => {
            try{
            let info = await fetch("/noticias.json")
                        .then(response=>response.json())
            
            info =info.filter(i=> parseInt(i.numeroNoticia) == nroNoticiaNumerico);
            if (info.length===1)setNoticia(info[0])
            else setError("Noticia no encontrada")
            }
            catch(err){
                setError("Noticia no encontrada");
            }            
        }
        func()
      
        
    },[nroNoticiaNumerico])

    if (isNaN(nroNoticiaNumerico)) {
      return <NroNoticiaError/>;
    }
    if (error){
        return <NroNoticiaError/>
    }
    return(
        <>
        <Header />
        <h1 style={{margin:"20px 10vw"}}>{noticia.titulo}</h1>
        <div className="imagenNoticiaContainer">
            <img src={"/"+ noticia.imagen} alt="" />
        </div>
        <p style={{margin:"10px 10vw"}}>{noticia.descripcion}</p>
        <div className="containerContainerExtra">
        {
        
        (noticia.extra) ? noticia.extra.map((not, index)=>(
            
        <a href={"/" + not[0]} target="_blank" key={index}><div className="containerExtra" >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={30} height={30} color={"#ffffff"} fill={"none"}>
    <path d="M16 17L9 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M16 13L13 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20.5 14C20.5 17.7712 20.5 19.6569 19.2552 20.8284C18.0104 22 16.0069 22 12 22H11.2273C7.96607 22 6.33546 22 5.20307 21.2022C4.87862 20.9736 4.59058 20.7025 4.3477 20.3971C3.5 19.3313 3.5 17.7966 3.5 14.7273V12.1818C3.5 9.21865 3.5 7.73706 3.96894 6.55375C4.72281 4.65142 6.31714 3.15088 8.33836 2.44135C9.59563 2 11.1698 2 14.3182 2C16.1173 2 17.0168 2 17.7352 2.2522C18.8902 2.65765 19.8012 3.5151 20.232 4.60214C20.5 5.27832 20.5 6.12494 20.5 7.81818V14Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M3.5 12C3.5 10.1591 4.99238 8.66667 6.83333 8.66667C7.49912 8.66667 8.28404 8.78333 8.93137 8.60988C9.50652 8.45576 9.95576 8.00652 10.1099 7.43136C10.2833 6.78404 10.1667 5.99912 10.1667 5.33333C10.1667 3.49238 11.6591 2 13.5 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>
            {not[1]}
        </div></a>))
        : <></>
        }
        </div>
        <Footer />
        
        </>
    )
}