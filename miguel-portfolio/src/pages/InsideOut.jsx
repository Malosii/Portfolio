import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./InsideOut.css";

const assets = {
  cover: "/projects/insideout/01-cover.png",
  intro: "/projects/insideout/02-introduction.png",
  overview1: "/projects/insideout/03-program-overview-1.png",
  overview2: "/projects/insideout/04-program-overview-2.png",
  esports: "/projects/insideout/05-esports.png",
  robotics: "/projects/insideout/06-robotics.png",
  gameCreation: "/projects/insideout/07-game-creation-ai.png",
  contentCreation: "/projects/insideout/08-content-creation.png",
  entrepreneurship: "/projects/insideout/09-entrepreneurship.png",
  physical: "/projects/insideout/10-physical-activities.png",
  environment: "/projects/insideout/11-learning-environment.png",
  programmes: "/projects/insideout/12-programmes.png",
  page13: "/projects/insideout/13-page.png",
  page14: "/projects/insideout/14-page.png",
};

const activities = [
  {
    number: "01",
    title: "WORLD OF ESPORTS",
    image: assets.esports,
  },
  {
    number: "02",
    title: "ROBOTICS",
    image: assets.robotics,
  },
  {
    number: "03",
    title: "GAME CREATION & AI",
    image: assets.gameCreation,
  },
  {
    number: "04",
    title: "CONTENT CREATION",
    image: assets.contentCreation,
  },
  {
    number: "05",
    title: "ENTREPRENEURSHIP",
    image: assets.entrepreneurship,
  },
  {
    number: "06",
    title: "PHYSICAL ACTIVITY",
    image: assets.physical,
  },
];

