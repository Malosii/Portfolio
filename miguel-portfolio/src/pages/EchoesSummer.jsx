import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./EchoesSummer.css";

function EchoesSummer() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("OVERVIEW");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress =
        documentHeight > 0 ? (scrollTop / documentHeight) * 100 : 0;

      setScrollProgress(Math.min(progress, 100));
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const revealElements = document.querySelectorAll("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("[data-section]");

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          const sectionName =
            visibleSections[0].target.getAttribute("data-section");

          if (sectionName) {
            setActiveSection(sectionName);
          }
        }
      },
      {
        threshold: [0.15, 0.3, 0.5],
        rootMargin: "-20% 0px -55% 0px",
      }
    );

    sections.forEach((section) => sectionObserver.observe(section));

    return () => sectionObserver.disconnect();
  }, []);

  return (
    <main className="echoes-page">
      {/* PROGRESS */}
      <div className="case-progress" aria-hidden="true">
        <div
          className="case-progress-fill"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* NAVIGATION */}
      <nav className="project-nav">
        <Link to="/" className="project-logo">
          MS<span>_</span>
        </Link>

        <div className="project-nav-status">
          <span className="nav-status-dot" />
          <span>{activeSection}</span>
        </div>

        <Link to="/" className="back-link">
          <span>←</span>
          BACK TO PORTFOLIO
        </Link>
      </nav>

      {/* HERO */}
      <section className="echoes-hero" data-section="INTRO">
        <div className="echoes-hero-meta" data-reveal>
          <span>PROJECT 01</span>
          <span>UI / UX DESIGN</span>
          <span>2026</span>
        </div>

        <div className="echoes-title">
          <h1 data-reveal>
            ECHOES
            <br />
            <span>SUMMER '26</span>
          </h1>

          <p data-reveal>
            A responsive digital experience designed for an electronic music
            festival.
          </p>
        </div>

        <div className="echoes-tags" data-reveal>
          <span>FIGMA</span>
          <span>UI / UX</span>
          <span>RESPONSIVE DESIGN</span>
          <span>PROTOTYPING</span>
        </div>

        <figure
          className="echoes-hero-image project-screen"
          data-reveal
        >
          <img
            src="/projects/echoes/desktop-home.png"
            alt="Echoes Summer desktop homepage"
          />

          <figcaption>
            <span>01 / HOME</span>
            <span>DESKTOP</span>
          </figcaption>
        </figure>
      </section>

      {/* OVERVIEW */}
      <section
        className="case-section"
        data-section="OVERVIEW"
      >
        <div className="case-label" data-reveal>
          01 // OVERVIEW
        </div>

        <div className="overview-grid">
          <h2 data-reveal>
            A DIGITAL FESTIVAL
            <br />
            EXPERIENCE BUILT
            <br />
            AROUND DISCOVERY,
            <br />
            TICKETING AND
            <br />
            PERSONALIZATION.
          </h2>

          <div className="overview-copy" data-reveal>
            <p>
              Echoes Summer is an electronic music festival website designed to
              centralize lineup information, schedules, practical event
              information and ticket purchasing within a single digital
              experience.
            </p>

            <p>
              The platform also includes a member area where users can access
              their tickets and create a personalized festival schedule.
            </p>

            <div className="project-details">
              <div>
                <span>ROLE</span>
                <strong>UI / UX Designer</strong>
              </div>

              <div>
                <span>TYPE</span>
                <strong>Academic Project</strong>
              </div>

              <div>
                <span>TOOLS</span>
                <strong>Figma</strong>
              </div>

              <div>
                <span>PLATFORMS</span>
                <strong>Desktop · Mobile</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STRUCTURE */}
      <section
        className="case-section"
        data-section="STRUCTURE"
      >
        <div className="case-label" data-reveal>
          02 // STRUCTURE
        </div>

        <div className="section-intro">
          <h2 data-reveal>
            FROM FESTIVAL DISCOVERY
            <br />
            TO TICKET MANAGEMENT.
          </h2>

          <p data-reveal>
            The experience was structured around three primary areas: public
            festival information, commerce and the member experience.
          </p>
        </div>

        <div className="site-architecture" data-reveal>
          <div className="architecture-column">
            <span>01</span>
            <h3>PUBLIC</h3>

            <ul>
              <li>Home</li>
              <li>Lineup</li>
              <li>Program</li>
              <li>Info & Map</li>
              <li>Gallery</li>
            </ul>
          </div>

          <div className="architecture-column">
            <span>02</span>
            <h3>COMMERCE</h3>

            <ul>
              <li>Tickets</li>
              <li>Checkout</li>
              <li>Payment</li>
              <li>Confirmation</li>
            </ul>
          </div>

          <div className="architecture-column">
            <span>03</span>
            <h3>MEMBER</h3>

            <ul>
              <li>Login</li>
              <li>Profile</li>
              <li>Wallet</li>
              <li>My Lineup</li>
            </ul>
          </div>
        </div>

        <figure
          className="architecture-image project-screen"
          data-reveal
        >
          <img
            src="/projects/echoes/sitemap.png"
            alt="Echoes Summer information architecture"
            loading="lazy"
          />

          <figcaption>
            <span>INFORMATION ARCHITECTURE</span>
            <span>USER FLOW</span>
          </figcaption>
        </figure>
      </section>

      {/* VISUAL DIRECTION */}
      <section
        className="case-section visual-direction"
        data-section="VISUAL SYSTEM"
      >
        <div className="case-label" data-reveal>
          03 // VISUAL DIRECTION
        </div>

        <div className="section-intro">
          <h2 data-reveal>
            DARK.
            <br />
            ENERGETIC.
            <br />
            MUSIC-DRIVEN.
          </h2>

          <p data-reveal>
            A dark interface paired with high-energy orange and purple accents
            creates a visual language inspired by electronic music and live
            festival environments.
          </p>
        </div>

        <div className="design-system" data-reveal>
          <div className="type-system">
            <span className="design-label">TYPOGRAPHY</span>

            <div className="type-example echoes-oswald">
              Aa

              <div>
                <strong>OSWALD</strong>
                <small>DISPLAY / HEADINGS</small>
              </div>
            </div>

            <div className="type-example echoes-space">
              Aa

              <div>
                <strong>SPACE GROTESK</strong>
                <small>INTERFACE / BODY</small>
              </div>
            </div>
          </div>

          <div className="colour-system">
            <span className="design-label">COLOUR SYSTEM</span>

            <div className="colour colour-black">
              <span>FLUX BLACK</span>
              <span>#0F0F0F</span>
            </div>

            <div className="colour colour-carbon">
              <span>CARBON</span>
              <span>#1A1A1A</span>
            </div>

            <div className="colour colour-orange">
              <span>NEON ORANGE</span>
              <span>#FF3D00</span>
            </div>

            <div className="colour colour-purple">
              <span>ELECTRIC</span>
              <span>#7000FF</span>
            </div>

            <div className="colour colour-white">
              <span>WHITE</span>
              <span>#FFFFFF</span>
            </div>
          </div>
        </div>
      </section>

      {/* WIREFRAMES */}
      <section
        className="case-section"
        data-section="WIREFRAMES"
      >
        <div className="case-label" data-reveal>
          04 // WIREFRAMES
        </div>

        <div className="section-intro">
          <h2 data-reveal>
            BUILDING THE EXPERIENCE
            <br />
            BEFORE THE VISUAL SYSTEM.
          </h2>

          <p data-reveal>
            Early wireframes established page hierarchy, navigation and the
            main user flows before the final festival identity was applied.
          </p>
        </div>

        <div className="wireframe-grid">
          <figure
            className="wireframe-card project-screen"
            data-reveal
          >
            <img
              src="/projects/echoes/wireframe-home.png"
              alt="Echoes Summer homepage wireframe"
              loading="lazy"
            />

            <figcaption>
              <span>01 / HOME</span>
              <span>WIREFRAME</span>
            </figcaption>
          </figure>

          <figure
            className="wireframe-card project-screen"
            data-reveal
          >
            <img
              src="/projects/echoes/wireframe-lineup.png"
              alt="Echoes Summer lineup wireframe"
              loading="lazy"
            />

            <figcaption>
              <span>02 / LINEUP</span>
              <span>WIREFRAME</span>
            </figcaption>
          </figure>

          <figure
            className="wireframe-card project-screen"
            data-reveal
          >
            <img
              src="/projects/echoes/wireframe-program.png"
              alt="Echoes Summer program wireframe"
              loading="lazy"
            />

            <figcaption>
              <span>03 / PROGRAM</span>
              <span>WIREFRAME</span>
            </figcaption>
          </figure>

          <figure
            className="wireframe-card project-screen"
            data-reveal
          >
            <img
              src="/projects/echoes/wireframe-tickets.png"
              alt="Echoes Summer tickets wireframe"
              loading="lazy"
            />

            <figcaption>
              <span>04 / TICKETS</span>
              <span>WIREFRAME</span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* DESKTOP */}
      <section
        className="case-section"
        data-section="DESKTOP"
      >
        <div className="case-label" data-reveal>
          05 // DESKTOP EXPERIENCE
        </div>

        <div className="section-intro">
          <h2 data-reveal>
            DISCOVER.
            <br />
            PLAN.
            <br />
            EXPERIENCE.
          </h2>

          <p data-reveal>
            The desktop experience combines festival discovery, artist
            exploration and schedule planning within a consistent interface.
          </p>
        </div>

        <div className="desktop-showcase">
          <figure
            className="desktop-feature project-screen"
            data-reveal
          >
            <div className="screen-label">
              <span>01</span>
              <span>HOME</span>
            </div>

            <img
              src="/projects/echoes/desktop-home.png"
              alt="Echoes Summer desktop homepage"
              loading="lazy"
            />
          </figure>

          <div className="desktop-pair">
            <figure className="project-screen" data-reveal>
              <div className="screen-label">
                <span>02</span>
                <span>LINEUP</span>
              </div>

              <img
                src="/projects/echoes/desktop-lineup.png"
                alt="Echoes Summer desktop lineup"
                loading="lazy"
              />
            </figure>

            <figure
              className="desktop-offset project-screen"
              data-reveal
            >
              <div className="screen-label">
                <span>03</span>
                <span>ARTIST DETAIL</span>
              </div>

              <img
                src="/projects/echoes/desktop-artist.png"
                alt="Echoes Summer artist detail page"
                loading="lazy"
              />
            </figure>
          </div>

          <figure
            className="desktop-feature desktop-program project-screen"
            data-reveal
          >
            <div className="screen-label">
              <span>04</span>
              <span>PROGRAM</span>
            </div>

            <img
              src="/projects/echoes/desktop-program.png"
              alt="Echoes Summer desktop festival program"
              loading="lazy"
            />
          </figure>
        </div>
      </section>

      {/* TICKETING */}
      <section
        className="case-section ticketing-section"
        data-section="TICKETING"
      >
        <div className="case-label" data-reveal>
          06 // TICKETING
        </div>

        <div className="section-intro">
          <h2 data-reveal>
            FROM SELECTION
            <br />
            TO ENTRY.
          </h2>

          <p data-reveal>
            The ticket flow takes the attendee from choosing a pass through
            payment and into a digital ticket ready for event entry.
          </p>
        </div>

        <div className="flow-grid">
          <div className="flow-step" data-reveal>
            <div className="flow-heading">
              <span>01</span>
              <h3>SELECT</h3>
            </div>

            <div className="mobile-device">
              <img
                src="/projects/echoes/mobile-tickets.png"
                alt="Echoes Summer mobile ticket selection"
                loading="lazy"
              />
            </div>
          </div>

          <div className="flow-step flow-offset" data-reveal>
            <div className="flow-heading">
              <span>02</span>
              <h3>PAY</h3>
            </div>

            <div className="mobile-device">
              <img
                src="/projects/echoes/mobile-payment.png"
                alt="Echoes Summer mobile payment screen"
                loading="lazy"
              />
            </div>
          </div>

          <div className="flow-step" data-reveal>
            <div className="flow-heading">
              <span>03</span>
              <h3>ENTER</h3>
            </div>

            <div className="mobile-device">
              <img
                src="/projects/echoes/mobile-success.png"
                alt="Echoes Summer ticket confirmation"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE */}
      <section
        className="case-section"
        data-section="MOBILE"
      >
        <div className="case-label" data-reveal>
          07 // MOBILE EXPERIENCE
        </div>

        <div className="section-intro">
          <h2 data-reveal>
            THE FESTIVAL,
            <br />
            IN YOUR POCKET.
          </h2>

          <p data-reveal>
            The interface was adapted for mobile use so attendees can quickly
            discover artists, check set times and access important festival
            information while on the move.
          </p>
        </div>

        <div className="mobile-showcase">
          <figure data-reveal>
            <span>01 / HOME</span>

            <div className="mobile-device">
              <img
                src="/projects/echoes/mobile-home.png"
                alt="Echoes Summer mobile homepage"
                loading="lazy"
              />
            </div>
          </figure>

          <figure className="mobile-lower" data-reveal>
            <span>02 / LINEUP</span>

            <div className="mobile-device">
              <img
                src="/projects/echoes/mobile-lineup.png"
                alt="Echoes Summer mobile lineup"
                loading="lazy"
              />
            </div>
          </figure>

          <figure data-reveal>
            <span>03 / PROGRAM</span>

            <div className="mobile-device">
              <img
                src="/projects/echoes/mobile-program.png"
                alt="Echoes Summer mobile program"
                loading="lazy"
              />
            </div>
          </figure>
        </div>
      </section>

      {/* MEMBER */}
      <section
        className="case-section member-section"
        data-section="MEMBER AREA"
      >
        <div className="case-label" data-reveal>
          08 // MEMBER EXPERIENCE
        </div>

        <div className="section-intro">
          <h2 data-reveal>
            MORE THAN
            <br />
            A TICKET.
          </h2>

          <p data-reveal>
            The member area gives attendees a central place to access their
            profile, digital tickets and personalized festival schedule.
          </p>
        </div>

        <div className="mobile-showcase">
          <figure data-reveal>
            <span>01 / PROFILE</span>

            <div className="mobile-device">
              <img
                src="/projects/echoes/mobile-profile.png"
                alt="Echoes Summer member profile"
                loading="lazy"
              />
            </div>
          </figure>

          <figure className="mobile-lower" data-reveal>
            <span>02 / WALLET</span>

            <div className="mobile-device">
              <img
                src="/projects/echoes/mobile-wallet.png"
                alt="Echoes Summer digital ticket wallet"
                loading="lazy"
              />
            </div>
          </figure>

          <figure data-reveal>
            <span>03 / MY LINEUP</span>

            <div className="mobile-device">
              <img
                src="/projects/echoes/mobile-schedule.png"
                alt="Echoes Summer personalized festival schedule"
                loading="lazy"
              />
            </div>
          </figure>
        </div>
      </section>

      {/* END */}
      <section
        className="echoes-ending"
        data-section="END"
      >
        <span data-reveal>09 // END OF PROJECT</span>

        <h2 data-reveal>
          ECHOES
          <br />
          <strong>SUMMER '26</strong>
        </h2>

        <p data-reveal>
          Responsive festival experience
          <br />
          designed in Figma.
        </p>
      </section>

      {/* NEXT PROJECT */}
<section className="next-project">
  <Link to="/">← ALL PROJECTS</Link>

  <div>
    <span>NEXT PROJECT</span>
    <Link to="/projects/event-platform">
      EVENT PLATFORM →
    </Link>
  </div>
</section>
    </main>
  );
}

export default EchoesSummer;