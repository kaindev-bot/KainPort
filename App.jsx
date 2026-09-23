const projects = [
  {
    name: 'HXZ',
    type: 'Brand + interface',
    summary: 'Projeto com presença visual premium, navegação clara e identidade digital forte.',
    image: 'https://image.thum.io/get/width/1200/https://kaindev-bot.github.io/hxz/',
    link: 'https://kaindev-bot.github.io/hxz/',
    variant: 'warm',
  },
  {
    name: 'Teal Macaron',
    type: 'Landing page',
    summary: 'Experiência visual suave com foco em estética premium, equilíbrio e conversão.',
    image: 'https://image.thum.io/get/width/1200/https://teal-macaron-b7395d.netlify.app/',
    link: 'https://teal-macaron-b7395d.netlify.app/',
    variant: 'cool',
  },
  {
    name: 'Nandy Govi',
    type: 'Portfolio / personal brand',
    summary: 'Interface com sensação premium e acabamento refinado para apresentação pessoal e de marca.',
    image: 'https://image.thum.io/get/width/1200/https://nandygovi.netlify.app/',
    link: 'https://nandygovi.netlify.app/',
    variant: 'dark',
  },
  {
    name: 'Kain Dev',
    type: 'Portfolio system',
    summary: 'Sistema editorial premium com sofisticado contraste e foco em storytelling visual.',
    image: 'https://image.thum.io/get/width/1200/https://kaindev-bot.github.io/KainPort/',
    link: 'https://kaindev-bot.github.io/KainPort/',
    variant: 'neutral',
  },
];

const stats = [
  { label: 'Foco', value: 'Produto + UX' },
  { label: 'Estilo', value: 'Luxuoso & minimal' },
  { label: 'Execução', value: 'Design + front-end' },
];

function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-block" aria-label="Kain Dev home">
          <span className="brand-mark">K</span>
          <span className="brand-word">Kain Dev</span>
        </div>

        <nav className="nav" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#about">Sobre</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projetos</a>
          <a href="#contact">Contato</a>
        </nav>
      </header>

      <main id="home">
        <section className="hero panel">
          <div className="hero-copy">
            <p className="eyebrow">Design & front-end para negócios globais</p>
            <h1>
              Criando experiências<br />
              digitais que impactam.
            </h1>
            <p className="lede">
              Kain Dev desenvolve interfaces elegantes, performáticas e estratégicas para marcas que querem
              presença premium e resultado real no digital.
            </p>

            <div className="hero-actions">
              <a className="primary-btn" href="#projects">
                Ver projetos
              </a>
              <a className="secondary-btn" href="#contact">
                Entre em contato
              </a>
            </div>

            <div className="social-row" aria-label="Redes sociais">
              <a href="https://github.com/kaindev-bot" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href="https://kaindev-bot.github.io/KainPort/" target="_blank" rel="noreferrer">
                Portfolio
              </a>
            </div>
          </div>
        </section>

        <section className="stats-row" aria-label="Profile summary">
          {stats.map((item) => (
            <div className="stat-item panel" key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
        </section>

        <section id="about" className="about-section panel">
          <div className="section-heading left-align">
            <p className="eyebrow small">Sobre</p>
            <h2>Design minimalista, impacto real.</h2>
          </div>

          <div className="about-grid">
            <p>
              Crio experiências digitais com estética refinada e estratégia clara. Meu foco está em transformar
              ideias em interfaces que unem narrativa, clareza e autoridade visual.
            </p>
            <p>
              Cada projeto parte de uma lógica funcional e visual forte: mais atenção, mais confiança e mais
              conversão, sem perder personalidade ou sofisticação.
            </p>
          </div>
        </section>

        <section id="skills" className="skills-section panel">
          <div className="section-heading">
            <p className="eyebrow small">Skills</p>
            <h2>O que eu entrego.</h2>
          </div>

          <div className="skills-grid">
            <div className="skill-box">
              <span>01</span>
              <h3>Brand & posicionamento</h3>
              <p>Arquitetura visual e linguagem consistente para marcas com presença forte.</p>
            </div>
            <div className="skill-box">
              <span>02</span>
              <h3>UX/UI product</h3>
              <p>Interfaces enxutas, modernas e pensadas para facilitar a decisão do usuário.</p>
            </div>
            <div className="skill-box">
              <span>03</span>
              <h3>Front-end</h3>
              <p>Implementação visual com foco em desempenho, responsividade e refinamento de detalhes.</p>
            </div>
          </div>
        </section>

        <section id="projects" className="work-section">
          <div className="section-heading">
            <p className="eyebrow small">Projetos</p>
            <h2>Trabalhos com foco em experiência e resultado.</h2>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className={`project-card panel ${project.variant}`} key={project.name}>
                <img src={project.image} alt={`Preview do projeto ${project.name}`} />
                <div className="card-copy">
                  <div className="project-topline">
                    <span className="project-tag">{project.type}</span>
                    <a href={project.link} target="_blank" rel="noreferrer" aria-label={`Abrir ${project.name}`}>
                      ↗
                    </a>
                  </div>
                  <h3>{project.name}</h3>
                  <p>{project.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer id="contact" className="footer panel">
        <div className="footer-intro">
          <p className="eyebrow small">Entre em Contato</p>
          <h2>Fique à vontade para me chamar em qualquer canal abaixo!</h2>
        </div>

        <div className="contact-grid">
          <div className="contact-block">
            <h3>Email</h3>
            <a href="mailto:kaioalbertdeolivera@gmail.com">kaioalbertdeolivera@gmail.com</a>
          </div>

          <div className="contact-block">
            <h3>WhatsApp</h3>
            <a href="https://wa.me/5579988623433" target="_blank" rel="noreferrer">
              Conversar no WhatsApp
            </a>
          </div>

          <div className="contact-block">
            <h3>Redes Sociais</h3>
            <div className="mini-links">
              <a href="https://github.com/kaindev-bot" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="bottom-bar">
          <div className="signature">Kain Dev</div>
          <p>Criando experiências digitais que geram impacto e resultados para negócios no mundo todo.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
