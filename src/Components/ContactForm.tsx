import React, { FC, FormEvent, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "../index.css";

interface SendEmailResponse {
  text: string;
}

interface SendEmailError {
  text: string;
}

export const ContactForm: FC = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [emailSent, setEmailSent] = useState(false);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_57mu53o",
        "template_3w2db0e",
        e.currentTarget as HTMLFormElement,
        "Ukt09dJG573K5wksF"
      )
      .then(
        (result: SendEmailResponse) => {
          console.log(result.text);
          setEmailSent(true); // Set emailSent to true once email is sent
        },
        (error: SendEmailError) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    if (emailSent) {
      setFormData({
        user_name: "",
        user_email: "",
        message: "",
      });
      const timer = setTimeout(() => {
        setEmailSent(false); // Reset emailSent back to false after 5 seconds
      }, 5000);
      return () => clearTimeout(timer); // Clear timeout if the component is unmounted
    }
  }, [emailSent]);

  return (
    <form className="form-container" onSubmit={sendEmail}>
      <label className="form-label">Name</label>
      <input
        type="text"
        name="user_name"
        placeholder="Enter your name..."
        className="form-input"
        value={formData.user_name}
        onChange={(e) =>
          setFormData({ ...formData, user_name: e.target.value })
        }
      />
      <label className="form-label">Email</label>
      <input
        type="email"
        name="user_email"
        placeholder="Enter your email..."
        className="form-input"
        value={formData.user_email}
        onChange={(e) =>
          setFormData({ ...formData, user_email: e.target.value })
        }
      />
      <label className="form-label">Message</label>
      <textarea
        name="message"
        placeholder="Enter your message..."
        className="form-input message-input"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
      />
      <button type="submit" value="Send" className="send-button">
        Send
      </button>
      {emailSent && (
        <div className="sent-alert">
          Thanks, your email has been sent! I will get back to you when
          available!
        </div>
      )}
    </form>
  );
};
