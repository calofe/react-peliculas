import { useEffect, useState } from "react";

function Reloj(){

    const [fecha, setfecha] = useState(new Date());
  
  useEffect(() => {
    const timerid = setInterval(() => {
       setfecha(new Date());
    }, 1000);

    return () => clearInterval(timerid);
  })
    return (
        <div>
           <h3>Ejemplo Html </h3>
           <input />
           <div>{fecha.toString()}</div> 
        </div>
      );
}

export default Reloj;