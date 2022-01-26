import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./ContactUs.css";

function ContactUs() {
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_xeewa05",
        "template_tx0vavk",
        formRef.current,
        "user_3iroWOlejCEuTMFs1Lmn3"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <div className="c-wrapper">
        <h2 className="c-title">Let's discuss your project</h2>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
            <input type="text" required placeholder="Name" name="user_name" />
            <input
              type="text"
              required
              placeholder="Subject"
              name="user_subject"
            />
            <input type="text" required placeholder="Email" name="user_email" />
            <textarea rows="5" required placeholder="Message" name="message" />
            <button className="contact-button">Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
