// pages/contact.js
import React from 'react';
import ContactForm from '../components/contactForm';
import Layout from '../components/layout';

const ContactPage = () => {
  return (
    <Layout>
      <div className="container mx-auto">
      <h1 className="text-4xl text-center sm:text-5xl font-semibold tracking-wide text-main-color"> Envoyer un message  </h1>
        <ContactForm />
      </div>
    </Layout>
  );
};

export default ContactPage;
