import "../App.css";
import { Link } from "react-router-dom";

const projects = [
  {
    number: "01",
    title: "Echoes Summer '26",
    type: "UI / UX Design",
    tech: "Figma · Responsive Design · Prototyping",
    image: "/projects/echoes/desktop-home.png",
    link: "/projects/echoes-summer",
    status: "CASE STUDY",
  },
  {
    number: "02",
    title: "Event Management Platform",
    type: "Full-Stack Application",
    tech: "JavaScript · Node.js · Express · SQL Server · JWT",
    image: "/projects/event-platform/events.png",
    link: "/projects/event-platform",
    status: "CASE STUDY",
  },
  {
    number: "03",
    title: "The Red Fox Society",
    type: "Brand Identity Design",
    tech: "Illustrator · Logo Design · Visual Identity",
    image: "/projects/red-fox/01-cover.png",
    link: "/projects/red-fox",
    status: "CASE STUDY",
  },
  {
    number: "04",
    title: "InsideOut Summer Camp",
    type: "Editorial / Graphic Design",
    tech: "Illustrator · Editorial Design · Layout Design",
    image: "/projects/insideout/01-cover.png",
    link: "/projects/insideout",
    status: "CASE STUDY",
  },
  {
    number: "05",
    title: "Cinema Database",
    type: "Database Development",
    tech: "SQL Server · T-SQL · Database Design",
    link: "/projects/cinema-database",
    status: "CASE STUDY",
    visual: "database",
  },
  {
    number: "06",
    title: "Warehouse Management System",
    type: "Systems Analysis",
    tech: "Requirements · System Architecture · UML",
    link: "/projects/warehouse-system",
    status: "CASE STUDY",
    visual: "warehouse",
  },
];

function SectionHeader({ number, children }) {
  return (
    <div className="section-header">
      <span>{number}</span>
      <h2>// {children}</h2>
      <div className="section-line" />
    </div>
  );
}

function DatabasePreview() {
  return (
    <div className="home-db-preview" aria-hidden="true">
      <div className="home-db-grid" />

      <div className="home-db-toolbar">
        <div>
          <span className="home-db-status-dot" />
          APP_CINEMA
        </div>
        <span>SQL SERVER / ONLINE</span>
      </div>

      <div className="home-db-stage">
        <div className="home-db-label">
          <span>DATABASE_SCHEMA</span>
          <span>RELATIONAL MODEL</span>
        </div>

        <div className="home-db-schema">
          <div className="home-db-table home-db-filme">
            <div className="home-db-table-head">
              <span className="home-db-table-icon">▦</span>
              FILME
            </div>

            <div className="home-db-fields">
              <span>
                <b className="home-db-pk">PK</b> id_filme
              </span>
              <span>titulo</span>
              <span>duracao</span>
              <span>genero</span>
            </div>
          </div>

          <div className="home-db-table home-db-sessao">
            <div className="home-db-table-head">
              <span className="home-db-table-icon">▦</span>
              SESSÃO
            </div>

            <div className="home-db-fields">
              <span>
                <b className="home-db-pk">PK</b> id_sessao
              </span>
              <span>
                <b className="home-db-fk">FK</b> id_filme
              </span>
              <span>
                <b className="home-db-fk">FK</b> id_sala
              </span>
              <span>data_hora</span>
            </div>
          </div>

          <div className="home-db-table home-db-bilhete">
            <div className="home-db-table-head">
              <span className="home-db-table-icon">▦</span>
              BILHETE
            </div>

            <div className="home-db-fields">
              <span>
                <b className="home-db-pk">PK</b> id_bilhete
              </span>
              <span>
                <b className="home-db-fk">FK</b> id_sessao
              </span>
              <span>
                <b className="home-db-fk">FK</b> id_cliente
              </span>
              <span>lugar</span>
            </div>
          </div>

          <div className="home-db-table home-db-sala">
            <div className="home-db-table-head">
              <span className="home-db-table-icon">▦</span>
              SALA
            </div>

            <div className="home-db-fields">
              <span>
                <b className="home-db-pk">PK</b> id_sala
              </span>
              <span>capacidade</span>
            </div>
          </div>

          <span className="home-db-link home-db-link-one">
            <i>1</i>
            <b>N</b>
          </span>

          <span className="home-db-link home-db-link-two">
            <i>1</i>
            <b>N</b>
          </span>

          <span className="home-db-vertical-link">
            <i>1</i>
            <b>N</b>
          </span>
        </div>

        <div className="home-db-footer">
          <span>
            <i className="home-db-status-dot" />
            DATABASE ONLINE
          </span>

          <span>
            <b className="home-db-pk">PK</b> PRIMARY KEY &nbsp;
            <b className="home-db-fk">FK</b> FOREIGN KEY
          </span>
        </div>
      </div>
    </div>
  );
}

