import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Reloj from './Reloj';
import AppCSS from './App.module.css'
import MostrarTexto from './MostrarTexto';
import ProyectarContenido from './ProyectarContenido';
import ProyectarContenido2 from './ProyectarContenido2';
import ContenidoDinamico from './ContenidoDinamico';
import HijoPadre from './HijoPadre';
import EjemploUseEffect from './EjemploUseEffect';
import ValorContext from './UseContext';
import Abuelo from './Abuelo';
import ErrorBoundary from './ErrorBoundary';



function App() {
  
  const subtitulo ='Esto es un subtitulo';
  const duplicar = (valor:number) => valor*2;
  const imagenurl = "https://blog.desafiolatam.com/wp-content/uploads/2019/04/react-galaxia.png";
  const cuadradoazul= {backgroundColor:'blue', width:'50px', height:'50px'}

  const manejarclick = () => console.log('click');

  const [texto, setTexto]= useState('valorpordefecto');

  const [checked, setChecked]= useState(true);

  const manejarkeyup = (e:React.KeyboardEvent<HTMLInputElement>) => {
    console.log(e.currentTarget.value)
    setTexto(e.currentTarget.value)    
  };

  const manejarkeyup2 = (textoinput: string) => {
    console.log(textoinput);
    setTexto(textoinput);    
  };

  
  const parteintermedia = <Reloj />
  const estilo = {backgroundColor:'red', width:'50px', height:'50px'}

  const parteinferior = <div style={estilo}></div>

  const calificaciones = [
    {nombre:'carlos', calificacion:95},
    {nombre:'diego', calificacion:80},
    {nombre:'ana', calificacion: -1}
]

  return (

     <>
       <h1 style={{color:'blue'}}>Hola mundo</h1>
       <h3 className='rojo'>{subtitulo.toUpperCase()} index.css</h3>
       <h4>El doble de 3 es {duplicar(3)}</h4>

       <ValorContext.Provider value={texto}>
          <Abuelo />
       </ValorContext.Provider>

      {checked ? <EjemploUseEffect /> : null}
 
        <div>
            <input type="checkbox" 
            onChange={(e) => setChecked(e.currentTarget.checked)} 
            checked={checked} /> Mostrar componente useEffect

        </div>
       
       <ProyectarContenido>
         <>
          <span>Proyectando contenido</span>
          <h5>mas contenido</h5>
         </>
       </ProyectarContenido>

       <ProyectarContenido2
          //parteSuperior={<h3>Parte superior</h3>}
          parteIntermedia={parteintermedia}
          parteInferior={parteinferior}
       />

       {/* Calificación:<ContenidoDinamico calificacion={80} /> */}

       

       {calificaciones.map(cal => 
       <ErrorBoundary  key={cal.nombre}>
           <ContenidoDinamico  {...cal} />
       </ErrorBoundary> 
       )}

       <h4 className={AppCSS.color}>App.module.css</h4>
       <Reloj></Reloj>
       <br/>
       <img alt="Logo React" src={imagenurl}/>
       <div>
       
         <input type="checkbox" 
         onChange={(e) => setChecked(e.currentTarget.checked)} 
         checked={checked} /> Checkbox
       </div>
       <div className="cudradorojo"></div>

       <div style={{backgroundColor:'green', width:'50px', height:'50px'}}></div>
       <div style={cuadradoazul}></div>
       <div style={cuadradoazul}></div>

       <button onClick={manejarclick}>Clickeame</button> 
       <button onMouseEnter={()=>console.log('mouse enter')} onClick={()=>console.log('click desde el boton')}>Clickeame</button>

       <input type='text' onKeyUp={(e)=>manejarkeyup(e)}></input>
        <div>
          {texto}
        </div>

        <MostrarTexto texto={texto} />
        
       HijoPadre:<HijoPadre manejarkeyup2={(e: string) => manejarkeyup2(e)} />
        

        
        

     </>
  );
}

export default App;
