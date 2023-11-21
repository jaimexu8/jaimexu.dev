import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-content px-5 py-2">
        <div className="copyright">
          <p>Copyright © 2023 Jaime Xu. All rights reserved.</p>
        </div>
        <div className="footer-links min-w-fit">
          <a
            href="https://github.com/jaimexu8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} style={{ color: "#60f463" }} />
          </a>
          <a
            href="https://linkedin.com/in/jaimexu8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} style={{ color: "#60f463" }} />
          </a>
          <a
            href="mailto:jaimexu8@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} style={{ color: "#60f463" }} />
          </a>
        </div>
      </div>
    </div>
  );
}
