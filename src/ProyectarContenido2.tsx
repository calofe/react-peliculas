import { ReactElement } from "react";

export default function ProyectarContenido2(props:ProyectarContenido2Props){

    return (

        <>
       

        parte superior: {props.parteSuperior ? props.parteSuperior : <h3>contenido por defecto</h3>}
        <hr/>
        {props.parteIntermedia}
        <hr/>
        {props.parteInferior}
        
      
        </>
    )
}

interface ProyectarContenido2Props{
    parteSuperior?:ReactElement
    parteIntermedia:ReactElement
    parteInferior:ReactElement
}