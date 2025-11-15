import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBarsStaggered,
} from "@fortawesome/free-solid-svg-icons";
import { MutableRefObject } from "react";
import { NAVIGATION_LINKS, MAX_MENU_WIDTH } from "../constants";

interface HeaderProps {
  isMobile: boolean;
  dropdownOpen: boolean;
  toggleDropdown: () => void;
  scrollToSection: (sectionRef: MutableRefObject<HTMLElement | null>) => void;
  sectionRefs: {
    section1Ref: MutableRefObject<HTMLElement | null>;
    section2Ref: MutableRefObject<HTMLElement | null>;
    section3Ref: MutableRefObject<HTMLElement | null>;
    section4Ref: MutableRefObject<HTMLElement | null>;
  };
}

export const Header = ({
  isMobile,
  dropdownOpen,
  toggleDropdown,
  scrollToSection,
  sectionRefs,
}: HeaderProps) => {
  const getSectionRef = (href: string) => {
    switch (href) {
      case "#section1":
        return sectionRefs.section1Ref;
      case "#section2":
        return sectionRefs.section2Ref;
      case "#section3":
        return sectionRefs.section3Ref;
      case "#section4":
        return sectionRefs.section4Ref;
      default:
        return sectionRefs.section1Ref;
    }
  };

  return (
    <header className="header">
      <div className="nav-container">
        {isMobile ? (
          <div className="flex justify-end cursor-pointer">
            <button
              onClick={toggleDropdown}
              className="text-xl"
              aria-label={dropdownOpen ? "Close menu" : "Open menu"}
              aria-expanded={dropdownOpen}
              aria-controls="mobile-navigation"
            >
              {dropdownOpen ? (
                <FontAwesomeIcon icon={faBarsStaggered} />
              ) : (
                <FontAwesomeIcon icon={faBars} />
              )}
            </button>
          </div>
        ) : (
          <nav className="navbar" role="navigation" aria-label="Main navigation">
            {NAVIGATION_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(getSectionRef(link.href));
                }}
                aria-label={`Navigate to ${link.label} section`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </div>
      {isMobile && dropdownOpen && (
        <nav
          id="mobile-navigation"
          className="nav-dropdown"
          role="navigation"
          aria-label="Mobile navigation"
        >
          {NAVIGATION_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(getSectionRef(link.href));
                toggleDropdown();
              }}
              aria-label={`Navigate to ${link.label} section`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

