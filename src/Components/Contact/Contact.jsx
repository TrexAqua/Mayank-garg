import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Contact.styles.css';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';
const Contact = () => {
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const animations = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const submitHandler = () => {
    const formData = {
      first_name: fName,
      last_name: lName,
      user_email: email,
      subject: subject,
      message: message,
    };

    emailjs
      .send(
        'service_60073um',
        'template_2dscizr',
        formData,
        'VdFP7Ubvy9XiHcU23'
      )
      .then(
        (result) => {
          toast.success('Message Sent Successfully!');
        },
        (error) => {
          toast.error('Some error occured');
        }
      );
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 1 }}
      variants={animations}
    >
      <Navbar />
      <div className="contact">
        <div className="lets-talk">
          <div className="contact-box-blue"></div>
          <h2>Let's talk</h2>
        </div>
        <div className="contact-form">
          <div className="first-two-field">
            <div className="first-two-children">
              <label for="fname">
                First Name <span style={{ color: '#0050ff' }}>*</span>
              </label>
              <br />
              <input
                onChange={(e) => {
                  setFName(e.target.value);
                }}
                type="text"
                id="fname"
                name="fname"
              />
            </div>
            <div className="first-two-children">
              <label for="fname">
                Last Name <span style={{ color: '#0050ff' }}>*</span>
              </label>
              <br />
              <input
                onChange={(e) => {
                  setLName(e.target.value);
                }}
                type="text"
                id="fname"
                name="fname"
              />
            </div>
          </div>
          <div className="rest-field">
            <div className="rest-field-children">
              <label for="email">Email*</label>
              <br />
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="oof-input"
                type="email"
                id="email"
                name="email"
              />
            </div>
            <div className="rest-field-children">
              <label for="subject">Subject</label>
              <br />
              <input
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
                className="oof-input"
                type="text"
                id="subject"
                name="subject"
              />
            </div>
            <div className="rest-field-children">
              <label for="Message">Message*</label>
              <br />
              <input
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                className="special-input"
                type="text"
                id="message"
                name="message"
              />
            </div>
          </div>
          <button
            onClick={() => {
              submitHandler();
            }}
            className="submit-button"
          >
            Submit
          </button>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </motion.div>
  );
};

export default Contact;
