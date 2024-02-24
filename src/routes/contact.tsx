import Header from "../Components/header/header";
import Footer from "../Components/footer/footer";
import { ContactForm } from "../Components/contact-form";

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
