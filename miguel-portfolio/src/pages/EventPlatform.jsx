import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./EventPlatform.css";

const architecture = [
  {
    number: "01",
    title: "CLIENT",
    tech: "HTML · CSS · JavaScript",
    description:
      "Browser-based interface responsible for event discovery, account management and user interactions.",
  },
  {
    number: "02",
    title: "REST API",
    tech: "Node.js · Express",
    description:
      "Application layer handling authentication, events, users, permissions and database operations.",
  },
  {
    number: "03",
    title: "DATABASE",
    tech: "SQL Server",
    description:
      "Relational data layer storing accounts, events, applications, comments and administrative records.",
  },
];

const features = [
  "JWT Authentication",
  "Role-Based Access",
  "Event Creation",
  "Event Applications",
  "Search & Filtering",
  "Organizer Approval",
  "Admin Dashboard",
  "Audit Logging",
  "File Uploads",
  "User Profiles",
  "Comments",
  "SQL Server",
];

function EventPlatform() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("INTRO");

  useEffect(() => {
    const updateProgress = () => {
      const max =
        document.documentElement.scrollHeight - window.innerHeight;

      setScrollProgress(
        max > 0 ? Math.min((window.scrollY / max) * 100, 100) : 0
      );
    };

    updateProgress();

    window.addEventListener("scroll", updateProgress, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", updateProgress);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(
      ".event-case [data-reveal]"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll(
      ".event-case [data-section]"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (!visible.length) return;

        const section =
          visible[0].target.getAttribute("data-section");

        if (section) setActiveSection(section);
      },
      {
        threshold: [0.1, 0.25, 0.5],
        rootMargin: "-20% 0px -55% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="event-case">
      {/* PROGRESS */}

      <div className="event-progress" aria-hidden="true">
        <div
          className="event-progress-fill"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* NAVIGATION */}

      <nav className="event-nav">
        <Link to="/" className="event-logo">
          MS<span>_</span>
        </Link>

        <div className="event-nav-status">
          <span />
          {activeSection}
        </div>

        <Link to="/" className="event-back">
          ← BACK TO PORTFOLIO
        </Link>
      </nav>

      {/* HERO */}

      <section
        className="event-hero"
        data-section="INTRO"
      >
        <div className="event-hero-meta" data-reveal>
          <span>PROJECT 02</span>
          <span>FULL-STACK APPLICATION</span>
          <span>2026</span>
        </div>

        <div className="event-hero-grid">
          <div className="event-hero-title">
            <span className="event-command" data-reveal>
              &gt; BUILDING_SYSTEM
            </span>

            <h1 data-reveal>
              EVENT
              <br />
              MANAGEMENT
              <br />
              <strong>PLATFORM</strong>
            </h1>
          </div>

          <div className="event-hero-copy" data-reveal>
            <span className="event-copy-label">
              // PROJECT DESCRIPTION
            </span>

            <p>
              A full-stack platform for discovering,
              creating and managing music events with
              dedicated participant, organizer and
              administrator workflows.
            </p>

            <div className="event-stack">
              <span>JAVASCRIPT</span>
              <span>NODE.JS</span>
              <span>EXPRESS</span>
              <span>SQL SERVER</span>
              <span>JWT</span>
            </div>
          </div>
        </div>

        <figure
          className="event-hero-screen event-screen"
          data-reveal
        >
          <div className="event-window-bar">
            <div>
              <span />
              <span />
              <span />
            </div>

            <span>EVENTS.HTML</span>
          </div>

          <img
            src="/projects/event-platform/events.png"
            alt="Event Management Platform event discovery page"
          />

          <figcaption>
            <span>01 / EVENT DISCOVERY</span>
            <span>FULL-STACK APPLICATION</span>
          </figcaption>
        </figure>
      </section>

      {/* OVERVIEW */}

      <section
        className="event-section"
        data-section="OVERVIEW"
      >
        <div className="event-section-number" data-reveal>
          01 // OVERVIEW
        </div>

        <div className="event-overview">
          <h2 data-reveal>
            ONE PLATFORM.
            <br />
            THREE USER
            <br />
            <span>EXPERIENCES.</span>
          </h2>

          <div className="event-overview-copy" data-reveal>
            <p>
              The project was developed as a complete event
              management system rather than a static website.
              Users interact with the same platform through
              different permissions and workflows depending on
              their account type.
            </p>

            <p>
              Participants can discover and join events,
              organizers can publish and manage them, while
              administrators control platform access and
              organizer approval.
            </p>

            <div className="event-project-info">
              <div>
                <span>TYPE</span>
                <strong>Academic Project</strong>
              </div>

              <div>
                <span>ROLE</span>
                <strong>Full-Stack Development</strong>
              </div>

              <div>
                <span>FRONTEND</span>
                <strong>HTML · CSS · JavaScript</strong>
              </div>

              <div>
                <span>BACKEND</span>
                <strong>Node.js · Express</strong>
              </div>

              <div>
                <span>DATABASE</span>
                <strong>SQL Server</strong>
              </div>

              <div>
                <span>AUTH</span>
                <strong>JWT</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ARCHITECTURE */}

      <section
        className="event-section event-architecture-section"
        data-section="ARCHITECTURE"
      >
        <div className="event-section-number" data-reveal>
          02 // SYSTEM ARCHITECTURE
        </div>

        <div className="event-section-heading">
          <div>
            <span className="event-command" data-reveal>
              &gt; REQUEST_FLOW
            </span>

            <h2 data-reveal>
              FRONTEND
              <br />
              TO DATABASE.
            </h2>
          </div>

          <p data-reveal>
            The application separates the browser interface,
            backend API and SQL Server database into distinct
            layers.
          </p>
        </div>

        <div className="architecture-flow">
          {architecture.map((item, index) => (
            <div className="architecture-node" key={item.number} data-reveal>
              <div className="architecture-top">
                <span>{item.number}</span>
                <span>{item.tech}</span>
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

              {index !== architecture.length - 1 && (
                <div
                  className="architecture-connector"
                  aria-hidden="true"
                >
                  ↓
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="request-strip" data-reveal>
          <span>CLIENT</span>
          <i>HTTP REQUEST</i>
          <span>EXPRESS API</span>
          <i>SQL QUERY</i>
          <span>SQL SERVER</span>
          <i>JSON RESPONSE</i>
          <span>CLIENT</span>
        </div>
      </section>

      {/* ROLES */}

      <section
        className="event-section"
        data-section="USER ROLES"
      >
        <div className="event-section-number" data-reveal>
          03 // USER ROLES
        </div>

        <div className="event-section-heading">
          <h2 data-reveal>
            ROLE-BASED
            <br />
            <span>ACCESS.</span>
          </h2>

          <p data-reveal>
            Registration branches into different account
            types, allowing the backend to control which
            operations each user can perform.
          </p>
        </div>

        <div className="role-layout">
          <figure
            className="event-screen role-main-screen"
            data-reveal
          >
            <div className="event-window-bar">
              <div>
                <span />
                <span />
                <span />
              </div>

              <span>ACCOUNT TYPE</span>
            </div>

            <img
              src="/projects/event-platform/account-type.png"
              alt="Participant or organizer account selection"
              loading="lazy"
            />
          </figure>

          <div className="role-list">
            <div className="role-item" data-reveal>
              <span>01</span>

              <div>
                <h3>PARTICIPANT</h3>

                <p>
                  Browse events, submit applications, manage
                  registrations and maintain a personal profile.
                </p>
              </div>
            </div>

            <div className="role-item" data-reveal>
              <span>02</span>

              <div>
                <h3>ORGANIZER</h3>

                <p>
                  Create events and manage event information
                  after account approval by an administrator.
                </p>
              </div>
            </div>

            <div className="role-item" data-reveal>
              <span>03</span>

              <div>
                <h3>ADMINISTRATOR</h3>

                <p>
                  Review users, approve organizers and inspect
                  administrative activity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AUTH */}

      <section
        className="event-section event-auth"
        data-section="AUTHENTICATION"
      >
        <div className="event-section-number" data-reveal>
          04 // AUTHENTICATION & REGISTRATION
        </div>

        <div className="event-section-heading">
          <h2 data-reveal>
            ACCOUNT CREATION
            <br />
            <span>WITH PURPOSE.</span>
          </h2>

          <p data-reveal>
            Authentication uses JWT-based sessions while the
            registration flow collects different information
            depending on the selected account type.
          </p>
        </div>

        <div className="auth-grid">
          <figure
            className="event-screen auth-login"
            data-reveal
          >
            <div className="event-window-bar">
              <div>
                <span />
                <span />
                <span />
              </div>

              <span>LOGIN.HTML</span>
            </div>

            <img
              src="/projects/event-platform/login.png"
              alt="Event platform login screen"
              loading="lazy"
            />

            <figcaption>
              <span>01</span>
              <span>AUTHENTICATION</span>
            </figcaption>
          </figure>

          <figure
            className="event-screen"
            data-reveal
          >
            <div className="event-window-bar">
              <div>
                <span />
                <span />
                <span />
              </div>

              <span>REGISTER PARTICIPANT</span>
            </div>

            <img
              src="/projects/event-platform/participant-registration.png"
              alt="Participant registration form"
              loading="lazy"
            />

            <figcaption>
              <span>02</span>
              <span>PARTICIPANT</span>
            </figcaption>
          </figure>

          <figure
            className="event-screen"
            data-reveal
          >
            <div className="event-window-bar">
              <div>
                <span />
                <span />
                <span />
              </div>

              <span>REGISTER ORGANIZER</span>
            </div>

            <img
              src="/projects/event-platform/organizer-registration.png"
              alt="Organizer registration form"
              loading="lazy"
            />

            <figcaption>
              <span>03</span>
              <span>ORGANIZER</span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* EVENT DISCOVERY */}

      <section
        className="event-section"
        data-section="EVENT SYSTEM"
      >
        <div className="event-section-number" data-reveal>
          05 // EVENT DISCOVERY
        </div>

        <div className="event-section-heading">
          <h2 data-reveal>
            FIND.
            <br />
            FILTER.
            <br />
            <span>JOIN.</span>
          </h2>

          <p data-reveal>
            Events can be searched and filtered while individual
            event views expose the information required before
            applying or interacting with the event.
          </p>
        </div>

        <figure
          className="event-screen event-large-screen"
          data-reveal
        >
          <div className="event-window-bar">
            <div>
              <span />
              <span />
              <span />
            </div>

            <span>EVENT BROWSER</span>
          </div>

          <img
            src="/projects/event-platform/events.png"
            alt="Event browser with search and filtering"
            loading="lazy"
          />

          <figcaption>
            <span>SEARCH · YEAR · TAG · ORGANIZER</span>
            <span>EVENT DISCOVERY</span>
          </figcaption>
        </figure>

        <div className="event-detail-layout">
          <div className="event-detail-copy" data-reveal>
            <span className="event-command">
              &gt; EVENT_DETAIL
            </span>

            <h3>
              EVERYTHING IN
              <br />
              ONE VIEW.
            </h3>

            <p>
              Individual event views combine imagery,
              descriptions, date and location information,
              capacity, organizer information, tags and
              community interaction.
            </p>
          </div>

          <figure
            className="event-screen"
            data-reveal
          >
            <div className="event-window-bar">
              <div>
                <span />
                <span />
                <span />
              </div>

              <span>EVENT DETAILS</span>
            </div>

            <img
              src="/projects/event-platform/event-details.png"
              alt="Detailed event information modal"
              loading="lazy"
            />
          </figure>
        </div>
      </section>

      {/* EVENT MANAGEMENT */}

      <section
        className="event-section"
        data-section="MANAGEMENT"
      >
        <div className="event-section-number" data-reveal>
          06 // EVENT MANAGEMENT
        </div>

        <div className="event-section-heading">
          <h2 data-reveal>
            CREATE AND
            <br />
            <span>MANAGE.</span>
          </h2>

          <p data-reveal>
            Approved organizers gain access to event creation
            tools connected directly to the platform backend
            and database.
          </p>
        </div>

        <div className="management-layout">
          <figure
            className="event-screen"
            data-reveal
          >
            <div className="event-window-bar">
              <div>
                <span />
                <span />
                <span />
              </div>

              <span>CREATE EVENT</span>
            </div>

            <img
              src="/projects/event-platform/create-event.png"
              alt="Create event form"
              loading="lazy"
            />
          </figure>

          <div className="management-features">
            <div data-reveal>
              <span>01</span>
              <h3>EVENT DATA</h3>
              <p>
                Title, description, date, time and location
                are submitted through the event creation flow.
              </p>
            </div>

            <div data-reveal>
              <span>02</span>
              <h3>MEDIA & METADATA</h3>
              <p>
                Events can contain supporting imagery and
                classification data used throughout the
                discovery interface.
              </p>
            </div>

            <div data-reveal>
              <span>03</span>
              <h3>PERSISTENCE</h3>
              <p>
                Submitted event information is processed by
                the API and stored in SQL Server.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ADMIN */}

      <section
        className="event-section event-admin"
        data-section="ADMINISTRATION"
      >
        <div className="event-section-number" data-reveal>
          07 // ADMINISTRATION
        </div>

        <div className="event-section-heading">
          <div>
            <span className="event-command" data-reveal>
              &gt; ADMIN_CONTROL
            </span>

            <h2 data-reveal>
              CONTROL
              <br />
              <span>LAYER.</span>
            </h2>
          </div>

          <p data-reveal>
            Administrative tools provide oversight of the
            platform's users and organizer approval process,
            with an audit trail for administrative actions.
          </p>
        </div>

        <div className="admin-showcase">
          <figure
            className="event-screen admin-main"
            data-reveal
          >
            <div className="event-window-bar">
              <div>
                <span />
                <span />
                <span />
              </div>

              <span>USER MANAGEMENT</span>
            </div>

            <img
              src="/projects/event-platform/admin-users.png"
              alt="Administrator user management dashboard"
              loading="lazy"
            />

            <figcaption>
              <span>01 / USERS</span>
              <span>ADMIN PANEL</span>
            </figcaption>
          </figure>

          <figure
            className="event-screen"
            data-reveal
          >
            <div className="event-window-bar">
              <div>
                <span />
                <span />
                <span />
              </div>

              <span>ORGANIZER APPROVAL</span>
            </div>

            <img
              src="/projects/event-platform/admin-pending-organizers.png"
              alt="Pending organizer approval dashboard"
              loading="lazy"
            />

            <figcaption>
              <span>02 / APPROVAL</span>
              <span>ADMIN PANEL</span>
            </figcaption>
          </figure>

          <figure
            className="event-screen"
            data-reveal
          >
            <div className="event-window-bar">
              <div>
                <span />
                <span />
                <span />
              </div>

              <span>AUDIT LOG</span>
            </div>

            <img
              src="/projects/event-platform/admin-audit.png"
              alt="Administrative audit log"
              loading="lazy"
            />

            <figcaption>
              <span>03 / AUDIT</span>
              <span>ADMIN PANEL</span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* DATABASE / API */}

      <section
        className="event-section event-backend"
        data-section="BACKEND"
      >
        <div className="event-section-number" data-reveal>
          08 // BACKEND & DATA
        </div>

        <div className="backend-intro">
          <h2 data-reveal>
            MORE THAN
            <br />
            THE <span>INTERFACE.</span>
          </h2>

          <p data-reveal>
            The visible website is backed by a REST API,
            authentication logic, permission checks, file
            handling and persistent relational data.
          </p>
        </div>

        <div className="backend-terminal" data-reveal>
          <div className="terminal-top">
            <span>system_architecture.txt</span>
            <span>● ONLINE</span>
          </div>

          <div className="terminal-content">
            <div>
              <span className="terminal-key">
                frontend
              </span>
              <span>HTML / CSS / JavaScript</span>
            </div>

            <div>
              <span className="terminal-key">
                server
              </span>
              <span>Node.js / Express</span>
            </div>

            <div>
              <span className="terminal-key">
                protocol
              </span>
              <span>REST / JSON</span>
            </div>

            <div>
              <span className="terminal-key">
                authentication
              </span>
              <span>JWT</span>
            </div>

            <div>
              <span className="terminal-key">
                uploads
              </span>
              <span>Multer</span>
            </div>

            <div>
              <span className="terminal-key">
                database
              </span>
              <span>Microsoft SQL Server</span>
            </div>

            <div>
              <span className="terminal-key">
                authorization
              </span>
              <span>
                Participant / Organizer / Administrator
              </span>
            </div>

            <div>
              <span className="terminal-key">
                status
              </span>
              <span className="terminal-success">
                APPLICATION CONNECTED_
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}

      <section
        className="event-section"
        data-section="FEATURES"
      >
        <div className="event-section-number" data-reveal>
          09 // KEY FEATURES
        </div>

        <div className="feature-heading">
          <h2 data-reveal>
            SYSTEM
            <br />
            <span>CAPABILITIES.</span>
          </h2>
        </div>

        <div className="feature-grid">
          {features.map((feature, index) => (
            <div className="feature-item" key={feature} data-reveal>
              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

              <strong>{feature}</strong>
            </div>
          ))}
        </div>
      </section>

      {/* PARTICIPANT EXPERIENCE */}

      <section
        className="event-section"
        data-section="FINAL SYSTEM"
      >
        <div className="event-section-number" data-reveal>
          10 // FINAL SYSTEM
        </div>

        <div className="event-section-heading">
          <h2 data-reveal>
            FROM ACCOUNT
            <br />
            TO <span>EVENT.</span>
          </h2>

          <p data-reveal>
            The final platform connects account management,
            event discovery and registrations into a single
            working system.
          </p>
        </div>

        <div className="final-system-grid">
          <figure
            className="event-screen"
            data-reveal
          >
            <div className="event-window-bar">
              <div>
                <span />
                <span />
                <span />
              </div>

              <span>PROFILE</span>
            </div>

            <img
              src="/projects/event-platform/profile.png"
              alt="Participant profile"
              loading="lazy"
            />

            <figcaption>
              <span>01 / PROFILE</span>
              <span>ACCOUNT</span>
            </figcaption>
          </figure>

          <figure
            className="event-screen final-offset"
            data-reveal
          >
            <div className="event-window-bar">
              <div>
                <span />
                <span />
                <span />
              </div>

              <span>REGISTRATIONS</span>
            </div>

            <img
              src="/projects/event-platform/registrations.png"
              alt="Participant event registrations"
              loading="lazy"
            />

            <figcaption>
              <span>02 / REGISTRATIONS</span>
              <span>PARTICIPANT</span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* END */}

      <section
        className="event-ending"
        data-section="END"
      >
        <span className="event-command" data-reveal>
          &gt; PROJECT_COMPLETE
        </span>

        <h2 data-reveal>
          EVENT
          <br />
          MANAGEMENT
          <br />
          <strong>PLATFORM.</strong>
        </h2>

        <div className="event-ending-meta" data-reveal>
          <span>FULL-STACK DEVELOPMENT</span>
          <span>NODE.JS / SQL SERVER</span>
          <span>2026</span>
        </div>
      </section>

      {/* NEXT PROJECT */}
<section className="next-project">
  <Link to="/">← ALL PROJECTS</Link>

  <div>
    <span>NEXT PROJECT</span>
    <Link to="/projects/red-fox">
      RED FOX SOCIETY →
    </Link>
  </div>
</section>
    </main>
  );
}

export default EventPlatform;