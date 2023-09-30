import "../index.css";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

function Root() {
  return (
    <div className="layout">
      <NavBar />
      <div className="main">
        <div className="content pt-10">
          <h1 className="text-lg font-bold">Hello, I'm Jaime</h1>
          <h3>
            I'm a computer science sophomore at Purdue University. I'm
            passionate about building applications and{" "}
          </h3>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Root;
