import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./WarehouseSystem.css";


const functionalRequirements = [
  {
    id: "FR-01",
    title: "Stock Management",
    description:
      "Monitor product quantities and maintain an updated view of warehouse inventory.",
    module: "INVENTORY",
  },
  {
    id: "FR-02",
    title: "Product Entry",
    description:
      "Register incoming products and update warehouse stock when goods are received.",
    module: "RECEIVING",
  },
  {
    id: "FR-03",
    title: "Product Exit",
    description:
      "Register products leaving the warehouse and reflect those movements in inventory.",
    module: "DISPATCH",
  },
  {
    id: "FR-04",
    title: "Authentication",
    description:
      "Provide identification, login and logout functionality for system users.",
    module: "ACCESS",
  },
  {
    id: "FR-05",
    title: "Reports",
    description:
      "Generate information about stock levels, shortages and warehouse activity.",
    module: "REPORTING",
  },
  {
    id: "FR-06",
    title: "Returns",
    description:
      "Support the registration and management of products returned to the warehouse.",
    module: "RETURNS",
  },
  {
    id: "FR-07",
    title: "Administration",
    description:
      "Provide administrative control over users, products and system operations.",
    module: "ADMIN",
  },
];

const nonFunctional = [
  {
    number: "01",
    title: "Usability",
    code: "UX",
    text: "Interfaces should remain understandable and efficient for warehouse operations.",
  },
  {
    number: "02",
    title: "Performance",
    code: "PERF",
    text: "System operations should respond within appropriate execution times.",
  },
  {
    number: "03",
    title: "Portability",
    code: "PORT",
    text: "The system should support deployment and use across the required environments.",
  },
  {
    number: "04",
    title: "Organization",
    code: "ORG",
    text: "Requirements and system responsibilities should remain clearly structured.",
  },
  {
    number: "05",
    title: "External Interfaces",
    code: "EXT",
    text: "Defined interfaces organize communication between users and warehouse functions.",
  },
];

const useCases = [
  "Authenticate",
  "Search Product",
  "Check Stock",
  "Register Entry",
  "Register Exit",
  "Manage Returns",
  "Generate Reports",
  "Manage Users",
];

