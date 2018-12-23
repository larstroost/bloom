import React from 'react';
import Link from 'next/link';

import './contact-container.scss';
import ContactInformation from '../contact-information/ContactInformation';
import ContactForm from '../contact-form/ContactForm';

class ContactContainer extends React.Component {
  render() {
    return (
      <div className="contact__container">
        <ContactInformation />
        <ContactForm />
      </div>
    );
  }
}

export default ContactContainer;
