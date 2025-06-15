const estudios = [
  { año: "2024 - Actualidad", titulo: "Tecnicatura Universitaria en Programación – UTN" },
  { año: "2018 - 2022", titulo: "Secundaria – Instituto Privado Tucumán" },
  { año: "2014 - 2016", titulo: "Primaria – Nuestra Señora del Fátima" }
];

function Estudios() {
  return (
    <>
      <h2>Estudios</h2>
      <ul>
        {estudios.map((e, i) => (
          <li key={i}>{e.año} – {e.titulo}</li>
        ))}
      </ul>
    </>
  );
}

export default Estudios;
