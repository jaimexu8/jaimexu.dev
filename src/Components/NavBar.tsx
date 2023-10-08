import { Link } from "react-router-dom";
import "../index.css";

const navigation = [
  { name: "home", href: "/", current: false },
  { name: "my-work", href: "/my-work", current: false },
  { name: "about-me", href: "/about-me", current: false },
  { name: "contact", href: "/contact", current: false },
];

type NavbarProps = {
  currentName: string;
};

export default function Navbar({ currentName }: NavbarProps) {
  navigation.forEach((item) => {
    item.current = item.name === currentName;
  });

  return (
    <header className="header static top-0 w-full block">
      <div className="nav-container mx-auto py-5 grid justify-between items-center z-100">
        <div className="logo pl-5">
          <a href="/" className="logo-name">
            user@jaimexu
          </a>
          <a href="/" className="logo-directory">
            :~$/{currentName}
          </a>
          <a href="/" className="logo-cursor">
            &nbsp;
          </a>
        </div>

        <nav className="navbar px-5">
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
