

import { useState } from 'react';
import Formulario from './componentes/Formulario';
import Listado from './componentes/Listado';
import './App.css';

function App() {





  const [citas, setCitas] = useState([
    {
      mascota: 'Nina',
      dueño: 'Martin',
      fecha: '2021-08-05',
      hora: '08:20',
      sintomas: 'Le duele la pierna'
    },
    {
      mascota: 'Sifon',
      dueño: 'Flecha',
      fecha: '2023-08-05',
      hora: '09:24',
      sintomas: 'Duerme mucho'
    },
    {
      mascota: 'Floki',
      dueño: 'Ari',
      fecha: '2023-08-05',
      hora: '16:15',
      sintomas: 'No está comiendo'
    }
  ]);
  const crearCita = (citaNueva) => {
       setCitas([
      ...citas,  
      citaNueva
    ])
  }



  return (
    <>
      <h1>ADMINISTRADOR DE PACIENTES</h1>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>
          <div className="one-half column">
         <Listado citas={citas} setCitas={setCitas} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;