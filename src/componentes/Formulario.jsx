
import InputTextPlaceholder from './InputTextPlaceholder';
import InputDate from './InputDate';
import InputTime from './InputTime';
import InputTextSinPH from './InputTextSinPH';
import './Formulario.css';
import { useState } from 'react';
const Formulario = ({crearCita}) => {
  
   const [cita, setCita] = useState({
    mascota: '',
    dueño: '',
    fecha: '',
    hora: '',
    sintomas: ''
  });

   



  return (
    <>
      <h2>Crear mi Cita</h2>
      <form>
        <InputTextPlaceholder 
          label="Nombre Mascota" 
          name="mascota" 
          placeholder="Nombre Mascota" 
        />
        
        <InputTextPlaceholder 
          label="Nombre Dueño" 
          name="propietario" 
          placeholder="Nombre dueño de la mascota" 
        />
        
        <InputDate 
          label="Fecha" 
          name="fecha" 
        />
        
        <InputTime 
          label="Hora" 
          name="hora" 
        />
        
        <InputTextSinPH 
          label="Síntomas" 
          name="sintomas" 
        />

       <button 
          type="button" 
          className="u-full-width button-primary"
          onClick={() => {
 
            crearCita(cita);}}>agregar cita</button>


      </form>
    </>




  );
};

export default Formulario;