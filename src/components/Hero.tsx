import { MutableRefObject, useState, useEffect } from "react";
import { RESUME_PATH } from "../constants";
import meImage from "../assets/me.jpeg";

interface HeroProps {
  sectionRef: MutableRefObject<HTMLElement | null>;
}

export const Hero = ({ sectionRef }: HeroProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Hi, I'm Jaime";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  const handleResumeClick = () => {
    window.open(RESUME_PATH, "_blank");
  };

  return (
    <section ref={sectionRef} className="fade-in-up">
      <div className="hero-content">
        <div className="hero-text">
          <h1>
            {displayedText}
            <span className="typing-cursor">{showCursor ? "|" : ""}</span>
          </h1>
          <p className="text-xl mb-6">
            I'm a Computer Science undergrad at Purdue University with a track
            in Software Engineering.
          </p>
          <ul className="text-lg mb-6 space-y-2">
            <li>
              <strong>Full stack:</strong> React.js, React Native, Next.js,
              Node.js, Express, PostgreSQL, MongoDB
            </li>
            <li>
              <strong>Languages:</strong> TypeScript, Java, Python, SQL, C/C++
            </li>
            <li>
              <strong>Cloud & infra:</strong> AWS, Docker, CI/CD workflows
            </li>
          </ul>
          <button
            onClick={handleResumeClick}
            className="btn btn-primary"
            aria-label="Open resume in new tab"
          >
            View Resume
          </button>
        </div>
        <div className="hero-image">
          <img
            src={meImage}
            alt="Jaime Xu"
            className="profile-image"
            loading="eager"
            style={{ objectPosition: "35% center" }}
          />
        </div>
      </div>
    </section>
  );
};
