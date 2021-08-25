
export default function ContenidoDinamico(props:any){
        //EJEMPLO 1 OPERADOR TERNARIO
    /* return (

        <div>
        

            {props.MostrarMensajeSecreto ? <span>mensaje secreto 99</span> : null}
        
        
        </div>
    ) */

    // ejemplo 2 if
   
    if (props.calificacion > 90){
        return (
            <div>
                <h3>{props.nombre}: Excelente</h3>
            </div>
        )
    } else if(props.calificacion >= 80 && props.calificacion <= 90){

        return (
            <div>
                <h3>{props.nombre}: Bueno</h3>
            </div>
        )

    }
    else if(props.calificacion >= 0 && props.calificacion < 80){

        return (
            <div>
                <h3>{props.nombre}: lol</h3>
            </div>
        )

    }
    else{
        
        
    throw `Ha habido un error con la calificación de ${props.nombre}`;//esta linea es la que genera el error
     /*   return (
            <div>
                <h3>{props.nombre}: Bueno</h3>
            </div>
        )*/
    }
}

