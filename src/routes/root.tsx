import "../index.css";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

function Root() {
  return (
    <div className="layout">
      <NavBar currentName="home" />
      <div className="main">
        <div className="content">
          <h1>Hello, I'm Jaime</h1>
          <h3>
            I'm a sophomore in Computer Science at Purdue University, and I'm
            passionate about building applications.
          </h3>
          <br />
          <h3>
            View my{" "}
            <a
              href="/Jaime_Xu_Resume.pdf"
              className="underline content-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              resume
            </a>{" "}
            to read about my experience and skillset.
          </h3>
          <br />
          <h3>
            You can contact me through this{" "}
            <Link to="/contact" className="underline content-link">
              form
            </Link>
            .
          </h3>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Root;
