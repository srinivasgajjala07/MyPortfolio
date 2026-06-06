import { useState } from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const validateFormData = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name) {
      alert("Name is required");
      return;
    }

    if (!email) {
      alert("Email is required");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      alert("Enter a valid email");
      return;
    }

    if (!message) {
      alert("Message is required");
      return;
    }

    setSubmitted(true);
    setTimeout(()=>{
       setSubmitted(false);
    },4000);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contactSection">
      <div className="contact-wrapper">
        <div className="contact-left">
          <h2>Get In Touch</h2>
          <p>Let's build something amazing together.</p>
          <hr />
          <div className="contact-item">
            <FaEnvelope />
            <span>srinivasgajjala777@gmail.com</span>
          </div>
          <hr />
          <div className="contact-item">
            <FaLinkedin />
            <span>linkedin.com/in/srinivasgajjala77</span>
          </div>
          <hr />
          <div className="contact-item">
            <FaGithub />
            <span>github.com/srinivasgajjala07</span>
          </div>
          <hr />
          <div className="contact-item">
            <FaMapMarkerAlt />
            <span>Hyderabad, India</span>
          </div>
          <hr />
          <div className="info-section">
            <a href="https://github.com/srinivasgajjala07" target="_blank">
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/srinivasgajjala77/"
              target="_blank"
            >
              <FaLinkedin />
            </a>

            <a href="mailto:srinivasgajjala777@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>
        {submitted ? (
          <div className="contact-right">
            <h2 id="wishmsg">Thank you for your message😍</h2>
          </div>
        ) : (
          <div className="contact-right">
            <h2>Contact Me</h2>
            <p>Feel free to send me a message.</p>

            <form onSubmit={validateFormData}>
              <input
                placeholder="Enter Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                placeholder="Enter Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <textarea
                placeholder="Enter Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
              <button type="submit">Send Message</button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}

export default Contact;
