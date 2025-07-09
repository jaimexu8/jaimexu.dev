import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBarsStaggered,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { TracingBeam } from "./components/tracing-beam";
import { ContactForm } from "./components/contact-form";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import shibaTypeImage from "./assets/Shiba Type.png";
import homemadeHelperImage from "./assets/Homemade Helper.png";

export default function App() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);

  const scrollToSection = (
    sectionRef: MutableRefObject<HTMLElement | null>
  ) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const MAX_MENU_WIDTH = 768;
  const [isMobile, setIsMobile] = useState(window.innerWidth < MAX_MENU_WIDTH);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    const checkSize = () => {
      setIsMobile(window.innerWidth < MAX_MENU_WIDTH);
    };

    window.addEventListener("resize", checkSize);

    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="layout">
        {/* Background gradient circles */}
        <div
          className="bg-circle-1"
          style={{
            transform: `translateY(${scrollY * 0.3}px) translateX(${
              scrollY * 0.15
            }px)`,
          }}
        />
        <div
          className="bg-circle-2"
          style={{
            transform: `translateY(${-scrollY * 0.4}px) translateX(${
              scrollY * 0.25
            }px)`,
          }}
        />
        <div
          className="bg-circle-3"
          style={{
            transform: `translateY(${scrollY * 0.35}px) translateX(${
              -scrollY * 0.2
            }px)`,
          }}
        />
        <div
          className="bg-circle-4"
          style={{
            transform: `translateY(${-scrollY * 0.25}px) translateX(${
              scrollY * 0.3
            }px)`,
          }}
        />
        <div
          className="bg-circle-5"
          style={{
            transform: `translateY(${scrollY * 0.45}px) translateX(${
              -scrollY * 0.3
            }px)`,
          }}
        />
        <div
          className="bg-circle-6"
          style={{
            transform: `translateY(${-scrollY * 0.35}px) translateX(${
              scrollY * 0.2
            }px)`,
          }}
        />
        <div
          className="bg-circle-7"
          style={{
            transform: `translateY(${scrollY * 0.5}px) translateX(${
              -scrollY * 0.4
            }px)`,
          }}
        />
        <div
          className="bg-circle-8"
          style={{
            transform: `translateY(${-scrollY * 0.6}px) translateX(${
              scrollY * 0.35
            }px)`,
          }}
        />
        <div
          className="bg-circle-9"
          style={{
            transform: `translateY(${scrollY * 0.25}px) translateX(${
              -scrollY * 0.5
            }px)`,
          }}
        />
        <div
          className="bg-circle-10"
          style={{
            transform: `translateY(${-scrollY * 0.45}px) translateX(${
              scrollY * 0.6
            }px)`,
          }}
        />
        <div
          className="bg-circle-11"
          style={{
            transform: `translateY(${scrollY * 0.7}px) translateX(${
              -scrollY * 0.25
            }px)`,
          }}
        />
        <div
          className="bg-circle-12"
          style={{
            transform: `translateY(${-scrollY * 0.55}px) translateX(${
              scrollY * 0.4
            }px)`,
          }}
        />
        <div
          className="bg-circle-13"
          style={{
            transform: `translateY(${scrollY * 0.8}px) translateX(${
              -scrollY * 0.3
            }px)`,
          }}
        />
        <div
          className="bg-circle-14"
          style={{
            transform: `translateY(${-scrollY * 0.9}px) translateX(${
              scrollY * 0.5
            }px)`,
          }}
        />
        <div
          className="bg-circle-15"
          style={{
            transform: `translateY(${scrollY * 0.4}px) translateX(${
              -scrollY * 0.7
            }px)`,
          }}
        />

        <header className="header">
          <div className="nav-container">
            {isMobile ? (
              <div className="flex justify-end cursor-pointer">
                {dropdownOpen ? (
                  <FontAwesomeIcon
                    icon={faBarsStaggered}
                    onClick={toggleDropdown}
                    className="text-xl"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faBars}
                    onClick={toggleDropdown}
                    className="text-xl"
                  />
                )}
              </div>
            ) : (
              <nav className="navbar">
                <a
                  href="#section1"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(section1Ref);
                  }}
                >
                  Home
                </a>
                <a
                  href="#section2"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(section2Ref);
                  }}
                >
                  Experience
                </a>
                <a
                  href="#section3"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(section3Ref);
                  }}
                >
                  Projects
                </a>
                <a
                  href="#section4"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(section4Ref);
                  }}
                >
                  Contact
                </a>
              </nav>
            )}
          </div>
          {isMobile && dropdownOpen && (
            <nav className="nav-dropdown">
              <a
                href="#section1"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(section1Ref);
                }}
              >
                Home
              </a>
              <a
                href="#section2"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(section2Ref);
                }}
              >
                Experience
              </a>
              <a
                href="#section3"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(section3Ref);
                }}
              >
                Projects
              </a>
              <a
                href="#section4"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(section4Ref);
                }}
              >
                Contact
              </a>
            </nav>
          )}
        </header>
        <div className="main">
          <div className="content">
            <TracingBeam>
              <section ref={section1Ref} className="fade-in-up">
                <h1>Hi, I'm Jaime</h1>
                <p className="text-xl mb-6">
                  I'm a senior in computer science at Purdue University and a
                  software engineer experienced in developing web and mobile
                  applications, primarily using React and Node.js.
                </p>
                <button
                  onClick={() => window.open("/Jaime_Xu_Resume.pdf", "_blank")}
                  className="btn btn-primary"
                >
                  View Resume
                </button>
              </section>

              <section ref={section2Ref} className="fade-in-up">
                <h2>Experience & Education</h2>

                <div className="experience-item">
                  <h3 className="experience-title">
                    Bachelor of Science in Computer Science
                  </h3>
                  <p className="experience-company">Purdue University</p>
                  <p className="experience-date">
                    West Lafayette, IN • August 2022 - May 2026
                  </p>
                </div>

                <div className="experience-item">
                  <h3 className="experience-title">Software Engineer Intern</h3>
                  <p className="experience-company">Tenon</p>
                  <p className="experience-date">
                    Indianapolis, IN • May 2025 - Present
                  </p>
                  <div className="experience-description">
                    <ul>
                      <li>
                        Building custom UI components using Seismic JavaScript
                        framework. Styling and configuring pages with ServiceNow
                        UI Builder.
                      </li>
                      <li>
                        Integrating multilingual support across 30+ reusable
                        components to enhance global accessibility.
                      </li>
                      <li>
                        Architecting customizable form SDK with business rules
                        and access control lists (ACLs) to secure platform data
                        and enforce user permissions.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="experience-item">
                  <h3 className="experience-title">Software Engineer Intern</h3>
                  <p className="experience-company">Fundwurx</p>
                  <p className="experience-date">
                    Philadelphia, PA • February 2024 - August 2024
                  </p>
                  <div className="experience-description">
                    <ul>
                      <li>
                        Designed and deployed a TypeScript/PostgreSQL API for
                        posting and managing volunteer events. Resulted in over
                        40 events and 700+ volunteer hours. Included automated
                        unit tests using Jest.
                      </li>
                      <li>
                        Engineered a user interests tracking feature with React,
                        allowing the collection of employee preferences. Helped
                        company admins tailor charity event selections. Resulted
                        in increased employee participation and customized event
                        experiences.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section ref={section3Ref} className="fade-in-up">
                <h2>Projects</h2>
                <p className="mb-8">
                  Here are some projects that demonstrate my skills in
                  full-stack development.
                </p>

                <div className="projects-grid">
                  <div className="project-card">
                    <div className="project-image">
                      <img
                        src={shibaTypeImage}
                        alt="Shiba Type Project"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <h3 className="project-title">Shiba Type</h3>
                    <p className="project-description">
                      Customizable typing test website featuring a leaderboard,
                      shop, user-authentication, and selectable themes.
                    </p>
                    <div className="project-links">
                      <a
                        href="https://github.com/jaimexu8/shibatype"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                      >
                        <FontAwesomeIcon icon={faGithub} />
                        View Code
                      </a>
                      {/* <a href="#" className="btn btn-primary">
                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                        Live Demo
                      </a> */}
                    </div>
                  </div>

                  <div className="project-card">
                    <div className="project-image">
                      <img
                        src={homemadeHelperImage}
                        alt="Homemade Helper Project"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <h3 className="project-title">Homemade Helper</h3>
                    <p className="project-description">
                      A web app that allows user to find recipes and chat with
                      an AI cooking assistant. Built as the lone developer on my
                      team for the Xtern 2025 Hackathon.
                    </p>
                    <div className="project-links">
                      <a
                        href="https://github.com/jaimexu8/shibatype"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                      >
                        <FontAwesomeIcon icon={faGithub} />
                        View Code
                      </a>
                      {/* <a href="#" className="btn btn-primary">
                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                        Live Demo
                      </a> */}
                    </div>
                  </div>
                </div>
              </section>

              <section ref={section4Ref} className="fade-in-up">
                <h2>Contact</h2>
                <div className="contact-section">
                  <ContactForm />
                  <div className="contact-text">
                    <h3>Get In Touch</h3>
                    <p>
                      Feel free to reach out. I'm always open to new
                      opportunities.
                    </p>
                  </div>
                </div>
              </section>
            </TracingBeam>
          </div>
        </div>
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
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://linkedin.com/in/jaimexu8"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="mailto:jaimexu8@gmail.com" title="Email">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
