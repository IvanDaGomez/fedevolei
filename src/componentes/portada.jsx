/* eslint-disable react/prop-types */

export default function Portada(props){

    return(
        <div className="port" style={{backgroundImage:`url(${props.fondo})`, height:props.altura +"px"||"300px"}}>
            <h1>{props.titulo}</h1>
        </div>
    )
}