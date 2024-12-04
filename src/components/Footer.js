import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [step, setStep] = useState(0); // Tracks the current step (0: idle, 1: name, 2: phone, 3: email)
  const [contactDetails, setContactDetails] = useState({ name: "", phone: "", email: "" });
  const [inputValue, setInputValue] = useState(""); // Tracks the input value for the current step
  const [errorMessage, setErrorMessage] = useState(""); // Tracks validation errors
  const [isSubmitted, setIsSubmitted] = useState(false); // Tracks if the form is completed

  const validateInput = () => {
    if (step === 1 && inputValue.trim().length < 3) {
      return "Name must be at least 3 characters long.";
    }
    if (step === 2 && !/^\d{10}$/.test(inputValue.trim())) {
      return "Please enter a valid 10-digit phone number.";
    }
    if (step === 3 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValue.trim())) {
      return "Please enter a valid email address.";
    }
    return "";
  };

  const handleNextStep = () => {
    const error = validateInput();
    if (error) {
      setErrorMessage(error);
      return;
    }

    setErrorMessage("");

    // Save the input value to the corresponding field
    if (step === 1) setContactDetails({ ...contactDetails, name: inputValue.trim() });
    if (step === 2) setContactDetails({ ...contactDetails, phone: inputValue.trim() });
    if (step === 3) setContactDetails({ ...contactDetails, email: inputValue.trim() });

    // Clear the input and move to the next step or finish
    setInputValue("");
    if (step < 3) {
      setStep(step + 1);
    } else {
      setIsSubmitted(true);
      setStep(0); // Reset to idle
    }
  };

  const handleContactMeClick = () => {
    setIsSubmitted(false);
    setStep(1); // Start the contact flow
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Left Section: Details */}
        <div className="footer-section">
          <h3>Details</h3>
          <ul>
            <li>Syam Sundar Yadla</li>
            <li>Aditya University, Surampalem</li>
            <li>III - BTech, CSE - Data Science</li>
          </ul>
        </div>

        {/* Right Section: Contact Form */}
        <div className="footer-section">
          <h3>Contact Me</h3>
          {isSubmitted ? (
            <div className="submitted-message">
              <p>
                Thank you, <strong>{contactDetails.name}</strong>! We will contact you at{" "}
                <strong>{contactDetails.email}</strong>.
              </p>
            </div>
          ) : (
            <>
              {step === 0 && (
                <button className="contact-btn" onClick={handleContactMeClick}>
                  Contact Me
                </button>
              )}
              {step > 0 && (
                <div className="contact-chat">
                  {step === 1 && <p>What's your name?</p>}
                  {step === 2 && <p>What's your phone number?</p>}
                  {step === 3 && <p>What's your email address?</p>}
                  <input
                    type={step === 2 ? "tel" : "text"}
                    placeholder={
                      step === 1 ? "Enter your name" : step === 2 ? "Enter your phone" : "Enter your email"
                    }
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleNextStep();
                    }}
                  />
                  {errorMessage && <p className="error-message">{errorMessage}</p>}
                </div>
              )}
            </>
          )}
        </div>

        {/* Scroll Up Button */}
        <div className="scroll-up">
          <button className="scroll-up-btn" onClick={scrollToTop}>
            ↑
          </button>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>© 2024 Syam Sundar Yadla. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