function WarehouseSystem() {
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
      ".warehouse-case [data-reveal]",
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
      {
        threshold: 0.08,
      },
    );

    elements.forEach((element) =>
      observer.observe(element),
    );

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll(
      "[data-warehouse-section]",
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(
              entry.target.dataset.warehouseSection,
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
    <main className="warehouse-case">
      {/* PROGRESS */}

      <div className="warehouse-progress">
        <div style={{ width: `${progress}%` }} />
      </div>

      {/* NAV */}

      <nav className="warehouse-nav">
        <Link to="/" className="warehouse-logo">
          MS_
        </Link>

        <div className="warehouse-nav-status">
          <span />
          {activeSection}
        </div>

        <Link to="/" className="warehouse-back">
          ← BACK TO PORTFOLIO
        </Link>
      </nav>

      {/* =====================================================
          HERO
      ====================================================== */}

      <header
        className="warehouse-hero"
        data-warehouse-section="OVERVIEW"
      >
        <div className="warehouse-hero-meta">
          <span>PROJECT 06</span>
          <span>SYSTEMS ANALYSIS</span>
          <span>2024</span>
        </div>

        <div className="warehouse-title" data-reveal>
          <p>
            REQUIREMENTS / ARCHITECTURE / SYSTEM DESIGN
          </p>

          <h1>
            WAREHOUSE
            <span>MANAGEMENT.</span>
          </h1>
        </div>

        <div className="warehouse-hero-bottom">
          <div data-reveal>
            <p>
              Requirements analysis and system specification
              for a warehouse management environment,
              covering inventory, product movement,
              authentication, reporting, returns and
              administration.
            </p>

            <div className="warehouse-tags">
              <span>Requirements Analysis</span>
              <span>System Architecture</span>
              <span>UML</span>
            </div>
          </div>

          <div
            className="warehouse-context"
            data-reveal
          >
            <span>ACADEMIC CONTEXT</span>

            <strong>WAREHOUSE SCENARIO</strong>

            <p>
              Developed as an academic requirements
              specification using an Amazon warehouse as
              the scenario.
            </p>

            <div>
              <i />
              CONCEPT / SPECIFICATION
            </div>
          </div>
        </div>

        {/* HERO SYSTEM MAP */}

        <div className="warehouse-control" data-reveal>
          <div className="warehouse-control-bar">
            <div>
              <i />
              WMS_REQUIREMENTS
            </div>

            <span>SPECIFICATION / V1.5</span>
          </div>

          <div className="warehouse-control-content">
            <div className="warehouse-control-side">
              <span>MODULES</span>

              <div className="control-module active">
                <small>01</small>
                INVENTORY
              </div>

              <div className="control-module">
                <small>02</small>
                RECEIVING
              </div>

              <div className="control-module">
                <small>03</small>
                DISTRIBUTION
              </div>

              <div className="control-module">
                <small>04</small>
                RETURNS
              </div>

              <div className="control-module">
                <small>05</small>
                REPORTING
              </div>
            </div>

            <div className="warehouse-control-main">
              <div className="control-top">
                <div>
                  <span>SYSTEM OVERVIEW</span>
                  <strong>WAREHOUSE CONTROL</strong>
                </div>

                <div className="control-live">
                  <i />
                  SPECIFIED
                </div>
              </div>

              <div className="control-stock">
                <div className="stock-display stock-green">
                  <span>STOCK LEVEL</span>
                  <strong>NORMAL</strong>
                  <small>GREEN STATE</small>
                </div>

                <div className="stock-display stock-yellow">
                  <span>STOCK LEVEL</span>
                  <strong>LOW</strong>
                  <small>YELLOW STATE</small>
                </div>

                <div className="stock-display stock-red">
                  <span>STOCK LEVEL</span>
                  <strong>CRITICAL</strong>
                  <small>RED STATE</small>
                </div>
              </div>

              <div className="control-flow">
                <div>
                  <span>01</span>
                  PRODUCT
                </div>

                <i>→</i>

                <div>
                  <span>02</span>
                  STOCK CHECK
                </div>

                <i>→</i>

                <div>
                  <span>03</span>
                  MOVEMENT
                </div>

                <i>→</i>

                <div>
                  <span>04</span>
                  UPDATE
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* =====================================================
          OVERVIEW
      ====================================================== */}

      <section
        className="warehouse-section"
        data-warehouse-section="SCOPE"
      >
        <div className="warehouse-label">
          // 01 — OVERVIEW
        </div>

        <div className="warehouse-overview">
          <div data-reveal>
            <h2>
              DEFINE FIRST.
              <span>BUILD LATER.</span>
            </h2>
          </div>

          <div
            className="warehouse-overview-copy"
            data-reveal
          >
            <p>
              The project focused on defining what a
              warehouse management system should do before
              implementation begins.
            </p>

            <p>
              The specification identifies the users,
              system responsibilities, required functions,
              interfaces and technical architecture needed
              to support warehouse operations.
            </p>

            <div className="warehouse-details">
              <div>
                <small>PROJECT TYPE</small>
                <strong>Requirements Specification</strong>
              </div>

              <div>
                <small>DOMAIN</small>
                <strong>Warehouse Management</strong>
              </div>

              <div>
                <small>FOCUS</small>
                <strong>Systems Analysis</strong>
              </div>

              <div>
                <small>YEAR</small>
                <strong>2024</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROBLEM / SCOPE
      ====================================================== */}

      <section
        className="warehouse-section"
        data-warehouse-section="PROBLEM & SCOPE"
      >
        <div className="warehouse-section-heading">
          <div>
            <div className="warehouse-label">
              // 02 — PROBLEM &amp; SCOPE
            </div>

            <h2>
              CONTROL THE
              <span>FLOW.</span>
            </h2>
          </div>

          <p>
            Warehouse operations require accurate
            information about where products are, how much
            stock remains and what movements are taking
            place.
          </p>
        </div>

        <div className="warehouse-scope-grid">
          <article data-reveal>
            <span>01</span>

            <div className="scope-symbol">↓</div>

            <h3>RECEIVE</h3>

            <p>
              Register incoming goods and add them to
              warehouse inventory.
            </p>
          </article>

          <article data-reveal>
            <span>02</span>

            <div className="scope-symbol">▦</div>

            <h3>STORE</h3>

            <p>
              Maintain information about available
              products and their current stock.
            </p>
          </article>

          <article data-reveal>
            <span>03</span>

            <div className="scope-symbol">⌕</div>

            <h3>TRACK</h3>

            <p>
              Search products, check availability and
              identify shortages.
            </p>
          </article>

          <article data-reveal>
            <span>04</span>

            <div className="scope-symbol">↑</div>

            <h3>DISPATCH</h3>

            <p>
              Register outgoing products and update stock
              after movement.
            </p>
          </article>

          <article data-reveal>
            <span>05</span>

            <div className="scope-symbol">↩</div>

            <h3>RETURN</h3>

            <p>
              Manage products returning to warehouse
              operations.
            </p>
          </article>
        </div>
      </section>

      {/* =====================================================
          USERS
      ====================================================== */}

      <section
        className="warehouse-section"
        data-warehouse-section="USER ROLES"
      >
        <div className="warehouse-section-heading">
          <div>
            <div className="warehouse-label">
              // 03 — USER ROLES
            </div>

            <h2>
              TWO ROLES.
              <span>DIFFERENT ACCESS.</span>
            </h2>
          </div>

          <p>
            The specification separates operational tasks
            from administrative control through two
            primary user classes.
          </p>
        </div>

        <div className="role-grid">
          <article className="role-card" data-reveal>
            <div className="role-card-top">
              <span>ROLE_01</span>
              <i />
            </div>

            <div className="role-icon">
              <span />
              <span />
            </div>

            <h3>EMPLOYEE</h3>

            <p>
              Handles day-to-day warehouse operations and
              interacts with inventory functions.
            </p>

            <div className="role-permissions">
              <div>
                <span>✓</span>
                Search products
              </div>

              <div>
                <span>✓</span>
                Check availability
              </div>

              <div>
                <span>✓</span>
                Register movements
              </div>

              <div>
                <span>✓</span>
                Process returns
              </div>
            </div>
          </article>

          <article
            className="role-card role-admin"
            data-reveal
          >
            <div className="role-card-top">
              <span>ROLE_02</span>
              <i />
            </div>

            <div className="role-icon admin">
              <span />
              <span />
            </div>

            <h3>ADMINISTRATOR</h3>

            <p>
              Controls system administration and oversees
              warehouse information and users.
            </p>

            <div className="role-permissions">
              <div>
                <span>✓</span>
                Manage users
              </div>

              <div>
                <span>✓</span>
                Manage products
              </div>

              <div>
                <span>✓</span>
                Access reports
              </div>

              <div>
                <span>✓</span>
                Administrative control
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* =====================================================
          ARCHITECTURE
      ====================================================== */}

      <section
        className="warehouse-section"
        data-warehouse-section="ARCHITECTURE"
      >
        <div className="warehouse-section-heading">
          <div>
            <div className="warehouse-label">
              // 04 — SYSTEM ARCHITECTURE
            </div>

            <h2>
              LAYERS OF THE
              <span>SYSTEM.</span>
            </h2>
          </div>

          <p>
            The proposed architecture separates the user
            interface, application logic and data services
            into distinct responsibilities.
          </p>
        </div>

        <div
          className="architecture-system"
          data-reveal
        >
          <div className="architecture-topbar">
            <div>
              <i />
              SYSTEM_ARCHITECTURE
            </div>

            <span>PROPOSED STACK</span>
          </div>

          <div className="architecture-stack">
            {/* CLIENT */}

            <div className="architecture-layer">
              <div className="architecture-number">
                01
              </div>

              <div className="architecture-description">
                <span>PRESENTATION</span>
                <strong>FRONTEND</strong>

                <p>
                  User-facing warehouse interfaces and
                  operational dashboards.
                </p>
              </div>

              <div className="architecture-tech">
                <span>REACT.JS</span>
              </div>
            </div>

            <div className="architecture-arrow">
              <span />
              <small>HTTP / API</small>
            </div>

            {/* BACKEND */}

            <div className="architecture-layer">
              <div className="architecture-number">
                02
              </div>

              <div className="architecture-description">
                <span>BUSINESS LOGIC</span>
                <strong>BACKEND</strong>

                <p>
                  Application rules, warehouse operations
                  and communication with data services.
                </p>
              </div>

              <div className="architecture-tech">
                <span>SPRING BOOT</span>
                <span>JAVA</span>
                <span>NODE.JS</span>
              </div>
            </div>

            <div className="architecture-arrow">
              <span />
              <small>DATA ACCESS</small>
            </div>

            {/* DATA */}

            <div className="architecture-layer architecture-data">
              <div className="architecture-number">
                03
              </div>

              <div className="architecture-description">
                <span>DATA LAYER</span>
                <strong>STORAGE &amp; SEARCH</strong>

                <p>
                  Proposed technologies for structured
                  data, caching, document storage and
                  search.
                </p>
              </div>

              <div className="architecture-tech">
                <span>POSTGRESQL</span>
                <span>MONGODB</span>
                <span>REDIS</span>
                <span>ELASTICSEARCH</span>
              </div>
            </div>
          </div>

          <div className="architecture-cloud">
            <span>INFRASTRUCTURE</span>

            <strong>AWS</strong>

            <div>
              CLOUD ENVIRONMENT / DEPLOYMENT
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FUNCTIONAL REQUIREMENTS
      ====================================================== */}

      <section
        className="warehouse-section"
        data-warehouse-section="REQUIREMENTS"
      >
        <div className="warehouse-section-heading">
          <div>
            <div className="warehouse-label">
              // 05 — FUNCTIONAL REQUIREMENTS
            </div>

            <h2>
              WHAT THE SYSTEM
              <span>MUST DO.</span>
            </h2>
          </div>

          <p>
            Functional requirements define the core
            operations the proposed warehouse system needs
            to support.
          </p>
        </div>

        <div className="requirements-table">
          <div className="requirements-head">
            <span>ID</span>
            <span>REQUIREMENT</span>
            <span>MODULE</span>
            <span>DESCRIPTION</span>
          </div>

          {functionalRequirements.map((requirement) => (
            <article
              key={requirement.id}
              className="requirement-row"
              data-reveal
            >
              <span>{requirement.id}</span>

              <strong>{requirement.title}</strong>

              <code>{requirement.module}</code>

              <p>{requirement.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* =====================================================
          STOCK STATES
      ====================================================== */}

      <section
        className="stock-section"
        data-warehouse-section="STOCK LOGIC"
      >
        <div className="stock-section-inner">
          <div className="stock-copy" data-reveal>
            <div className="warehouse-label">
              // STOCK MONITORING
            </div>

            <h2>
              KNOW BEFORE
              <span>IT RUNS OUT.</span>
            </h2>

            <p>
              Stock levels are represented through visual
              states, allowing shortages to be identified
              and notifications to be triggered when
              attention is required.
            </p>
          </div>

          <div className="stock-state-grid">
            <article className="state-card normal" data-reveal>
              <div>
                <span>01</span>
                <i />
              </div>

              <strong>NORMAL</strong>

              <p>
                Product stock is within the expected
                operating range.
              </p>

              <small>STATUS / GREEN</small>
            </article>

            <article className="state-card warning" data-reveal>
              <div>
                <span>02</span>
                <i />
              </div>

              <strong>LOW STOCK</strong>

              <p>
                Inventory is approaching a level that
                requires attention.
              </p>

              <small>STATUS / YELLOW</small>
            </article>

            <article className="state-card critical" data-reveal>
              <div>
                <span>03</span>
                <i />
              </div>

              <strong>CRITICAL</strong>

              <p>
                Stock is critically low or unavailable and
                requires action.
              </p>

              <small>STATUS / RED</small>
            </article>
          </div>
        </div>
      </section>

      {/* =====================================================
          NON FUNCTIONAL
      ====================================================== */}

      <section
        className="warehouse-section"
        data-warehouse-section="QUALITY"
      >
        <div className="warehouse-section-heading">
          <div>
            <div className="warehouse-label">
              // 06 — NON-FUNCTIONAL REQUIREMENTS
            </div>

            <h2>
              HOW IT SHOULD
              <span>BEHAVE.</span>
            </h2>
          </div>

          <p>
            Beyond functionality, the specification
            considers qualities and constraints affecting
            how the system should operate.
          </p>
        </div>

        <div className="quality-grid">
          {nonFunctional.map((item) => (
            <article key={item.number} data-reveal>
              <div className="quality-top">
                <span>{item.number}</span>
                <code>{item.code}</code>
              </div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* =====================================================
          USE CASES
      ====================================================== */}

      <section
        className="warehouse-section"
        data-warehouse-section="USE CASES"
      >
        <div className="warehouse-section-heading">
          <div>
            <div className="warehouse-label">
              // 07 — USE CASES
            </div>

            <h2>
              USERS INTO
              <span>ACTIONS.</span>
            </h2>
          </div>

          <p>
            User interactions can be translated into
            defined use cases connecting each role with
            the functions available to them.
          </p>
        </div>

        <div className="use-case-board" data-reveal>
          <div className="use-case-toolbar">
            <span>USE_CASE_MODEL</span>
            <span>WAREHOUSE SYSTEM</span>
          </div>

          <div className="use-case-content">
            <div className="use-case-actor">
              <div className="actor-head" />

              <div className="actor-body">
                <span />
                <span />
                <span />
              </div>

              <strong>EMPLOYEE</strong>
            </div>

            <div className="use-case-lines">
              {useCases.slice(0, 6).map((item, index) => (
                <div key={item}>
                  <span />
                  <small>{String(index + 1).padStart(2, "0")}</small>
                </div>
              ))}
            </div>

            <div className="use-case-list">
              {useCases.slice(0, 6).map((item, index) => (
                <div key={item}>
                  <span>
                    UC-{String(index + 1).padStart(2, "0")}
                  </span>

                  <strong>{item}</strong>
                </div>
              ))}
            </div>

            <div className="use-case-admin-lines">
              <span />
              <span />
            </div>

            <div className="use-case-admin">
              <div className="actor-head" />

              <div className="actor-body">
                <span />
                <span />
                <span />
              </div>

              <strong>ADMIN</strong>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SEQUENCE
      ====================================================== */}

      <section
        className="warehouse-section"
        data-warehouse-section="SEQUENCE"
      >
        <div className="warehouse-section-heading">
          <div>
            <div className="warehouse-label">
              // 08 — SEQUENCE FLOW
            </div>

            <h2>
              REQUEST TO
              <span>RESPONSE.</span>
            </h2>
          </div>

          <p>
            A simplified sequence illustrates how a stock
            operation moves from the employee interface
            through application logic to stored data.
          </p>
        </div>

        <div className="sequence-board" data-reveal>
          <div className="sequence-head">
            <span>STOCK_UPDATE.sequence</span>
            <span>PROCESS FLOW</span>
          </div>

          <div className="sequence-content">
            <div className="sequence-column">
              <div className="sequence-node">
                EMPLOYEE
              </div>
              <span className="sequence-line" />
            </div>

            <div className="sequence-column">
              <div className="sequence-node">
                INTERFACE
              </div>
              <span className="sequence-line" />
            </div>

            <div className="sequence-column">
              <div className="sequence-node">
                BACKEND
              </div>
              <span className="sequence-line" />
            </div>

            <div className="sequence-column">
              <div className="sequence-node">
                DATABASE
              </div>
              <span className="sequence-line" />
            </div>

            <div className="sequence-message message-1">
              <span>01</span>
              Search product
              <i />
            </div>

            <div className="sequence-message message-2">
              <span>02</span>
              Request stock
              <i />
            </div>

            <div className="sequence-message message-3">
              <span>03</span>
              Query inventory
              <i />
            </div>

            <div className="sequence-message reverse message-4">
              <span>04</span>
              Stock data
              <i />
            </div>

            <div className="sequence-message reverse message-5">
              <span>05</span>
              Availability
              <i />
            </div>

            <div className="sequence-message message-6">
              <span>06</span>
              Register movement
              <i />
            </div>

            <div className="sequence-message message-7">
              <span>07</span>
              Update stock
              <i />
            </div>

            <div className="sequence-message reverse message-8">
              <span>08</span>
              Confirm update
              <i />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTERFACE CONCEPT
      ====================================================== */}

      <section
        className="warehouse-section"
        data-warehouse-section="INTERFACE"
      >
        <div className="warehouse-section-heading">
          <div>
            <div className="warehouse-label">
              // 09 — INTERFACE CONCEPT
            </div>

            <h2>
              REQUIREMENTS INTO
              <span>STRUCTURE.</span>
            </h2>
          </div>

          <p>
            This representation translates the documented
            interface areas into a conceptual dashboard.
            It is a portfolio visualization of the
            specification, not a finished application.
          </p>
        </div>

        <div
          className="interface-concept"
          data-reveal
        >
          <div className="interface-sidebar">
            <div className="interface-brand">
              WM<span>_</span>
            </div>

            <nav>
              <div className="selected">
                <span>01</span>
                Dashboard
              </div>

              <div>
                <span>02</span>
                Stock
              </div>

              <div>
                <span>03</span>
                Receiving
              </div>

              <div>
                <span>04</span>
                Distribution
              </div>

              <div>
                <span>05</span>
                Returns
              </div>

              <div>
                <span>06</span>
                Reports
              </div>
            </nav>

            <div className="interface-user">
              <i />
              EMPLOYEE_042
            </div>
          </div>

          <div className="interface-main">
            <div className="interface-header">
              <div>
                <span>WAREHOUSE / DASHBOARD</span>
                <strong>INVENTORY OVERVIEW</strong>
              </div>

              <div className="interface-search">
                SEARCH PRODUCT...
                <span>⌕</span>
              </div>
            </div>

            <div className="interface-stats">
              <div>
                <span>TOTAL PRODUCTS</span>
                <strong>—</strong>
                <small>INVENTORY</small>
              </div>

              <div>
                <span>LOW STOCK</span>
                <strong>—</strong>
                <small>REQUIRES REVIEW</small>
              </div>

              <div>
                <span>OUT OF STOCK</span>
                <strong>—</strong>
                <small>CRITICAL</small>
              </div>
            </div>

            <div className="interface-table">
              <div className="interface-table-title">
                <span>PRODUCT INVENTORY</span>
                <span>STATUS</span>
              </div>

              <div className="interface-table-head">
                <span>PRODUCT</span>
                <span>STOCK</span>
                <span>LOCATION</span>
                <span>STATUS</span>
              </div>

              <div className="interface-table-row">
                <span>PRODUCT_001</span>
                <span>—</span>
                <span>ZONE_A</span>
                <span className="status-normal">
                  ● NORMAL
                </span>
              </div>

              <div className="interface-table-row">
                <span>PRODUCT_002</span>
                <span>—</span>
                <span>ZONE_B</span>
                <span className="status-low">
                  ● LOW
                </span>
              </div>

              <div className="interface-table-row">
                <span>PRODUCT_003</span>
                <span>—</span>
                <span>ZONE_C</span>
                <span className="status-critical">
                  ● CRITICAL
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL
      ====================================================== */}

      <section
        className="warehouse-final"
        data-warehouse-section="FINAL"
      >
        <div data-reveal>
          <div className="warehouse-label">
            // 10 — FINAL SPECIFICATION
          </div>

          <h2>
            ANALYZE.
            <br />
            DEFINE.
            <br />
            <span>SPECIFY.</span>
          </h2>

          <p>
            The final deliverable defines the proposed
            warehouse system before development: its
            actors, operations, requirements, interfaces
            and architecture.
          </p>
        </div>

        <div
          className="specification-summary"
          data-reveal
        >
          <div className="specification-header">
            <div>
              <i />
              REQUIREMENTS DOCUMENT
            </div>

            <span>V1.5</span>
          </div>

          <div className="specification-main">
            <span>PROJECT</span>

            <strong>
              WAREHOUSE
              <br />
              MANAGEMENT
            </strong>

            <small>
              SYSTEM REQUIREMENTS SPECIFICATION
            </small>
          </div>

          <div className="specification-data">
            <div>
              <span>TYPE</span>
              <strong>ACADEMIC</strong>
            </div>

            <div>
              <span>DISCIPLINE</span>
              <strong>SYSTEMS ANALYSIS</strong>
            </div>

            <div>
              <span>USERS</span>
              <strong>02 ROLES</strong>
            </div>

            <div>
              <span>STATUS</span>
              <strong>SPECIFIED</strong>
            </div>
          </div>
        </div>
      </section>

      {/* NEXT PROJECT */}
<section className="next-project">
  <Link to="/">← ALL PROJECTS</Link>

  <div>
    <span>NEXT PROJECT</span>
    <Link to="/projects/echoes-summer">
      ECHOES SUMMER '26 →
    </Link>
  </div>
</section>
    </main>
  );
}

export default WarehouseSystem;