function WarehousePreview() {
  const navigation = [
    ["01", "INVENTORY"],
    ["02", "RECEIVING"],
    ["03", "DISPATCH"],
    ["04", "RETURNS"],
    ["05", "REPORTS"],
  ];

  const zones = [
    ["ZONE_A", "NORMAL", "zone-a"],
    ["ZONE_B", "LOW", "zone-b"],
    ["ZONE_C", "CRITICAL", "zone-c"],
  ];

  return (
    <div className="home-wms-preview" aria-hidden="true">
      <div className="home-wms-grid" />

      <div className="home-wms-toolbar">
        <div>
          <span className="home-wms-online" />
          <span>WMS_CONTROL</span>
        </div>

        <div className="home-wms-toolbar-right">
          <span>WAREHOUSE / 01</span>
          <span>SYSTEM ACTIVE</span>
        </div>
      </div>

      <div className="home-wms-content">
        <aside className="home-wms-sidebar">
          <span className="home-wms-sidebar-label">
            MODULES
          </span>

          {navigation.map(([number, label], index) => (
            <div
              className={`home-wms-nav-item ${
                index === 0 ? "active" : ""
              }`}
              key={label}
            >
              <span>{number}</span>
              <strong>{label}</strong>
            </div>
          ))}

          <div className="home-wms-sidebar-bottom">
            <span className="home-wms-online" />
            CONNECTED
          </div>
        </aside>

        <div className="home-wms-main">
          <div className="home-wms-heading">
            <div>
              <span>INVENTORY OVERVIEW</span>
              <strong>WAREHOUSE CONTROL</strong>
            </div>

            <div className="home-wms-system-status">
              <span className="home-wms-online" />
              OPERATIONAL
            </div>
          </div>

          <div className="home-wms-stats">
            <div className="home-wms-stat normal">
              <div>
                <span>STOCK</span>
                <i />
              </div>
              <strong>NORMAL</strong>
              <small>GREEN STATE</small>
            </div>

            <div className="home-wms-stat warning">
              <div>
                <span>STOCK</span>
                <i />
              </div>
              <strong>LOW</strong>
              <small>REVIEW REQUIRED</small>
            </div>

            <div className="home-wms-stat critical">
              <div>
                <span>STOCK</span>
                <i />
              </div>
              <strong>CRITICAL</strong>
              <small>ACTION REQUIRED</small>
            </div>
          </div>

          <div className="home-wms-zones">
            <div className="home-wms-zones-header">
              <span>WAREHOUSE MAP</span>
              <span>STOCK DISTRIBUTION</span>
            </div>

            <div className="home-wms-zone-layout">
              {zones.map(([zone, state, className]) => (
                <div
                  className={`home-wms-zone ${className}`}
                  key={zone}
                >
                  <span>{zone}</span>

                  <div className="home-wms-racks">
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                    <i />
                  </div>

                  <small>{state}</small>
                </div>
              ))}
            </div>
          </div>

          <div className="home-wms-flow">
            <div>
              <span>01</span>
              RECEIVE
            </div>
            <i>→</i>
            <div>
              <span>02</span>
              STORE
            </div>
            <i>→</i>
            <div>
              <span>03</span>
              TRACK
            </div>
            <i>→</i>
            <div>
              <span>04</span>
              DISPATCH
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Home() {
  return (
    <>
      {/* NAVIGATION */}
      <header className="navbar">
        <a href="#home" className="logo">
          MS<span>\_</span>
        </a>

        <nav>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>

          <a
            href="/Miguel-Silva-CV.pdf"
            className="cv-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            CV ↗
          </a>
      </header>

      <main>
        {/* HERO */}
        <section className="hero" id="home">
          <div className="hero-grid" />

          <div className="hero-top-label">
            <span>01 // PORTFOLIO</span>
            <span>WEB DEVELOPMENT · DIGITAL DESIGN</span>
          </div>

          <div className="hero-content">
            <div className="hero-main">
              <p className="hero-intro">Hello, I'm</p>

              <h1>
                MIGUEL
                <br />
                SILVA<span className="blue-dot">.</span>
              </h1>

              <div className="hero-description">
                <div className="blue-line" />
                <p>
                  Web Developer &amp; Multimedia Designer
                  <br />
                  currently studying Digital Game
                  <br />
                  Development Engineering.
                </p>
              </div>
            </div>

            <div className="hero-side">
              <div className="status-block">
                <span className="small-label">CURRENTLY</span>
                <p>
                  Exploring game development,
                  <br />
                  interactive experiences
                  <br />
                  and 3D.
                </p>
              </div>

              <div className="coordinates">
                <span>BRAGA</span>
                <span>PORTUGAL</span>
              </div>
            </div>
          </div>

          <div className="hero-bottom">
            <a href="#work" className="primary-link">
              <span>View selected work</span>
              <span>↓</span>
            </a>

            <div className="availability">
              <span className="status-dot" />
              OPEN TO OPPORTUNITIES
            </div>
          </div>
        </section>

        {/* WORK */}
        <section className="section work" id="work">
          <SectionHeader number="02">
            SELECTED WORK
          </SectionHeader>

          <div className="projects">
            {projects.map((project) => {
              const isAvailable = Boolean(project.link);
              const isDatabase = project.visual === "database";
              const isWarehouse = project.visual === "warehouse";
              const hasCustomVisual = isDatabase || isWarehouse;

              const preview = (
                <>
                  <div
                    className={`project-image ${
                      isDatabase ? "project-image-database" : ""
                    } ${
                      isWarehouse ? "project-image-warehouse" : ""
                    }`}
                  >
                    {isDatabase ? (
                      <DatabasePreview />
                    ) : isWarehouse ? (
                      <WarehousePreview />
                    ) : (
                      <img
                        src={project.image}
                        alt={`${project.title} project preview`}
                        loading="lazy"
                        decoding="async"
                        onError={(event) => {
                        event.currentTarget.style.display = "none";
                        }}
                      />
                    )}

                    {!hasCustomVisual && (
                      <div className="image-placeholder">
                        <span>{project.number}</span>
                        <p>PROJECT PREVIEW</p>
                      </div>
                    )}

                    <div className="project-overlay">
                      <span>
                        {isAvailable
                          ? "VIEW CASE STUDY"
                          : "IN DEVELOPMENT"}
                      </span>
                    </div>

                    <span className="corner corner-tl" />
                    <span className="corner corner-tr" />
                    <span className="corner corner-bl" />
                    <span className="corner corner-br" />
                  </div>

                  <div className="project-info">
                    <div>
                      <div className="project-meta-row">
                        <span className="project-type">
                          {project.type}
                        </span>

                        <span
                          className={`project-status ${
                            isAvailable ? "is-live" : ""
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>

                      <h3>{project.title}</h3>
                      <p>{project.tech}</p>
                    </div>

                    <span
                      className={`project-arrow ${
                        !isAvailable ? "is-disabled" : ""
                      }`}
                      aria-hidden="true"
                    >
                      {isAvailable ? "↗" : "—"}
                    </span>
                  </div>
                </>
              );

              return (
                <article
                  className={`project ${
                    isAvailable
                      ? "project-live"
                      : "project-pending"
                  }`}
                  key={project.number}
                >
                  <div className="project-number">
                    {project.number}
                  </div>

                  {isAvailable ? (
                    <Link
                      to={project.link}
                      className="project-card-link"
                      aria-label={`Open ${project.title} case study`}
                    >
                      {preview}
                    </Link>
                  ) : (
                    <div className="project-card-static">
                      {preview}
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </section>

        {/* ABOUT */}
        <section className="section about" id="about">
          <SectionHeader number="03">ABOUT</SectionHeader>

          <div className="about-layout">
            <div className="about-lead">
              <p>
                I build digital experiences where{" "}
                <span>development and design</span> meet.
              </p>
            </div>

            <div className="about-copy">
              <p>
                My background combines web development, databases,
                UI/UX and visual design, giving me experience across
                both the technical and creative sides of digital
                projects.
              </p>

              <p>
                After completing my Web Development &amp; Multimedia
                CTeSP at IPCA, I'm now studying Digital Game
                Development Engineering — expanding that foundation
                into game development, interactive systems and 3D.
              </p>

              <div className="currently">
                <span className="small-label">
                  // CURRENTLY EXPLORING
                </span>

                <div>
                  <span>Game Development</span>
                  <span>Blender</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section className="section capabilities">
          <SectionHeader number="04">
            CAPABILITIES
          </SectionHeader>

          <div className="capabilities-matrix">
            <article className="capability-panel">
              <div className="capability-panel-top">
                <span>01</span>
                <span>DEVELOPMENT</span>
              </div>

              <div className="capability-panel-content">
                <div className="capability-heading">
                  <h3>Development</h3>
                  <p>
                    Building responsive interfaces and
                    full-stack web applications.
                  </p>
                </div>

                <div className="capability-skills">
                  <span>HTML / CSS</span>
                  <span>JavaScript</span>
                  <span>React</span>
                  <span>Node.js</span>
                  <span>Express</span>
                  <span>REST APIs</span>
                </div>
              </div>
            </article>

            <article className="capability-panel">
              <div className="capability-panel-top">
                <span>02</span>
                <span>DATABASES</span>
              </div>

              <div className="capability-panel-content">
                <div className="capability-heading">
                  <h3>Databases</h3>
                  <p>
                    Designing relational data structures
                    and application database logic.
                  </p>
                </div>

                <div className="capability-skills">
                  <span>SQL Server</span>
                  <span>T-SQL</span>
                  <span>Relational Design</span>
                  <span>Normalization</span>
                </div>
              </div>
            </article>

            <article className="capability-panel">
              <div className="capability-panel-top">
                <span>03</span>
                <span>UI / UX</span>
              </div>

              <div className="capability-panel-content">
                <div className="capability-heading">
                  <h3>UI / UX Design</h3>
                  <p>
                    Designing interfaces from early
                    structure to responsive final screens.
                  </p>
                </div>

                <div className="capability-skills">
                  <span>Figma</span>
                  <span>Wireframing</span>
                  <span>Prototyping</span>
                  <span>Responsive Design</span>
                </div>
              </div>
            </article>

            <article className="capability-panel">
              <div className="capability-panel-top">
                <span>04</span>
                <span>VISUAL DESIGN</span>
              </div>

              <div className="capability-panel-content">
                <div className="capability-heading">
                  <h3>Visual Design</h3>
                  <p>
                    Creating visual identities and
                    communication materials for digital
                    and print.
                  </p>
                </div>

                <div className="capability-skills">
                  <span>Illustrator</span>
                  <span>Photoshop</span>
                  <span>Brand Identity</span>
                  <span>Graphic Design</span>
                </div>
              </div>
            </article>

            <article className="capability-panel">
              <div className="capability-panel-top">
                <span>05</span>
                <span>WORKFLOW</span>
              </div>

              <div className="capability-panel-content">
                <div className="capability-heading">
                  <h3>Workflow</h3>
                  <p>
                    Tools and processes used across
                    development and design projects.
                  </p>
                </div>

                <div className="capability-skills">
                  <span>Git</span>
                  <span>VS Code</span>
                  <span>Requirements Analysis</span>
                  <span>UML</span>
                </div>
              </div>
            </article>

            <article className="capability-panel capability-exploring">
              <div className="capability-panel-top">
                <span>06</span>
                <span>EXPLORING</span>
              </div>

              <div className="capability-panel-content">
                <div className="capability-heading">
                  <h3>Currently Exploring</h3>
                  <p>
                    Expanding my background into
                    interactive and 3D development.
                  </p>
                </div>

                <div className="capability-skills">
                  <span>Game Development</span>
                  <span>Blender</span>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section
          className="section experience"
          id="experience"
        >
          <SectionHeader number="05">
            EXPERIENCE
          </SectionHeader>

          <div className="experience-list">
            <article className="experience-item experience-featured">
              <div className="experience-index">
                <span>01</span>
                <span className="experience-year">
                  2026
                </span>
              </div>

              <div className="experience-main">
                <div className="experience-heading">
                  <div>
                    <span className="small-label">
                      MAR 2026 — JUL 2026 · MALTA
                    </span>

                    <h3>
                      Digital &amp; Technical Support Intern
                    </h3>

                    <h4>
                      Level Academy · Erasmus+
                    </h4>
                  </div>

                  <span className="experience-relevance">
                    FEATURED EXPERIENCE
                  </span>
                </div>

                <p>
                  Created digital and print materials,
                  supported eSports events, configured
                  technical equipment and assisted with
                  day-to-day technical operations.
                </p>

                <div className="experience-tags">
                  <span>Digital &amp; Print Design</span>
                  <span>Technical Support</span>
                  <span>eSports Events</span>
                  <span>Equipment Setup</span>
                </div>

                <Link
                  to="/projects/insideout"
                  className="experience-related"
                >
                  <span>// RELATED WORK</span>
                  <strong>
                    InsideOut Summer Camp
                  </strong>
                  <span>↗</span>
                </Link>
              </div>
            </article>

            <article className="experience-item">
              <div className="experience-index">
                <span>02</span>
                <span className="experience-year">
                  2024
                </span>
              </div>

              <div className="experience-main">
                <div className="experience-heading">
                  <div>
                    <span className="small-label">
                      May 2024 — AUG 2024 · BRAGA, PORTUGAL
                    </span>

                    <h3>Cashier</h3>
                    <h4>Agro Barro Simões</h4>
                  </div>
                </div>

                <p>
                  Customer service, payment processing
                  and day-to-day retail operations.
                </p>
              </div>
            </article>

            <article className="experience-item">
              <div className="experience-index">
                <span>03</span>
                <span className="experience-year">
                  2023
                </span>
              </div>

              <div className="experience-main">
                <div className="experience-heading">
                  <div>
                    <span className="small-label">
                      SEP 2023 — FEB 2024 · BRAGA, PORTUGAL
                    </span>

                    <h3>Real Estate Agent</h3>
                    <h4>Decisões e Soluções</h4>
                  </div>
                </div>

                <p>
                  Client communication, property
                  promotion and support throughout
                  the sales process.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* EDUCATION */}
        <section className="section education">
          <SectionHeader number="06">
            EDUCATION
          </SectionHeader>

          <div className="education-grid">
            <article className="education-card education-current">
              <div className="education-card-top">
                <span>01</span>
                <span className="education-status">
                  CURRENT
                </span>
              </div>

              <div className="education-card-body">
                <span className="education-year">
                  2026 — PRESENT
                </span>

                <h3>
                  Digital Game Development Engineering
                </h3>

                <p className="education-school">
                  BSc · IPCA
                </p>

                <p className="education-description">
                  Expanding my development background
                  into game development, programming
                  and interactive systems.
                </p>
              </div>
            </article>

            <article className="education-card">
              <div className="education-card-top">
                <span>02</span>

                <span className="education-status completed">
                  COMPLETED
                </span>
              </div>

              <div className="education-card-body">
                <span className="education-year">
                  2024 — 2026
                </span>

                <h3>
                  Web Development &amp; Multimedia
                </h3>

                <p className="education-school">
                  CTeSP · IPCA
                </p>

                <p className="education-description">
                  Built a foundation across web
                  development, databases, UI/UX and
                  multimedia design.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact" id="contact">
          <span className="contact-label">
            07 // CONTACT
          </span>

          <h2>
            LET'S BUILD
            <br />
            SOMETHING<span>.</span>
          </h2>

          <div className="contact-bottom">
            <a
              href="mailto:codebymalosi@gmail.com"
              className="email"
            >
              codebymalosi@gmail.com ↗
            </a>

            <div className="socials">
              <a
                href="https://github.com/Malosii"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/malosi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn ↗
              </a>

              <a
                href="/Miguel-Silva-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                CV ↗
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 MIGUEL SILVA</span>
        <span>BRAGA · PORTUGAL</span>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>
    </>
  );
}

export default Home;