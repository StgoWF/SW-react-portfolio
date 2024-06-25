import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactModal.css';

const ContactModal = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [modalMessage, setModalMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    if (!form.name) formErrors.name = 'Name is required';
    if (!form.email) formErrors.email = 'Email is required';
    else if (!validateEmail(form.email)) formErrors.email = 'Invalid email address';
    if (!form.message) formErrors.message = 'Message is required';

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form,
        process.env.REACT_APP_EMAILJS_USER_ID
      ).then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setForm({
            name: '',
            email: '',
            message: '',
          });
          setModalMessage('Thanks for your message!');
        },
        (err) => {
          console.error('FAILED...', err);
          setModalMessage('Oops! Something went wrong. Please try again.');
        }
      );
    }
  };

  return isOpen ? (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="email@example.com"
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Enter your message here"
            />
            {errors.message && <p className="error">{errors.message}</p>}
          </div>
          <button type="submit">Submit</button>
          <button onClick={onClose} className="close">Close</button>
        </form>
        {modalMessage && <p>{modalMessage}</p>}
      </div>
    </div>
  ) : null;
};

export default ContactModal;
