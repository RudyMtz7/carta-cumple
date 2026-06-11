import "./styles.css";
import HeartBackground from "./HeartBackground";

const paragraphs = [
  {
    title: "To My Favorite Person",
    image: "/images/regi_trix.png",
    text: `Somehow, in a world full of people, I found you. What started as ordinary conversations became the part of my day I looked forward to the most. You have a way of making even the smallest moments feel meaningful, and for that, I am endlessly grateful.`
  },
  {
    title: "The Little Things",
    image: "/images/boletos.PNG",
    
    text: `It's not just the big memories I treasure. It's the random jokes, the late-night conversations, the comfortable silence, and the way you make everything feel lighter. Those moments have become some of my favorite memories.`
  },
  {
    title: "Looking Forward",
    text: `No one knows exactly what the future holds, but I know this: every plan, dream, and adventure seems better when I imagine you there. Thank you for being such an important part of my life. I love you.`
  }
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
              {/*<div className="hero-heart">❤️</div>*/}
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
      </div>
    </div>
  );
}