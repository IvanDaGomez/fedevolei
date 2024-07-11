import { useEffect } from "react"

export default function PaginaDIAN(){
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
        <h1 style={{margin:"20px"}}>Estados financieros</h1>
        
        <div className="grid">
        <div>
        <a target="_blank"className="docs" href="/files/Acta asamblea.pdf" ><h3>Acta Asamblea</h3></a>         
        </div>
        <div>
        
        
        <a target="_blank"className="docs" href="/files/Certificación Antescedentes RL y Comite.pdf" ><h3>Antecedentes RL</h3></a>   
        </div>
        <div>
        
        
        <a target="_blank"className="docs" href="/files/Certificacion cargos directivos.pdf" ><h3>Cargos Directivos</h3></a>   
        </div>
        <div>
        
        
        <a target="_blank"className="docs" href="/files/Certificación requisitos RL y RF.pdf" ><h3>Requisitos RL y RF</h3></a>         
        </div>
        <div>
        
        
        <a target="_blank"className="docs" href="/files/Certificacion RL.pdf" ><h3>Certificación RL</h3></a>   
        </div>
        <div>
        
        
        <a target="_blank"className="docs" href="/files/Estados financieros comparativos 2023 vs 2022 aprobados.pdf" ><h3>Comparación 2023-2024</h3></a>   
        </div>
        <div>
        
        
        <a target="_blank"className="docs" href="/files/Certificación requisitos RL y RF.pdf" ><h3>Requisitos RL y RF</h3></a>         
        </div>
        <div>
        
        
        <a target="_blank"className="docs" href="/files/Formato 2530.pdf" ><h3>Formato 2530</h3></a>   
        </div>
        <div>
        
        
        <a target="_blank"className="docs" href="/files/Formato 2531.pdf" ><h3>Formato 2531</h3></a>   
        </div>
        <div>
        
        
        <a target="_blank"className="docs" href="/files/Formato 2532.pdf" ><h3>Formato 2532</h3></a>   
        </div>
        <div>
        
        
        <a target="_blank"className="docs" href="/files/Formato 5245.pdf" ><h3>Formato 5245</h3></a>   
        </div>
        <div>
        
        
        <a target="_blank"className="docs" href="/files/Informe de Gestion.pdf" ><h3>Informe de gestión</h3></a>   
        </div>

        </div>
        </>
    )
}