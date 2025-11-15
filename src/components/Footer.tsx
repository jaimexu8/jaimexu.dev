import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="copyright">
          <p>© 2025 Jaime Xu. All rights reserved.</p>
        </div>
        <div className="footer-links">
          <a
            href="https://github.com/jaimexu8"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            aria-label="Visit GitHub profile"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://linkedin.com/in/jaimexu8"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            aria-label="Visit LinkedIn profile"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="mailto:jaimexu8@gmail.com"
            title="Email"
            aria-label="Send email"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>
    </div>
  );
};

