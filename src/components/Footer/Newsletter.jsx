import React, { useState } from "react";
import SubHeading from "../SubHeading/SubHeading";
import "./Newsletter.css";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsValidEmail(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValidEmail) {
      console.log("Email subscribed:", email);
    }
  };

  return (
    <div className="app__newsletter">
      <div className="app__newsletter-heading">
        <SubHeading title="Newsletter" />
        <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
        <p className="p__opensans">And never miss latest Updates!</p>
      </div>
      <form
        className="app__newsletter-input flex__center"
        onSubmit={handleSubmit}
      >
        {!isValidEmail && (
          <label className="app__newsletter-input__error-message">
            Please enter a valid email address.
          </label>
        )}
        <div className="app__newsletter-form-container">
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={handleEmailChange}
            className={!isValidEmail ? "invalid" : ""}
            required
          />
          <button type="submit" className="custom__button">
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};

export default Newsletter;
