import React, { FC, FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";
import "../index.css";

interface SendEmailResponse {
  text: string;
}

interface SendEmailError {
  text: string;
}

export const ContactForm: FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (!form.current) {
      console.error("Form is not available");
      return;
    }

    emailjs
      .sendForm(
        "service_57mu53o",
        "template_3w2db0e",
        form.current,
        "Ukt09dJG573K5wksF"
      )
      .then(
        (result: SendEmailResponse) => {
          console.log(result.text);
        },
        (error: SendEmailError) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form className="form-container" ref={form} onSubmit={sendEmail}>
      <label className="form-label">Name</label>
      <input
        type="text"
        name="user_name"
        placeholder="Enter your name..."
        className="form-input"
      />
      <label className="form-label">Email</label>
      <input
        type="email"
        name="user_email"
        placeholder="Enter your email..."
        className="form-input"
      />
      <label className="form-label">Message</label>
      <textarea
        name="message"
        placeholder="Enter your message..."
        className="form-input message-input"
      />
      <button type="submit" value="Send" className="send-button">
        Send
      </button>
    </form>
  );
};
