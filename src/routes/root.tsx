import { Link } from "react-router-dom";
import Header from "../Components/header/Header";
import Footer from "../Components/footer/Footer";

function Root() {
  return (
    <div className="layout">
      <Header currentPage="home" />
      <div className="main">
        <div className="content">
          <h1>Hello, I'm Jaime</h1>
          <h3>
            I'm a full stack developer and a sophomore at Purdue University.
          </h3>
          <br />
          <h3>
            I'm experienced in Java, C/C++, JS/TS, HTML/CSS, React.js, MongoDB,
            Express.js, Node.js, Redux, Tailwind CSS, Bootstrap, MUI, x86
            Assembly, and Swift.
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
            to read more about my experience and skillset.
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
