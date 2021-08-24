import { useEffect, useState } from "react"

export default function EjemploUseEffect(){

    const [clicks, setClicks] =useState(0);
    const [fecha, setFecha] =useState(new Date());

    useEffect(() =>{
        console.log('componente ha cargado');
        document.title= `${clicks} veces`;
        return () => {
            console.log('el componente se va a destruir');
        }
    }, [clicks])

    useEffect(() =>{
        console.log('componente ha cargado 2');
        const intervalId = setInterval(()=>{
                setFecha(new Date())
        }, 1000)

        return () => clearInterval(intervalId);
    })

    useEffect(() =>{
        console.log('voy a ejecutarme una sola vez');
     
    }, [])

    return (
        <>
        <span>Ejemplo UseEffect</span>
        <button onClick={()=> setClicks(clicks+1)}>me has clickeado {clicks} veces</button>
        <div>{fecha.toString()}</div>
        </>

    )
}