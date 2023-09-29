import { Link } from "react-router-dom";
import "../index.css";

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "My Work", href: "#", current: false },
  { name: "About Me", href: "#", current: false },
  { name: "Contact", href: "#", current: false },
];

export default function Navbar() {
  return (
    <header className="header fixed top-0 w-full block">
      <div className="nav-container mx-auto w-3/5 py-5 px-24 flex justify-between items-center z-100">
        <a href="#" className="logo no-underline font-light">
          user@jaimexu:~$
        </a>
        <nav className="navbar">
          <a className="" href="#">
            <Link to={"/"}>/home</Link>
          </a>
          <a className="" href="#">
            <Link to={"/my-work"}>/my-work</Link>
          </a>
          <a className="" href="#">
            <Link to={"/about-me"}>/about-me</Link>
          </a>
          <a className="" href="#">
            <Link to={"/contact"}>/contact</Link>
          </a>
        </nav>
      </div>
    </header>
  );
}
