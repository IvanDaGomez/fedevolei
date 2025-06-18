import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"
export default function ErrorPage() {
    const navigate = useNavigate();
    const { dianString } = useParams();
    useEffect(() => {
        if (dianString) {
            const yearFromString = dianString.match(/\d{4}/);
            if (yearFromString) {
                navigate(`/documentos-DIAN-RTE/${yearFromString[0]}`);
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dianString]);
    return(
        <>
        <div className="errorContainer">
            <h1>Oops, Parece que estas perdido</h1>
            <Link to="/"><p>Click aqui para volver a inicio</p></Link>
        </div>
        </>
    )
}