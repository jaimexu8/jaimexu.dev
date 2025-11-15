import { MutableRefObject } from "react";
import { RESUME_PATH } from "../constants";
import meImage from "../assets/me.jpeg";

interface HeroProps {
  sectionRef: MutableRefObject<HTMLElement | null>;
}

export const Hero = ({ sectionRef }: HeroProps) => {
  const handleResumeClick = () => {
    window.open(RESUME_PATH, "_blank");
  };

  return (
    <section ref={sectionRef} className="fade-in-up">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hi, I'm Jaime</h1>
          <p className="text-xl mb-6">
            I'm a CS student at Purdue University with a track in software
            engineering. I'm experienced in fullstack development, primarily
            with React and Node.js.
          </p>
          <p
            className="text-lg mb-6"
            style={{ color: "var(--text-secondary)" }}
          >
            Currently seeking software engineering internship opportunities for
            Summer 2026. Check out my work below or reach out to connect!
          </p>
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
