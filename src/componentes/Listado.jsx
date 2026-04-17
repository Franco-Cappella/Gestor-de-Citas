import Cita from './Cita';
import './Listado.css';

const Listado = ({ citas ,setCitas}) => {
  return (
    <>
      <h2>Administra tus citas</h2>
      <div className="lista-citas">
        {citas.map(cita => (
          <Cita 
             citas={citas}
            cita={cita} 
            setCitas={setCitas}
          />
        ))}
      </div>
    </>
  );
};

export default Listado;