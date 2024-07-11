import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function CuerpoNoticias(){
    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
      const fetchNoticias = async () => {
        try {
          const response = await fetch("/noticias.json");
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setNoticias(data);
        } catch (error) {
          console.error('Error fetching the noticias:', error);
        }
      };
    
      fetchNoticias();
    }, []);

    function reducirTexto(texto, maxTexto){
        if (texto.length <= maxTexto) return texto;
        let recortado = texto.substring(0,maxTexto);
        //Asi me aseguro que lo ultimo sea una palabra completa
        return texto.substring(0, recortado.lastIndexOf(" "))+ "..."
        
    }
    return(
        <>
        <hr />
        <div className="containerNoticias">
        {noticias.toReversed().map((noticia, index)=>(
            <Link key={index} to={"/noticias/" + (noticias.length-(index))}>
            <div className="noticia" >
                <div className="noticiaImagen">
                   <img src={noticia.imagen} alt={noticia.titulo} />

                </div>
                <div className="noticiaContenido">
                    <h2 style={{margin:"10px"}}>{reducirTexto(noticia.titulo, 150)}</h2>
                    <p>{reducirTexto(noticia.descripcion,300)}</p>
                    <div style={{display:"flex", alignItems:"center", justifyContent:"center", margin:"10px"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#ffffff"} fill={"none"}>
    <path d="M18 2V4M6 2V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M11.9955 13H12.0045M11.9955 17H12.0045M15.991 13H16M8 13H8.00897M8 17H8.00897" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3.5 8H20.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2.5 12.2432C2.5 7.88594 2.5 5.70728 3.75212 4.35364C5.00424 3 7.01949 3 11.05 3H12.95C16.9805 3 18.9958 3 20.2479 4.35364C21.5 5.70728 21.5 7.88594 21.5 12.2432V12.7568C21.5 17.1141 21.5 19.2927 20.2479 20.6464C18.9958 22 16.9805 22 12.95 22H11.05C7.01949 22 5.00424 22 3.75212 20.6464C2.5 19.2927 2.5 17.1141 2.5 12.7568V12.2432Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M3 8H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg><span style={{margin:"2px", fontSize:"1.5rem"}}>{noticia.fecha}</span></div>
                    <div className="boton" style={{width:"100px", color:"white"}}>Ver</div>
                </div>
            </div>
            </Link>
        ))}
        
        </div>
        <hr />
        </>
    )
}