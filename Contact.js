// src/components/Contact.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');

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
      // Form is valid, handle form submission
      emailjs.send('REDACTED', 'REDACTED', form, 'REDACTED')
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
          setStatus('SUCCESS');
          setForm({
            name: '',
            email: '',
            message: '',
          });
        }, (err) => {
          console.error('FAILED...', err);
          setStatus('FAILED');
        });
    }
  };

  return (
    <section className="contact">
      <h2>Contact</h2>
      {status === 'SUCCESS' && <p className="success">Thanks for your message!</p>}
      {status === 'FAILED' && <p className="error">Oops! Something went wrong. Please try again.</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
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
          />
          {errors.message && <p className="error">{errors.message}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
