
import { Link } from "react-router-dom"
export default function NroNoticiaError(){
    return(
        <>
        <div className="errorContainer">
            <h1>No se pudo encontrar está noticia</h1>
            <Link to="/noticias"><p>Click aqui para volver a noticias</p></Link>
        </div>
        </>
    )
}