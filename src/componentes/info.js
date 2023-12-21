import React from 'react';
import '../css/info.css';

function Informacion(props) {
    return (
        <div className='contenedorInformacion'>
            <img 
              className='imagenFamilia'
              src={require(`../img/${props.imagen}.jpg`)} 
              alt='Foto 1 de transporte' 
            />
            <div className='contenedorTexto'>
              <p className='nombreFamilia'>{props.nombre}</p>
              <p className='relacionFamilia'>{props.relacion}</p>
              <p className='descripcionFamilia'>{props.descripcion}</p>
            </div>
        </div>
    );
}

export default Informacion;