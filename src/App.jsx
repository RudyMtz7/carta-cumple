import "./styles.css";
import HeartBackground from "./HeartBackground";

const paragraphs = [
  {
    title: "hace 21 añitos...",
    image: `${import.meta.env.BASE_URL}images/regi_trix.png`,
    text: `llego una personita muy hermosa a este mundo`
  },
  {
    title: "y hace 3 meses",
    image: `${import.meta.env.BASE_URL}images/ipad.png`,
    text: `ella entro a mi vida y la cambio por completo`
  },
  {
    image: `${import.meta.env.BASE_URL}images/toiki.png`,
    text: `hoy quiero celebrar tu vida amor. Porque se lo especial que es este día para ti y quiero hacerte la más feliz. Como tu lo haces todos los días.`
  },
  {
    title: "llenarte de regalos",
    image: `${import.meta.env.BASE_URL}images/ramo.png`,
    text: `te quiero consentir en tu festejo y darte muchas cositas que se que te gustan`
  },
  {
    title: "quiero estar contigo",
    image: `${import.meta.env.BASE_URL}images/boda.png`,
    text: `
      los lunes 
      los fines
      todos los días
      ahora
      y siempre
      pero en especial
      hoy
    `
  },
  {
    title: "asi que te dejo con algo nuevo",
    image: `${import.meta.env.BASE_URL}images/nazca.png`,
    text: `algo que se me ocurrio pensando en todas las cartas que te he escrito. Todas las flores que te he dado.
    y todos los detalitos que me encanta hacerte. 
    
    para poder recorrer algunos de los muchos momentos que hemos vivido en estos 100 días juntos (si, exactamente 100 días de nuestra primera cita en Hercules <3)`
  },
];

export default function App() {
  return (
    <div className="app">
      <div className="background" />

        <HeartBackground />

      <div className="container">
          <section className="hero-panel">
            <div className="hero-content">
              <h1 className="hero-title">Para regi</h1>
              <p className="hero-subtitle">15 de junio del 2026</p>
              <span className="scroll-hint">↓ Scroll ↓</span>
            </div>
          </section>
        {paragraphs.map((section, index) => (
          <section key={index} className="panel">
            <div className="card">
              <img
                src={section.image}
                alt={section.title}
                className="memory-image"
              />

              <h1>{section.title}</h1>

              <p>{section.text}</p>
            </div>
          </section>
        ))}
        <section className="hero-panel">
            <div className="hero-content">
              <h1 className="hero-title">y una última cosa</h1>
            </div>
        </section>
        <section className="final-panel">
          <h2 className="final-top-title">
            espero te guste este joven. porque lo vamos a ver en unos meses
          </h2>

          <img
            className="final-big-image"
            src={`${import.meta.env.BASE_URL}images/boletos.PNG`}
            alt="Boletos"
          />

          <h2 className="final-bottom-title">
            feliz cumpleaños regina ❤️
            Te amo
          </h2>
          <h1 className="hero-title">-Rodolfo</h1>
        </section>
      </div>
    </div>
  );
}