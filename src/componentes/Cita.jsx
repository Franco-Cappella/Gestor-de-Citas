import './Cita.css';

const Cita = ({ cita, citas, setCitas }) => {
  const { mascota, dueño, fecha, hora, sintomas } = cita;

  const EliminarCita = () => {
    if (window.confirm("¿Estás seguro que querés eliminar esta cita?")) {
      const citasRestantes = citas.filter(c => 
        c.mascota !== mascota || c.hora !== hora
      );
      setCitas(citasRestantes);
    }
  };

  return (
    <div className="cita">
      <p>Mascota: <span>{mascota}</span></p>
      <p>Dueño: <span>{dueño}</span></p>
      <p>Fecha: <span>{fecha}</span></p>
      <p>Hora: <span>{hora}</span></p>
      <p>Síntomas: <span>{sintomas}</span></p>

      <button className="button eliminar u-full-width" onClick={EliminarCita}>
        Eliminar ×
      </button>
    </div>
  );
};

export default Cita;