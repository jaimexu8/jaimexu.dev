import Header from "../Components/header/header";
import Footer from "../Components/footer/footer";

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
