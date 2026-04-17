import InputTextPlaceholder from './InputTextPlaceholder';
import InputDate from './InputDate';
import InputTime from './InputTime';
import InputTextSinPH from './InputTextSinPH';
import './Formulario.css';
import { useState } from 'react';

const Formulario = ({crearCita}) => {
  
  const [mascota, setMascota] = useState('');
  const [dueño, setDueño] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [sintomas, setSintomas] = useState('');

  const agregarConClick = () => {
    const nuevaCita = {
      mascota: mascota,
      dueño: dueño,
      fecha: fecha,
      hora: hora,
      sintomas: sintomas
    };
    crearCita(nuevaCita);
    setMascota('');
    setDueño('');
    setFecha('');
    setHora('');
    setSintomas('');
  };

  return (
    <>
      <h2>Crear mi Cita</h2>
      <form>
        <InputTextPlaceholder 
          label="Nombre Mascota" 
          placeholder="Nombre Mascota"
          valor={mascota}
          cambio={(e) => setMascota(e.target.value)}
        />
        
        <InputTextPlaceholder 
          label="Nombre Dueño" 
          placeholder="Nombre dueño de la mascota"
          valor={dueño}
          cambio={(e) => setDueño(e.target.value)}
        />
        
        <InputDate 
          label="Fecha"
          valor={fecha}
          cambio={(e) => setFecha(e.target.value)}
        />
        
        <InputTime 
          label="Hora"
          valor={hora}
          cambio={(e) => setHora(e.target.value)}
        />
        
        <InputTextSinPH 
          label="Síntomas"
          valor={sintomas}
          cambio={(e) => setSintomas(e.target.value)}
        />

        <button 
          type="button" 
          className="u-full-width button-primary"
          onClick={agregarConClick}>
          agregar cita
        </button>
      </form>
    </>
  );
};

export default Formulario;