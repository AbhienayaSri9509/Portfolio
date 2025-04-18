import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "../Styles/contact.css";

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_cvv7xup", 
      "template_ddb1hyd", 
      form.current,
      "zwFniPoYjy8XPKBb_" 
    )
    .then(
      (result) => {
        setMessage("✅ Message sent successfully!");
        form.current.reset();
      },
      (error) => {
        console.error("EmailJS Error:", error);
        setMessage("❌ Failed to send message. Please try again.");
      }
    );
  };

  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required />
        <button type="submit">Send Message</button>
      </form>
      {message && <p className="contact-message">{message}</p>}
    </section>
  );
};

export default Contact;