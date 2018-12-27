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
            src="static/photos/index/locatie.png"
            alt="Locatie foto"
          />
          <Link href="https://www.google.com/maps/dir/51.8414336,4.6276608/bloom+horeca+slijperij/@51.8398494,4.6208692,16z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x47c42e80d213833b:0x5f3cd128335d056d!2m2!1d4.6220539!2d51.8393255">
            <a
              className="contact-info__link"
              target="_blank"
            >
              <img
                className="contact-info__map-photo"
                src="static/photos/index/maps.png"
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
              Bloom<br />
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
            <p className="contact-info__text">
              Maandag: 8:30 - 17:00<br />
              Dinsdag: 8:30 - 17:00<br />
              Woensdag: 8:30 - 17:00<br />
              Donderdag: 8:30 - 17:00<br />
              Vrijdag: 8:30 - 17:00<br />
              Zaterdag: Gesloten<br />
              Zondag: Gesloten
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default ContactInformation;