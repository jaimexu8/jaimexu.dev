import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import "../index.css";

function AboutMe() {
  return (
    <>
      <div className="layout">
        <NavBar currentName="about-me" />
        <div className="main">
          <div className="content">
            <h1>This page is currently under development</h1>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default AboutMe;
