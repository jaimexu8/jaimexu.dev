import { TracingBeam } from "./components/tracing-beam";
import { ContactForm } from "./components/contact-form";
import { BackgroundCircles } from "./components/BackgroundCircles";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { MAX_MENU_WIDTH } from "./constants";

export default function App() {
  const section1Ref = useRef<HTMLElement>(null);
  const section2Ref = useRef<HTMLElement>(null);
  const section3Ref = useRef<HTMLElement>(null);
  const section4Ref = useRef<HTMLElement>(null);

  const scrollToSection = (
    sectionRef: MutableRefObject<HTMLElement | null>
  ) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

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
    <ErrorBoundary>
      <div className="flex items-center justify-center">
        <div className="layout">
          <BackgroundCircles scrollY={scrollY} />

          <Header
            isMobile={isMobile}
            dropdownOpen={dropdownOpen}
            toggleDropdown={toggleDropdown}
            scrollToSection={scrollToSection}
            sectionRefs={{
              section1Ref,
              section2Ref,
              section3Ref,
              section4Ref,
            }}
          />

          <div className="main">
            <div className="content">
              <TracingBeam>
                <Hero sectionRef={section1Ref} />
                <Experience sectionRef={section2Ref} />
                <Projects sectionRef={section3Ref} />

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

          <Footer />
        </div>
      </div>
    </ErrorBoundary>
  );
}