function InsideOut() {
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] =
    useState("INTRODUCTION");

  useEffect(() => {
    const onScroll = () => {
      const max =
        document.documentElement.scrollHeight -
        window.innerHeight;

      setProgress(
        max > 0 ? (window.scrollY / max) * 100 : 0,
      );
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const elements =
      document.querySelectorAll(".io-case [data-reveal]");

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
        threshold: 0.1,
      },
    );

    elements.forEach((element) =>
      observer.observe(element),
    );

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sections =
      document.querySelectorAll("[data-io-section]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(
              entry.target.dataset.ioSection,
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
    <main className="io-case">
      {/* PROGRESS */}

      <div className="io-progress">
        <div
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* NAV */}

      <nav className="io-nav">
        <Link to="/" className="io-logo">
          MS_
        </Link>

        <div className="io-nav-status">
          <span />
          {activeSection}
        </div>

        <Link to="/" className="io-back">
          ← BACK TO PORTFOLIO
        </Link>
      </nav>

      {/* HERO */}

      <header
        className="io-hero"
        data-io-section="INTRODUCTION"
      >
        <div className="io-hero-meta">
          <span>PROJECT 04</span>
          <span>EDITORIAL / GRAPHIC DESIGN</span>
          <span>2026</span>
        </div>

        <div className="io-title" data-reveal>
          <p>SUMMER CAMP / EDITORIAL / VISUAL DESIGN</p>

          <h1>
            INSIDE
            <span>OUT.</span>
          </h1>
        </div>

        <div className="io-hero-description" data-reveal>
          <p>
            A high-energy promotional brochure for the
            InsideOut Summer Camp, presenting a programme
            built around gaming, technology, creativity,
            entrepreneurship and physical activity.
          </p>

          <div className="io-tags">
            <span>Editorial Design</span>
            <span>Graphic Design</span>
            <span>Layout</span>
          </div>
        </div>

        <div className="io-cover" data-reveal>
          <img
            src={assets.cover}
            alt="InsideOut Summer Camp brochure cover"
          />

          <div className="io-image-footer">
            <span>01 / COVER</span>
            <span>MORE THAN JUST GAMES</span>
          </div>
        </div>
      </header>

      {/* OVERVIEW */}

      <section
        className="io-section"
        data-io-section="OVERVIEW"
      >
        <div className="io-label">
          // 01 — OVERVIEW
        </div>

        <div className="io-overview">
          <div data-reveal>
            <h2>
              GAMING IS
              <span>JUST THE BEGINNING.</span>
            </h2>
          </div>

          <div className="io-overview-copy" data-reveal>
            <p>
              The brochure communicates a summer programme
              combining gaming with robotics, AI, digital
              creativity, entrepreneurship and physical
              activity.
            </p>

            <p>
              The visual direction needed to feel energetic
              and technology-driven while keeping a large
              amount of programme information structured and
              readable.
            </p>

            <div className="io-details">
              <div>
                <small>TYPE</small>
                <strong>Editorial Design</strong>
              </div>

              <div>
                <small>FORMAT</small>
                <strong>14 Page Brochure</strong>
              </div>

              <div>
                <small>PROJECT</small>
                <strong>InsideOut Summer Camp</strong>
              </div>

              <div>
                <small>YEAR</small>
                <strong>2026</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="io-full-page" data-reveal>
          <img
            src={assets.intro}
            alt="InsideOut brochure introduction"
            loading="lazy"
          />
        </div>
      </section>

      {/* EXPERIENCE */}

      <section
        className="io-section"
        data-io-section="EXPERIENCE"
      >
        <div className="io-section-head">
          <div>
            <div className="io-label">
              // 02 — THE EXPERIENCE
            </div>

            <h2>
              ONE CAMP.
              <span>MULTIPLE WORLDS.</span>
            </h2>
          </div>

          <p>
            The programme was divided into distinct
            experiences, giving each activity its own visual
            space while maintaining a consistent overall
            identity.
          </p>
        </div>

        <div className="io-double-pages">
          <figure data-reveal>
            <img
              src={assets.overview1}
              alt="InsideOut experience overview"
              loading="lazy"
            />
          </figure>

          <figure data-reveal>
            <img
              src={assets.overview2}
              alt="InsideOut programme overview"
              loading="lazy"
            />
          </figure>
        </div>
      </section>

      {/* CONTENT SYSTEM */}

      <section
        className="io-section"
        data-io-section="CONTENT SYSTEM"
      >
        <div className="io-section-head">
          <div>
            <div className="io-label">
              // 03 — CONTENT SYSTEM
            </div>

            <h2>
              SIX EXPERIENCES.
              <span>ONE LANGUAGE.</span>
            </h2>
          </div>

          <p>
            Each section uses the same visual framework while
            allowing photography, graphics and content to
            change according to the subject.
          </p>
        </div>

        <div className="io-activities">
          {activities.map((activity) => (
            <article
              className="io-activity"
              key={activity.title}
              data-reveal
            >
              <div className="io-activity-head">
                <span>{activity.number}</span>
                <strong>{activity.title}</strong>
              </div>

              <div className="io-activity-image">
                <img
                  src={activity.image}
                  alt={`InsideOut ${activity.title}`}
                  loading="lazy"
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* VISUAL DIRECTION */}

      <section
        className="io-visual-break"
        data-io-section="VISUAL DIRECTION"
      >
        <div className="io-visual-number">
          04
        </div>

        <div data-reveal>
          <p className="io-label">
            // VISUAL DIRECTION
          </p>

          <h2>
            DIGITAL.
            <br />
            ENERGETIC.
            <br />
            <span>YOUTH-FOCUSED.</span>
          </h2>
        </div>

        <div className="io-visual-copy" data-reveal>
          <p>
            Bright neon accents, oversized typography,
            high-contrast imagery and gaming-inspired graphic
            elements give the brochure a strong digital
            personality.
          </p>

          <div className="io-colours">
            <div className="io-swatch io-purple">
              PURPLE
            </div>

            <div className="io-swatch io-yellow">
              YELLOW
            </div>

            <div className="io-swatch io-dark">
              DARK
            </div>
          </div>
        </div>
      </section>

      {/* ENVIRONMENT */}

      <section
        className="io-section"
        data-io-section="ENVIRONMENT"
      >
        <div className="io-section-head">
          <div>
            <div className="io-label">
              // 05 — ENVIRONMENT
            </div>

            <h2>
              THE SPACE
              <span>BEHIND THE EXPERIENCE.</span>
            </h2>
          </div>

          <p>
            The brochure also introduces the learning
            environment, helping connect the programme's
            digital identity with the physical space where
            activities take place.
          </p>
        </div>

        <div className="io-full-page" data-reveal>
          <img
            src={assets.environment}
            alt="InsideOut learning environment"
            loading="lazy"
          />
        </div>
      </section>

      {/* PROGRAMMES */}

      <section
        className="io-section"
        data-io-section="PROGRAMMES"
      >
        <div className="io-section-head">
          <div>
            <div className="io-label">
              // 06 — PROGRAMMES
            </div>

            <h2>
              INFORMATION
              <span>WITHOUT THE NOISE.</span>
            </h2>
          </div>

          <p>
            Information-heavy sections shift toward a more
            structured layout so programme options remain
            easy to compare without losing the established
            visual identity.
          </p>
        </div>

        <div className="io-full-page" data-reveal>
          <img
            src={assets.programmes}
            alt="InsideOut programme options"
            loading="lazy"
          />
        </div>
      </section>

      {/* FINAL PAGES */}

      <section
        className="io-section"
        data-io-section="FINAL PAGES"
      >
        <div className="io-label">
          // 07 — FINAL BROCHURE
        </div>

        <div className="io-final-title" data-reveal>
          <h2>
            FROM COVER
            <span>TO CLOSE.</span>
          </h2>

          <p>
            The complete brochure combines promotional
            visuals, programme explanations and practical
            information into one consistent editorial
            system.
          </p>
        </div>

        <div className="io-final-grid">
          <figure data-reveal>
            <img
              src={assets.page13}
              alt="InsideOut brochure page 13"
              loading="lazy"
            />
          </figure>

          <figure data-reveal>
            <img
              src={assets.page14}
              alt="InsideOut brochure page 14"
              loading="lazy"
            />
          </figure>
        </div>
      </section>

      {/* NEXT PROJECT */}
<section className="next-project">
  <Link to="/">← ALL PROJECTS</Link>

  <div>
    <span>NEXT PROJECT</span>
    <Link to="/projects/cinema-database">
      CINEMA DATABASE →
    </Link>
  </div>
</section>
    </main>
  );
}

export default InsideOut;