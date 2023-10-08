import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import { ContactForm } from "../Components/ContactForm";
import "../index.css";
import { useState, useRef } from "react";

function Contact() {
  return (
    <div className="layout">
      <NavBar currentName="contact" />
      <div className="main">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
