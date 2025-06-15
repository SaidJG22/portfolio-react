const habilidades = [
  "Organización",
  "Comunicación asertiva",
  "Proactividad",
  "Responsabilidad",
  "Atención al Cliente",
  "Trabajo en equipo"
];

function Habilidades() {
  return (
    <>
      <h2>HABILIDADES</h2>
      <ul>
        {habilidades.map((s, i) => <li key={i}>{s}</li>)}
      </ul>
    </>
  );
}

export default Habilidades;
