import React from 'react';
import Link from 'next/link';

import './contact-information.scss';

class ContactInformation extends React.Component {
  render() {
    return (
      <section className="contact-info">
        <div className="contact-info__photo-wrapper">
          <img
            className="contact-info__location-photo"
            src="static/photos/index/locatie2.png"
            alt="Locatie foto"
          />
          <Link href="https://www.google.com/maps/dir/51.8414336,4.6276608/bloom+horeca+slijperij/@51.8398494,4.6208692,16z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x47c42e80d213833b:0x5f3cd128335d056d!2m2!1d4.6220539!2d51.8393255">
            <a
              className="contact-info__link"
              target="_blank"
            >
              <img
                className="contact-info__map-photo"
                src="static/photos/index/maps2.png"
                alt="Locatie foto"
              />
            </a>
          </Link>
        </div>
        <div className="contact-info__info-wrapper">
          <div className="contact-info__address-contact">
            <h2 className="contact-info__title">
              Adres
            </h2>
            <p className="contact-info__text">
              Horeca Slijperij Bloom B.V.<br />
              De Plaats 22<br />
              3342 GL Hendrik-Ido-Ambacht
            </p>
            <h2 className="contact-info__title">
              Contact
            </h2>
            <p className="contact-info__text">
              Telefoon: 078 682 4977<br />
              Email: info@horecaslijperijbloom.nl
            </p>
          </div>
          <div className="contact-info__hours">
            <h2 className="contact-info__title">
              Openingstijden
            </h2>
            <div className="test">
              <p className="contact-info__text">Maandag:</p><p className="contact-info__text">9:00 - 17:00</p>
            </div>
            <div className="test">
              <p className="contact-info__text">Dinsdag:</p><p className="contact-info__text">9:00 - 17:00</p>
            </div>
            <div className="test">
              <p className="contact-info__text">Woensdag:</p><p className="contact-info__text">9:00 - 17:00</p>
            </div>
            <div className="test">
              <p className="contact-info__text">Donderdag:</p><p className="contact-info__text">9:00 - 17:00</p>
            </div>
            <div className="test">
              <p className="contact-info__text">Vrijdag:</p><p className="contact-info__text">9:00 - 15:30</p>
            </div>
            <div className="test">
              <p className="contact-info__text">Zaterdag:</p><p className="contact-info__text">Gesloten</p>
            </div>
            <div className="test">
              <p className="contact-info__text">Zondag:</p><p className="contact-info__text">Gesloten</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ContactInformation;
