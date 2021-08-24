import ValorContext from './UseContext';
import {useContext} from 'react';

export default function Hijo(){
    const valor = useContext(ValorContext);
    return (
        <>
            <h3>Componente hijo el valor del context es: {valor}</h3>
        </>
    )
}