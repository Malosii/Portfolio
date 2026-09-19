import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./CinemaDatabase.css";

const tables = [
  {
    name: "Filme",
    type: "CORE",
    fields: [
      ["PK", "id"],
      ["", "titulo"],
      ["", "duracao"],
      ["", "genero"],
      ["", "classificacao"],
    ],
  },
  {
    name: "Sessão",
    type: "CORE",
    fields: [
      ["PK", "id"],
      ["FK", "id_filme"],
      ["FK", "id_sala"],
      ["", "data_hora"],
      ["", "preco"],
    ],
  },
  {
    name: "Sala",
    type: "CORE",
    fields: [
      ["PK", "id"],
      ["FK", "id_tipo_sala"],
      ["", "nome"],
      ["", "capacidade"],
    ],
  },
  {
    name: "Bilhete",
    type: "TRANSACTION",
    fields: [
      ["PK", "id"],
      ["FK", "id_sessao"],
      ["FK", "id_cliente"],
      ["", "lugar"],
      ["", "preco"],
    ],
  },
  {
    name: "Cliente",
    type: "USER",
    fields: [
      ["PK", "id"],
      ["", "nome"],
      ["", "email"],
      ["", "telefone"],
    ],
  },
  {
    name: "VendaBar",
    type: "TRANSACTION",
    fields: [
      ["PK", "id"],
      ["FK", "id_cliente"],
      ["", "data"],
      ["", "total"],
    ],
  },
  {
    name: "VendaProdutoBar",
    type: "JUNCTION",
    fields: [
      ["PK/FK", "id_venda"],
      ["PK/FK", "id_produto"],
      ["", "quantidade"],
      ["", "preco_unitario"],
    ],
  },
  {
    name: "ProdutoBar",
    type: "PRODUCT",
    fields: [
      ["PK", "id"],
      ["FK", "id_categoria"],
      ["", "nome"],
      ["", "preco"],
    ],
  },
  {
    name: "Categoria",
    type: "REFERENCE",
    fields: [
      ["PK", "id"],
      ["", "nome"],
    ],
  },
];

const features = [
  "Relational Database Design",
  "Normalization",
  "Primary & Foreign Keys",
  "SQL Queries",
  "Triggers",
  "Functions",
  "Views",
  "Stored Procedures",
];

function SchemaTable({ title, type, fields, className = "" }) {
  return (
    <article className={`schema-table ${className}`}>
      <div className="schema-table-top">
        <div>
          <span className="schema-icon">▦</span>
          <strong>{title}</strong>
        </div>

        <small>{type}</small>
      </div>

      <div className="schema-fields">
        {fields.map(([key, name]) => (
          <div key={name}>
            <span
              className={
                key.includes("PK")
                  ? "schema-key schema-key-pk"
                  : key.includes("FK")
                    ? "schema-key schema-key-fk"
                    : "schema-key"
              }
            >
              {key || "—"}
            </span>

            <code>{name}</code>
          </div>
        ))}
      </div>
    </article>
  );
}

