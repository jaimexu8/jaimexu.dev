import { Link } from "react-router-dom";
import "../index.css";

const navigation = [
  { name: "home", href: "/", current: true },
  { name: "my-work", href: "/my-work", current: false },
  { name: "about-me", href: "/about-me", current: false },
  { name: "contact", href: "/contact", current: false },
];

export default function Navbar() {
  return (
    <header className="header static top-0 w-full block">
      <div className="nav-container mx-auto w-1/2 py-5 px-24 flex justify-between items-center z-100">
        <a href="/" className="logo no-underline font-light">
          user@jaimexu:~$
        </a>

        <nav className="navbar">
          {navigation.map((navItem, index) => (
            <a
              key={index}
              href={navItem.href}
              className={navItem.current ? "current" : ""}
            >
              <Link to={navItem.href}>{navItem.name}</Link>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
