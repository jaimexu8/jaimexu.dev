import { FC, FormEvent, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

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

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Validate environment variables
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  useEffect(() => {
    if (!serviceId || !templateId || !publicKey) {
      setError(
        "Email service configuration is missing. Please check your environment variables."
      );
    }
  }, [serviceId, templateId, publicKey]);

  const validateForm = (): boolean => {
    if (!formData.user_name.trim()) {
      setError("Please enter your name.");
      return false;
    }
    if (!formData.user_email.trim()) {
      setError("Please enter your email address.");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.user_email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    if (!formData.message.trim()) {
      setError("Please enter a message.");
      return false;
    }
    return true;
  };

  const sendEmail = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!validateForm()) {
      return;
    }

    if (!serviceId || !templateId || !publicKey) {
      setError(
        "Email service is not configured. Please contact the site administrator."
      );
      return;
    }

    setIsLoading(true);

    try {
      await emailjs.sendForm(serviceId, templateId, e.currentTarget as HTMLFormElement, publicKey);
      toast.success("Thanks, your email has been sent! I will get back to you when available!");
      setFormData({
        user_name: "",
        user_email: "",
        message: "",
      });
    } catch (err) {
      const error = err as SendEmailError;
      console.error("EmailJS error:", error);
      const errorMessage = "Failed to send email. Please try again later or contact me directly at jaimexu8@gmail.com.";
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="form-container" onSubmit={sendEmail} noValidate>
      <label htmlFor="user_name" className="form-label">
        Name
      </label>
      <input
        id="user_name"
        type="text"
        name="user_name"
        placeholder="Enter your name..."
        className="form-input"
        value={formData.user_name}
        onChange={(e) => {
          setFormData({ ...formData, user_name: e.target.value });
          setError(null);
        }}
        required
        aria-required="true"
        aria-invalid={error && !formData.user_name.trim() ? "true" : "false"}
        aria-describedby={error && !formData.user_name.trim() ? "name-error" : undefined}
      />

      <label htmlFor="user_email" className="form-label">
        Email
      </label>
      <input
        id="user_email"
        type="email"
        name="user_email"
        placeholder="Enter your email..."
        className="form-input"
        value={formData.user_email}
        onChange={(e) => {
          setFormData({ ...formData, user_email: e.target.value });
          setError(null);
        }}
        required
        aria-required="true"
        aria-invalid={error && !formData.user_email.trim() ? "true" : "false"}
        aria-describedby={error && !formData.user_email.trim() ? "email-error" : undefined}
      />

      <label htmlFor="message" className="form-label">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        placeholder="Enter your message..."
        className="form-input message-input"
        value={formData.message}
        onChange={(e) => {
          setFormData({ ...formData, message: e.target.value });
          setError(null);
        }}
        required
        aria-required="true"
        aria-invalid={error && !formData.message.trim() ? "true" : "false"}
        aria-describedby={error && !formData.message.trim() ? "message-error" : undefined}
      />

      {error && (
        <div className="error-alert" role="alert" aria-live="polite">
          {error}
        </div>
      )}

      <button
        type="submit"
        className="self-start mt-10 px-4 py-2 rounded border-2 border-white text-white hover:bg-white hover:text-black transition disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={isLoading}
        aria-label="Send message"
      >
        {isLoading ? "Sending..." : "Send"}
      </button>
    </form>
  );
};
