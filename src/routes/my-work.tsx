import Header from "../Components/header/Header";
import Footer from "../Components/footer/Footer";

function MyWork() {
  return (
    <>
      <div className="layout">
        <Header currentPage="my-work" />
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

export default MyWork;
