import Header from "../Components/header/Header";
import Footer from "../Components/footer/Footer";
import { ContactForm } from "../Components/ContactForm";

function Contact() {
  return (
    <div className="layout">
      <Header currentPage="contact" />
      <div className="main">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
