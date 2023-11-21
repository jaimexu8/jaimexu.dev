import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import "./header.css";

interface HeaderProps {
  currentPage: string;
}

export default function Header({ currentPage }: HeaderProps) {
  const navigation = [
    { name: "home", href: "/", current: false },
    { name: "contact", href: "/contact", current: false },
  ];

  navigation.forEach((item) => {
    item.current = item.name === currentPage;
  });

  const MAX_MENU_WIDTH = 600;
  const [isMobile, setIsMobile] = useState(window.innerWidth < MAX_MENU_WIDTH);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      setIsMobile(window.innerWidth < MAX_MENU_WIDTH);
    };

    window.addEventListener("resize", checkSize);

    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="header static top-0 w-full block">
      <div className="nav-container mx-auto py-5 grid justify-between items-center z-100">
        {/* Add Logo */}
        <div className="logo pl-5">
          <a href="/" className="logo-name">
            user@jaimexu
          </a>
          <a href="/" className="logo-directory">
            :~$/{currentPage}
          </a>
          <a href="/" className="logo-cursor">
            &nbsp;
          </a>
        </div>
        {/* Dropdown menu icon */}
        {isMobile ? (
          <div className="flex justify-end cursor-pointer mx-20">
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
          /* Navigation links */
          <nav className="navbar px-5 flex justify-end">
            {navigation.map((navItem, index) => (
              <Link
                key={index}
                to={navItem.href}
                className={navItem.current ? "current" : ""}
              >
                {navItem.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
      {isMobile && dropdownOpen && (
        /* Dropdown menu links */
        <nav className="nav-dropdown flex flex-col items-center">
          {navigation.map((navItem, index) => (
            <Link
              key={index}
              to={navItem.href}
              className={navItem.current ? "current" : ""}
              onClick={() => setDropdownOpen(false)}
            >
              {navItem.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );

  /*
  return (
    <header className="header static top-0 w-full block">
      <div className="nav-container mx-auto py-5 grid justify-between items-center z-100">
        <div className="logo pl-5">
          <a href="/" className="logo-name">
            user@jaimexu
          </a>
          <a href="/" className="logo-directory">
            :~$/{currentPage}
          </a>
          <a href="/" className="logo-cursor">
            &nbsp;
          </a>
        </div>
        <nav className="navbar px-5 flex justify-end">
          {navigation.map((navItem, index) => (
            <Link
              key={index}
              to={navItem.href}
              className={navItem.current ? "current" : ""}
            >
              {navItem.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
  */
}
