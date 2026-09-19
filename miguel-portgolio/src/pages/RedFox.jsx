import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./RedFox.css";

const brandPages = {
  cover: "/projects/red-fox/01-cover.png",
  identity: "/projects/red-fox/02-primary-identity.png",
  mark: "/projects/red-fox/03-primary-mark.png",
  submarks: "/projects/red-fox/04-submarks.png",
  clearSpace: "/projects/red-fox/05-clear-space.png",
  minimumSize: "/projects/red-fox/06-minimum-size.png",
  page7: "/projects/red-fox/07-page.png",
  page8: "/projects/red-fox/08-page.png",
  page9: "/projects/red-fox/09-page.png",
  page10: "/projects/red-fox/10-page.png",
};

function RedFox() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("identity");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;

      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress =
        scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

      setScrollProgress(progress);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(".fox-case [data-reveal]");

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
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll(
      ".fox-case [data-section]",
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio,
          );

        if (visible.length > 0) {
          setActiveSection(
            visible[0].target.dataset.section || "identity",
          );
        }
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0, 0.2, 0.5, 0.8],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const formatSection = (section) =>
    section.replaceAll("-", " ").toUpperCase();

  return (
    <main className="fox-case">
      {/* =========================
          PROGRESS
      ========================== */}

      <div className="fox-progress">
        <div
          className="fox-progress-bar"
          style={{
            transform: `scaleX(${scrollProgress / 100})`,
          }}
        />
      </div>

      {/* =========================
          NAV
      ========================== */}

      <nav className="fox-nav">
        <div className="fox-nav-inner">
          <Link to="/" className="fox-logo">
            MS
          </Link>

          <div className="fox-nav-section">
            <span className="fox-nav-dot" />
            <span>{formatSection(activeSection)}</span>
          </div>

          <Link to="/" className="fox-back">
            ← BACK TO PORTFOLIO
          </Link>
        </div>
      </nav>

      {/* =========================
          HERO
      ========================== */}

      <header
        className="fox-hero"
        data-section="identity"
      >
        <div className="fox-hero-top">
          <div className="fox-project-id">
            <span>PROJECT</span>
            <strong>03</strong>
          </div>

          <div className="fox-hero-meta">
            <span>BRAND IDENTITY</span>
            <span>VISUAL DESIGN</span>
          </div>
        </div>

        <div className="fox-title-wrap" data-reveal>
          <p className="fox-eyebrow">
            IDENTITY / LOGO SYSTEM / BRAND GUIDELINES
          </p>

          <h1 className="fox-hero-title">
            THE RED FOX
            <span>SOCIETY.</span>
          </h1>
        </div>

        <div className="fox-hero-bottom" data-reveal>
          <p>
            A complete visual identity system built around a
            distinctive fox mark, supported by logo variations,
            spacing rules, sizing guidelines and consistent brand
            applications.
          </p>

          <div className="fox-tools">
            <span>Illustrator</span>
            <span>Logo Design</span>
            <span>Brand Identity</span>
          </div>
        </div>

        <div className="fox-cover" data-reveal>
          <img
            src={brandPages.cover}
            alt="The Red Fox Society brand identity manual cover"
          />

          <div className="fox-cover-tag">
            <span>01</span>
            <span>BRAND MANUAL</span>
          </div>
        </div>
      </header>

      {/* =========================
          OVERVIEW
      ========================== */}

      <section
        className="fox-section fox-overview"
        data-section="overview"
      >
        <div className="fox-section-label">
          01 / OVERVIEW
        </div>

        <div className="fox-overview-grid">
          <div data-reveal>
            <h2>
              BUILDING A BRAND
              <br />
              <span>FROM THE MARK UP.</span>
            </h2>
          </div>

          <div className="fox-overview-copy" data-reveal>
            <p>
              The project explores the development of a consistent
              brand identity for The Red Fox Society. The final
              manual establishes the core logo system and defines
              how the identity should be reproduced across
              different formats.
            </p>

            <div className="fox-project-details">
              <div>
                <span>TYPE</span>
                <strong>Brand Identity</strong>
              </div>

              <div>
                <span>DELIVERABLE</span>
                <strong>Identity Manual</strong>
              </div>

              <div>
                <span>DISCIPLINE</span>
                <strong>Graphic Design</strong>
              </div>

              <div>
                <span>TOOLS</span>
                <strong>Adobe Illustrator</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          PRIMARY IDENTITY
      ========================== */}

      <section
        className="fox-section"
        data-section="primary-identity"
      >
        <div className="fox-section-heading">
          <div>
            <div className="fox-section-label">
              02 / PRIMARY IDENTITY
            </div>

            <h2>
              THE CORE
              <span>IDENTITY.</span>
            </h2>
          </div>

          <p>
            The primary identity establishes the visual foundation
            of the brand and introduces the relationship between the
            fox symbol and the accompanying wordmark.
          </p>
        </div>

        <div className="fox-manual-large" data-reveal>
          <img
            src={brandPages.identity}
            alt="The Red Fox Society primary brand identity"
            loading="lazy"
          />
        </div>
      </section>

      {/* =========================
          PRIMARY MARK
      ========================== */}

      <section
        className="fox-section fox-mark-section"
        data-section="logo-system"
      >
        <div className="fox-section-heading">
          <div>
            <div className="fox-section-label">
              03 / LOGO SYSTEM
            </div>

            <h2>
              ONE MARK.
              <span>MULTIPLE FORMS.</span>
            </h2>
          </div>

          <p>
            The identity expands beyond a single lockup, allowing
            the brand to adapt to different placements while
            remaining visually recognisable.
          </p>
        </div>

        <div className="fox-mark-grid">
          <div className="fox-manual-card" data-reveal>
            <div className="fox-card-label">
              <span>01</span>
              <span>PRIMARY MARK</span>
            </div>

            <img
              src={brandPages.mark}
              alt="The Red Fox Society primary mark"
              loading="lazy"
            />
          </div>

          <div className="fox-manual-card" data-reveal>
            <div className="fox-card-label">
              <span>02</span>
              <span>SUBMARKS</span>
            </div>

            <img
              src={brandPages.submarks}
              alt="The Red Fox Society submarks"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* =========================
          CLEAR SPACE
      ========================== */}

      <section
        className="fox-section"
        data-section="clear-space"
      >
        <div className="fox-rule-layout">
          <div className="fox-rule-copy" data-reveal>
            <div className="fox-section-label">
              04 / CLEAR SPACE
            </div>

            <h2>
              GIVE THE MARK
              <span>ROOM TO BREATHE.</span>
            </h2>

            <p>
              A defined exclusion zone protects the logo from
              surrounding graphics and typography, preserving
              clarity and visual impact wherever the identity is
              used.
            </p>

            <div className="fox-rule-number">
              <span>RULE</span>
              <strong>01</strong>
            </div>
          </div>

          <div className="fox-manual-large" data-reveal>
            <img
              src={brandPages.clearSpace}
              alt="The Red Fox Society logo clear space guidelines"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* =========================
          MINIMUM SIZE
      ========================== */}

      <section
        className="fox-section"
        data-section="minimum-size"
      >
        <div className="fox-section-heading">
          <div>
            <div className="fox-section-label">
              05 / MINIMUM SIZE
            </div>

            <h2>
              DESIGNED TO
              <span>STAY LEGIBLE.</span>
            </h2>
          </div>

          <p>
            Minimum reproduction sizes ensure that the identity
            remains recognisable and readable across both digital
            and physical applications.
          </p>
        </div>

        <div className="fox-size-layout">
          <div className="fox-size-stats" data-reveal>
            <article>
              <span>DIGITAL</span>

              <strong>
                80
                <small>PX</small>
              </strong>

              <p>Minimum digital reproduction guideline.</p>
            </article>

            <article>
              <span>PRINT</span>

              <strong>
                12
                <small>MM</small>
              </strong>

              <p>Minimum print reproduction guideline.</p>
            </article>
          </div>

          <div className="fox-manual-large" data-reveal>
            <img
              src={brandPages.minimumSize}
              alt="The Red Fox Society minimum logo sizing guidelines"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* =========================
          BRAND SYSTEM
      ========================== */}

      <section
        className="fox-section"
        data-section="brand-system"
      >
        <div className="fox-section-heading">
          <div>
            <div className="fox-section-label">
              06 / BRAND SYSTEM
            </div>

            <h2>
              FROM LOGO
              <span>TO SYSTEM.</span>
            </h2>
          </div>

          <p>
            The remaining manual extends the core identity into a
            broader set of visual rules and applications, creating
            a repeatable system rather than an isolated logo.
          </p>
        </div>

        <div className="fox-gallery">
          <figure
            className="fox-gallery-item fox-gallery-wide"
            data-reveal
          >
            <img
              src={brandPages.page7}
              alt="The Red Fox Society brand guideline page 7"
              loading="lazy"
            />

            <figcaption>
              <span>07</span>
              <span>BRAND SYSTEM</span>
            </figcaption>
          </figure>

          <figure className="fox-gallery-item" data-reveal>
            <img
              src={brandPages.page8}
              alt="The Red Fox Society brand guideline page 8"
              loading="lazy"
            />

            <figcaption>
              <span>08</span>
              <span>IDENTITY GUIDELINES</span>
            </figcaption>
          </figure>

          <figure className="fox-gallery-item" data-reveal>
            <img
              src={brandPages.page9}
              alt="The Red Fox Society brand guideline page 9"
              loading="lazy"
            />

            <figcaption>
              <span>09</span>
              <span>BRAND APPLICATION</span>
            </figcaption>
          </figure>

          <figure
            className="fox-gallery-item fox-gallery-wide"
            data-reveal
          >
            <img
              src={brandPages.page10}
              alt="The Red Fox Society brand guideline page 10"
              loading="lazy"
            />

            <figcaption>
              <span>10</span>
              <span>FINAL SYSTEM</span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* =========================
          FINAL
      ========================== */}

      <section
        className="fox-final"
        data-section="final"
      >
        <div className="fox-final-copy" data-reveal>
          <div className="fox-section-label">
            07 / FINAL IDENTITY
          </div>

          <h2>
            DISTINCT.
            <br />
            CONSISTENT.
            <br />
            <span>RECOGNISABLE.</span>
          </h2>

          <p>
            A compact identity manual that turns the Red Fox mark
            into a controlled visual system designed for consistent
            reproduction across multiple contexts.
          </p>
        </div>

        <div className="fox-final-art" data-reveal>
          <img
            src={brandPages.cover}
            alt="The Red Fox Society final identity"
            loading="lazy"
          />
        </div>
      </section>

      {/* =========================
          NEXT
      ========================== */}

      <footer className="fox-next">
        <Link to="/projects/event-platform">
          <span>← PREVIOUS PROJECT</span>
          <strong>EVENT PLATFORM</strong>
        </Link>

        <Link to="/">
          <span>INDEX</span>
          <strong>ALL PROJECTS</strong>
        </Link>

        <div className="fox-next-disabled">
          <span>NEXT PROJECT →</span>
          <strong>INSIDEOUT</strong>
        </div>
      </footer>
    </main>
  );
}

export default RedFox;