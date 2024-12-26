import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBarsStaggered,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { TracingBeam } from "./components/tracing-beam";
import { ContactForm } from "./components/contact-form";
import { SectionGap } from "./components/section-gap";
import { MutableRefObject, useEffect, useRef, useState } from "react";

export default function App() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  const scrollToSection = (
    sectionRef: MutableRefObject<HTMLElement | null>
  ) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const MAX_MENU_WIDTH = 600;
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

  return (
    <div className="flex items-center justify-center">
      <div className="layout">
        <header className="header static top-0 w-full block">
          <div className="nav-container mx-auto py-5 grid justify-between items-center z-100">
            <div className="logo pl-5">
              <a href="/" className="logo-name">
                user@jaimexu
              </a>
              <a href="/" className="logo-directory">
                :~$/home
              </a>
              <a href="/" className="logo-cursor">
                &nbsp;
              </a>
            </div>
            {isMobile ? (
              <div className="flex justify-end cursor-pointer mx-5">
                {dropdownOpen ? (
                  <FontAwesomeIcon
                    icon={faBarsStaggered}
                    onClick={toggleDropdown}
                  />
                ) : (
                  <FontAwesomeIcon icon={faBars} onClick={toggleDropdown} />
                )}
              </div>
            ) : (
              <nav className="navbar px-5 flex justify-end">
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
                  Contact
                </a>
              </nav>
            )}
          </div>
          {isMobile && dropdownOpen && (
            <nav className="nav-dropdown flex flex-col items-center">
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
                Contact
              </a>
            </nav>
          )}
        </header>
        <div className="main">
          <div className="content px-4">
            <TracingBeam>
              <section ref={section1Ref}>
                <p className="text-4xl font-black my-10">Hi, I'm Jaime</p>
                <p className="text-lg">
                  I'm a junior in Computer Science at Purdue University,
                  experienced in full-stack development. Through my software
                  engineering internship at Fundwurx as well as past projects,
                  I've gained extensive experience in developing web and mobile
                  applications, primarily using React, Node, and JavaScript.
                </p>
                <button
                  onClick={() => window.open("/Jaime_Xu_Resume.pdf", "_blank")}
                  className="mt-10 px-4 py-2 rounded border-2 border-[#60f463] text-[#60f463] hover:bg-[#60f463]  hover:text-white transition"
                >
                  Resume
                </button>{" "}
              </section>
              <SectionGap line={true} />
              <section ref={section2Ref} className="flex flex-col w-full">
                <div className="flex flex-col sm:flex-row w-full">
                  <div className="w-full sm:w-1/4 mr-5">
                    <p className="text-2xl underline">Education</p>
                  </div>
                  <div className="w-full sm:w-3/4">
                    <p className="text-xl font-extrabold">Purdue University</p>
                    <p className="text-lg italic">
                      Bachelor of Science in Computer Science
                    </p>
                    <p className="text-lg">
                      West Lafayette, IN • August 2022 - May 2026
                    </p>
                  </div>
                </div>
                <SectionGap height={100} />
                <div className="flex flex-col sm:flex-row w-full">
                  <div className="w-full sm:w-1/4 mr-5">
                    <p className="text-2xl underline">Experience</p>
                  </div>
                  <div className="w-full sm:w-3/4">
                    <p className="text-xl font-extrabold">Fundwurx</p>
                    <p className="text-lg italic">
                      Software Engineering Intern
                    </p>
                    <p className="text-lg">
                      Philadelphia, PA • February 2024 - August 2024
                    </p>
                    <br />
                    <ul className="list-disc list-inside">
                      <li>
                        Developed API with TypeScript and PostgreSQL, enabling
                        company admins to manage volunteer events. Resulted in
                        over 40 events and 700+ volunteer hours. Included
                        automated unit tests using Jest.
                      </li>
                      <li>
                        Engineered a user interests tracking feature with React,
                        allowing the collection of employee preferences. Helped
                        company admins tailor charity event selections. Resulted
                        in increased employee participation and customized event
                        experiences.
                      </li>
                    </ul>
                    <SectionGap height={70} />
                    <p className="text-xl font-extrabold">Hack the Future</p>
                    <p className="text-lg italic">Software Developer</p>
                    <p className="text-lg">
                      West Lafayette, IN • September 2023 - May 2024
                    </p>
                    <br />
                    <ul className="list-disc list-inside">
                      <li>
                        Implemented a form in React, tracking program signups
                        and user data for client serving over 2,100 individuals.
                      </li>
                      <li>
                        Built an administrative dashboard using Node.js and
                        Express that automated data management, reducing manual
                        reporting efforts by 50 hours per month.
                      </li>
                      <li>
                        Integrated authentication systems with cookies and
                        sessions to manage secure user data, ensuring privacy
                        and data protection.
                      </li>
                      <li>
                        Participated in Agile methodologies, including Scrum
                        meetings and code reviews, in a team of 10, enhancing
                        team collaboration and code quality.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
              <SectionGap line={true} />
              <section ref={section3Ref}>
                <p className="text-3xl font-black">Contact me</p>
                <ContactForm />
              </section>
            </TracingBeam>
          </div>
        </div>
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
                <FontAwesomeIcon
                  icon={faLinkedin}
                  style={{ color: "#60f463" }}
                />
              </a>
              <a
                href="mailto:jaimexu8@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ color: "#60f463" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
