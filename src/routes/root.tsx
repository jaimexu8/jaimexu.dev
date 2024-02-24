import { Link } from "react-router-dom";
import Header from "../Components/header/header";
import Footer from "../Components/footer/footer";
import { TracingBeam } from "../Components/tracing-beam";

function Root() {
  return (
    <div className="min-h-screen w-full bg-[#191919] bg-dot-white/[0.15] relative flex items-center justify-center">
      <div className="layout">
        <Header currentPage="home" />
        <div className="main">
          <div className="content">
            <TracingBeam>
              <h1>Hello, I'm Jaime</h1>
              <h3>
                I'm currently a full-stack engineering intern at Fundwurx and a
                sophomore in Computer Science at Purdue University.
              </h3>
              <br />
              <h3>
                I'm experienced in Java, C/C++, JavaScript/TypeScript, React,
                Node.js, and PostgreSQL.
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
            </TracingBeam>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Root;
