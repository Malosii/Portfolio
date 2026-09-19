import { Link } from "react-router-dom";
import "../App.css";

function NotFound() {
  return (
    <main className="not-found">
      <div className="not-found-grid" />

      <div className="not-found-content">
        <span className="small-label">
          ERROR // 404
        </span>

        <h1>
          PAGE
          <br />
          NOT FOUND<span>.</span>
        </h1>

        <p>
          The page you're looking for doesn't exist
          or may have been moved.
        </p>

        <Link to="/" className="not-found-link">
          <span>RETURN HOME</span>
          <span>↗</span>
        </Link>
      </div>

      <div className="not-found-code">
        <span>STATUS</span>
        <strong>404</strong>
      </div>
    </main>
  );
}

export default NotFound;