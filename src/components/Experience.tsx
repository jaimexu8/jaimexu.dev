import { MutableRefObject } from "react";
import { EXPERIENCE_DATA } from "../constants";

interface ExperienceProps {
  sectionRef: MutableRefObject<HTMLElement | null>;
}

export const Experience = ({ sectionRef }: ExperienceProps) => {
  return (
    <section ref={sectionRef} className="fade-in-up">
      <h2>Experience & Education</h2>

      {EXPERIENCE_DATA.map((item, index) => (
        <div key={index} className="experience-item">
          <h3 className="experience-title">{item.title}</h3>
          <p className="experience-company">{item.company}</p>
          <p className="experience-date">
            {item.location ? `${item.location} • ` : ""}
            {item.date}
          </p>
          {item.description && (
            <div className="experience-description">
              <ul>
                {item.description.map((desc, descIndex) => (
                  <li key={descIndex}>{desc}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