function CinemaDatabase() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] =
    useState("OVERVIEW");

  useEffect(() => {
    const handleScroll = () => {
      const max =
        document.documentElement.scrollHeight -
        window.innerHeight;

      setProgress(
        max > 0 ? (window.scrollY / max) * 100 : 0,
      );
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(
      ".cinema-case [data-reveal]",
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    elements.forEach((element) =>
      observer.observe(element),
    );

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll(
      "[data-cinema-section]",
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(
              entry.target.dataset.cinemaSection,
            );
          }
        });
      },
      {
        rootMargin: "-35% 0px -55% 0px",
      },
    );

    sections.forEach((section) =>
      observer.observe(section),
    );

    return () => observer.disconnect();
  }, []);

  return (
    <main className="cinema-case">
      {/* =========================
          PROGRESS
      ========================== */}

      <div className="cinema-progress">
        <div style={{ width: `${progress}%` }} />
      </div>

      {/* =========================
          NAV
      ========================== */}

      <nav className="cinema-nav">
        <Link to="/" className="cinema-logo">
          MS_
        </Link>

        <div className="cinema-nav-status">
          <span />
          {activeSection}
        </div>

        <Link to="/" className="cinema-back">
          ← BACK TO PORTFOLIO
        </Link>
      </nav>

      {/* =========================
          HERO
      ========================== */}

      <header
        className="cinema-hero"
        data-cinema-section="OVERVIEW"
      >
        <div className="cinema-hero-meta">
          <span>PROJECT 05</span>
          <span>DATABASE DEVELOPMENT</span>
          <span>2025</span>
        </div>

        <div className="cinema-title" data-reveal>
          <p>
            SQL SERVER / T-SQL / DATABASE DESIGN
          </p>

          <h1>
            CINEMA
            <span>DATABASE.</span>
          </h1>
        </div>

        <div
          className="cinema-hero-bottom"
          data-reveal
        >
          <p>
            A relational database designed to support the
            core operations of a cinema, including films,
            sessions, ticketing, customers, screening rooms
            and bar transactions.
          </p>

          <div className="cinema-tags">
            <span>SQL Server</span>
            <span>T-SQL</span>
            <span>Database Design</span>
          </div>
        </div>

        <div className="cinema-terminal" data-reveal>
          <div className="terminal-top">
            <div className="terminal-dots">
              <span />
              <span />
              <span />
            </div>

            <span>cinema_database.sql</span>
            <span>SQL SERVER</span>
          </div>

          <div className="terminal-code">
            <span className="line-number">01</span>
            <code>
              <b>CREATE DATABASE</b>{" "}
              <span>AppCinema</span>;
            </code>

            <span className="line-number">02</span>
            <code>
              <b>USE</b>{" "}
              <span>AppCinema</span>;
            </code>

            <span className="line-number">03</span>
            <code />

            <span className="line-number">04</span>
            <code>
              <b>CREATE TABLE</b> Filme
            </code>

            <span className="line-number">05</span>
            <code>(</code>

            <span className="line-number">06</span>
            <code className="indent">
              id INT <b>PRIMARY KEY</b>,
            </code>

            <span className="line-number">07</span>
            <code className="indent">
              titulo VARCHAR(...),
            </code>

            <span className="line-number">08</span>
            <code className="indent">
              duracao INT
            </code>

            <span className="line-number">09</span>
            <code>);</code>

            <span className="line-number">10</span>
            <code className="terminal-comment">
              -- cinema management database
            </code>
          </div>

          <div className="terminal-status">
            <span>DATABASE ONLINE</span>

            <span>
              <i />
              CONNECTED
            </span>
          </div>
        </div>
      </header>

      {/* =========================
          OVERVIEW
      ========================== */}

      <section
        className="cinema-section"
        data-cinema-section="SYSTEM"
      >
        <div className="cinema-label">
          // 01 — OVERVIEW
        </div>

        <div className="cinema-overview">
          <div data-reveal>
            <h2>
              ONE DATABASE.
              <span>THE WHOLE CINEMA.</span>
            </h2>
          </div>

          <div
            className="cinema-overview-copy"
            data-reveal
          >
            <p>
              The objective was to create a robust
              relational database capable of representing
              the main operations of a cinema in a
              structured and maintainable way.
            </p>

            <p>
              The system connects film programming and
              screening sessions with ticketing,
              customers, rooms and bar sales.
            </p>

            <div className="cinema-details">
              <div>
                <small>TYPE</small>
                <strong>Database Development</strong>
              </div>

              <div>
                <small>DBMS</small>
                <strong>Microsoft SQL Server</strong>
              </div>

              <div>
                <small>LANGUAGE</small>
                <strong>T-SQL</strong>
              </div>

              <div>
                <small>YEAR</small>
                <strong>2025</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          ARCHITECTURE
      ========================== */}

      <section
        className="cinema-section"
        data-cinema-section="ARCHITECTURE"
      >
        <div className="cinema-section-heading">
          <div>
            <div className="cinema-label">
              // 02 — DATABASE ARCHITECTURE
            </div>

            <h2>
              HOW THE DATA
              <span>CONNECTS.</span>
            </h2>
          </div>

          <p>
            The system is divided into two main flows:
            cinema operations and bar transactions.
            Relationships between entities keep data
            connected without duplicating information.
          </p>
        </div>

        <div
          className="architecture-board"
          data-reveal
        >
          <div className="architecture-toolbar">
            <div>
              <span className="architecture-status" />
              DATABASE_SCHEMA
            </div>

            <div>
              09 TABLES · RELATIONAL MODEL
            </div>
          </div>

          {/* CINEMA FLOW */}

          <div className="schema-flow cinema-flow">
            <div className="schema-flow-label">
              <span>01</span>
              CINEMA OPERATIONS
            </div>

            <div className="schema-row schema-row-main">
              <SchemaTable
                title="Filme"
                type="CORE"
                fields={tables[0].fields}
              />

              <div className="schema-connector">
                <span />
                <small>1:N</small>
              </div>

              <SchemaTable
                title="Sessão"
                type="CORE"
                fields={tables[1].fields}
              />

              <div className="schema-connector">
                <span />
                <small>1:N</small>
              </div>

              <SchemaTable
                title="Bilhete"
                type="TRANSACTION"
                fields={tables[3].fields}
              />
            </div>

            <div className="schema-secondary-row">
              <div className="schema-spacer" />

              <div className="schema-vertical-link">
                <span />
                <small>N:1</small>
              </div>

              <div className="schema-spacer" />
            </div>

            <div className="schema-row schema-row-support">
              <SchemaTable
                title="Sala"
                type="CORE"
                fields={tables[2].fields}
              />

              <div className="schema-support-note">
                <span>ROOM ASSIGNMENT</span>
                <p>
                  Sessions reference the room in which the
                  film is screened.
                </p>
              </div>

              <SchemaTable
                title="Cliente"
                type="USER"
                fields={tables[4].fields}
              />
            </div>
          </div>

          {/* BAR FLOW */}

          <div className="schema-flow bar-flow">
            <div className="schema-flow-label">
              <span>02</span>
              BAR TRANSACTIONS
            </div>

            <div className="schema-row schema-row-bar">
              <SchemaTable
                title="Cliente"
                type="USER"
                fields={tables[4].fields}
              />

              <div className="schema-connector">
                <span />
                <small>1:N</small>
              </div>

              <SchemaTable
                title="VendaBar"
                type="TRANSACTION"
                fields={tables[5].fields}
              />

              <div className="schema-connector">
                <span />
                <small>1:N</small>
              </div>

              <SchemaTable
                title="VendaProdutoBar"
                type="JUNCTION"
                fields={tables[6].fields}
              />

              <div className="schema-connector">
                <span />
                <small>N:1</small>
              </div>

              <SchemaTable
                title="ProdutoBar"
                type="PRODUCT"
                fields={tables[7].fields}
              />
            </div>

            <div className="schema-category">
              <div className="schema-category-line">
                <span />
              </div>

              <SchemaTable
                title="Categoria"
                type="REFERENCE"
                fields={tables[8].fields}
              />
            </div>
          </div>

          <div className="architecture-legend">
            <div>
              <span className="legend-key pk">
                PK
              </span>
              PRIMARY KEY
            </div>

            <div>
              <span className="legend-key fk">
                FK
              </span>
              FOREIGN KEY
            </div>

            <div>
              <span className="legend-line" />
              RELATIONSHIP
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          TABLE STRUCTURE
      ========================== */}

      <section
        className="cinema-section"
        data-cinema-section="TABLE STRUCTURE"
      >
        <div className="cinema-section-heading">
          <div>
            <div className="cinema-label">
              // 03 — TABLE STRUCTURE
            </div>

            <h2>
              SEPARATE TABLES.
              <span>SHARED DATA.</span>
            </h2>
          </div>

          <p>
            Each responsibility is separated into its own
            table. Primary and foreign keys then reconnect
            the data where relationships are required.
          </p>
        </div>

        <div className="database-grid">
          {tables.map((table, index) => (
            <article
              className="database-table"
              key={`${table.name}-${index}`}
              data-reveal
            >
              <div className="database-table-header">
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <strong>{table.name}</strong>

                <small>{table.type}</small>
              </div>

              <div className="database-fields">
                {table.fields.map(
                  ([key, field], fieldIndex) => (
                    <div
                      key={`${field}-${fieldIndex}`}
                    >
                      <span
                        className={
                          key.includes("PK")
                            ? "key primary"
                            : key.includes("FK")
                              ? "key foreign"
                              : "key"
                        }
                      >
                        {key || "—"}
                      </span>

                      <code>{field}</code>
                    </div>
                  ),
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* =========================
          NORMALIZATION
      ========================== */}

      <section
        className="cinema-normalization"
        data-cinema-section="NORMALIZATION"
      >
        <div
          className="normalization-copy"
          data-reveal
        >
          <div className="cinema-label">
            // 04 — NORMALIZATION
          </div>

          <h2>
            CLEAN DATA.
            <span>LESS REDUNDANCY.</span>
          </h2>

          <p>
            The database structure was progressively
            normalized to reduce duplicated information
            and improve consistency between related
            records.
          </p>
        </div>

        <div className="normalization-levels">
          <article data-reveal>
            <span>01</span>
            <strong>1NF</strong>
            <h3>FIRST NORMAL FORM</h3>
            <p>
              Atomic values and structured records.
            </p>
          </article>

          <article data-reveal>
            <span>02</span>
            <strong>2NF</strong>
            <h3>SECOND NORMAL FORM</h3>
            <p>
              Removal of partial dependencies.
            </p>
          </article>

          <article data-reveal>
            <span>03</span>
            <strong>3NF</strong>
            <h3>THIRD NORMAL FORM</h3>
            <p>
              Removal of transitive dependencies.
            </p>
          </article>
        </div>
      </section>

      {/* =========================
          SQL
      ========================== */}

      <section
        className="cinema-section"
        data-cinema-section="SQL"
      >
        <div className="cinema-section-heading">
          <div>
            <div className="cinema-label">
              // 05 — SQL IMPLEMENTATION
            </div>

            <h2>
              DESIGN INTO
              <span>CODE.</span>
            </h2>
          </div>

          <p>
            After defining the relational model, the
            database was implemented in Microsoft SQL
            Server using T-SQL.
          </p>
        </div>

        <div className="sql-grid">
          <div className="sql-editor" data-reveal>
            <div className="sql-editor-header">
              <span>CREATE_SESSION_TABLE.sql</span>
              <span>T-SQL</span>
            </div>

            <pre>
              <code>
<span className="sql-keyword">CREATE TABLE</span> Sessao (
{"\n"}  id <span className="sql-type">INT</span> <span className="sql-keyword">PRIMARY KEY</span>,
{"\n"}  data_hora <span className="sql-type">DATETIME</span>,
{"\n"}  preco <span className="sql-type">DECIMAL</span>,
{"\n"}  id_filme <span className="sql-type">INT</span>,
{"\n"}  id_sala <span className="sql-type">INT</span>,
{"\n"}
{"\n"}  <span className="sql-keyword">FOREIGN KEY</span> (id_filme)
{"\n"}    <span className="sql-keyword">REFERENCES</span> Filme(id),
{"\n"}
{"\n"}  <span className="sql-keyword">FOREIGN KEY</span> (id_sala)
{"\n"}    <span className="sql-keyword">REFERENCES</span> Sala(id)
{"\n"});
              </code>
            </pre>
          </div>

          <div className="sql-explanation">
            <div data-reveal>
              <span>01</span>
              <h3>PRIMARY KEYS</h3>
              <p>
                Unique identifiers distinguish individual
                records inside each table.
              </p>
            </div>

            <div data-reveal>
              <span>02</span>
              <h3>FOREIGN KEYS</h3>
              <p>
                Relationships connect sessions, films,
                rooms, customers and transactions.
              </p>
            </div>

            <div data-reveal>
              <span>03</span>
              <h3>CONSTRAINTS</h3>
              <p>
                Database-level rules help maintain the
                integrity of stored information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          DATABASE LOGIC
      ========================== */}

      <section
        className="cinema-section"
        data-cinema-section="DATABASE LOGIC"
      >
        <div className="cinema-section-heading">
          <div>
            <div className="cinema-label">
              // 06 — DATABASE LOGIC
            </div>

            <h2>
              MORE THAN
              <span>STORAGE.</span>
            </h2>
          </div>

          <p>
            SQL Server functionality was used beyond table
            creation through triggers, functions, views and
            stored procedures.
          </p>
        </div>

        <div className="logic-grid">
          <article data-reveal>
            <span>TRG</span>

            <h3>TRIGGERS</h3>

            <p>
              Automatic actions executed when specified
              database events occur.
            </p>

            <code>AFTER INSERT / UPDATE</code>
          </article>

          <article data-reveal>
            <span>FN</span>

            <h3>FUNCTIONS</h3>

            <p>
              Reusable database logic for calculations and
              data processing.
            </p>

            <code>CREATE FUNCTION</code>
          </article>

          <article data-reveal>
            <span>VW</span>

            <h3>VIEWS</h3>

            <p>
              Simplified representations of information
              assembled from related tables.
            </p>

            <code>CREATE VIEW</code>
          </article>

          <article data-reveal>
            <span>SP</span>

            <h3>PROCEDURES</h3>

            <p>
              Stored operations for reusable and
              structured database interactions.
            </p>

            <code>CREATE PROCEDURE</code>
          </article>
        </div>
      </section>

      {/* =========================
          FEATURES
      ========================== */}

      <section
        className="cinema-section"
        data-cinema-section="FEATURES"
      >
        <div className="cinema-label">
          // 07 — IMPLEMENTED CONCEPTS
        </div>

        <div className="feature-list">
          {features.map((feature, index) => (
            <div key={feature} data-reveal>
              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

              <strong>{feature}</strong>

              <span>↗</span>
            </div>
          ))}
        </div>
      </section>

      {/* =========================
          FINAL
      ========================== */}

      <section
        className="cinema-final"
        data-cinema-section="FINAL"
      >
        <div data-reveal>
          <div className="cinema-label">
            // 08 — FINAL SYSTEM
          </div>

          <h2>
            STRUCTURED.
            <br />
            RELATIONAL.
            <br />
            <span>FUNCTIONAL.</span>
          </h2>

          <p>
            The final database combines relational
            modelling, normalization and SQL Server
            implementation into a structured system for
            cinema operations.
          </p>
        </div>

        <div className="final-database" data-reveal>
          <div className="final-db-icon">
            <span />
            <span />
            <span />
          </div>

          <strong>APP_CINEMA</strong>

          <small>DATABASE STATUS</small>

          <div className="db-status">
            <i />
            OPERATIONAL
          </div>

          <div className="db-stats">
            <div>
              <span>MODEL</span>
              <strong>RELATIONAL</strong>
            </div>

            <div>
              <span>TABLES</span>
              <strong>09</strong>
            </div>

            <div>
              <span>DBMS</span>
              <strong>SQL SERVER</strong>
            </div>

            <div>
              <span>LANGUAGE</span>
              <strong>T-SQL</strong>
            </div>
          </div>
        </div>
      </section>

      {/* NEXT PROJECT */}
<section className="next-project">
  <Link to="/">← ALL PROJECTS</Link>

  <div>
    <span>NEXT PROJECT</span>
    <Link to="/projects/warehouse-system">
      WAREHOUSE SYSTEM →
    </Link>
  </div>
</section>
    </main>
  );
}

export default CinemaDatabase;