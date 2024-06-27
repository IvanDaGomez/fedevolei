import { Link } from "react-router-dom"
export default function ErrorPage(){
    return(
        <>
        <div className="errorContainer">
            <h1>Oops, Parece que estas perdido</h1>
            <Link to="/"><p>Click aqui para volver a inicio</p></Link>
        </div>
        </>
    )
}