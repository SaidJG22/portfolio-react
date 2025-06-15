import Estudios from './Estudios';
import Habilidades from './Habilidades';

function Main() {
  return (
    <main>
      <section id="presentacion">
        <p>
          Soy Bruno, estudiante proactivo y responsable de la Tecnicatura Universitaria en Programación en la UTN.
          Me considero una persona organizada, con buenas relaciones interpersonales y muchas ganas de aprender.
        </p>
      </section>

      <section id="estudios">
        <Estudios />
      </section>

      <section id="habilidades">
        <Habilidades/>
      </section>

      <section id="experiencia">
        <h2>Experiencia Laboral</h2>
        <ul>
          <li><strong>Mostaza (2024-2025):</strong> Atención al cliente, caja, delivery, cafetería.</li>
          <li><strong>Calzados Andrea (2023):</strong> Ventas, promociones, asesoramiento personalizado.</li>
          <li><strong>Sistema Free (2024):</strong> Atención al cliente, organización de promociones.</li>
        </ul>
      </section>

      <section id="proyectos">
        <h2>Proyectos Realizados</h2>
        <ul>
          <li>Portfolio Personal en React (este proyecto)</li>
          <li>Ejercicios con JavaScript y HTML en la UTN</li>
        </ul>
      </section>

      <section id="idiomas">
        <h2>Idiomas</h2>
        <p>Español nativo. Nivel básico de inglés (en proceso de mejora).</p>
      </section>

      <section id="certificados">
        <h2>Certificados</h2>
        <ul>
          <li>Auxiliar de Farmacia</li>
        </ul>
      </section>
    </main>
  );
}

export default Main;
