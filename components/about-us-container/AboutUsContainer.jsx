import React from 'react';
import Link from 'next/link';

import './about-us-container.scss';
import Divider from '../divider/Divider';

class AboutUsContainer extends React.Component {
  render() {
    return (
      <div className="about-us__container">
        <div>
          <h2 className="about-us__h2">
            Over ons
          </h2>
          <p className="about-us__p">
            Door de kennis en vaardigheid van het uitstekend opgeleide personeel te combineren met de in eigen beheer ontwikkelde slijpapparatuur, heeft Horecaslijperij Bloom een kwalitatief zeer hoogwaardig slijpproces ontwikkeld. Hierdoor hebben wij een gevarieerd en vast klantenbestand met klanten door heel Nederland en Noord België.
          </p>
        </div>
        <div className="about-us__photo-container">
          <img
            className="about-us__photo"
            src="../../static/photos/index/old-school-photo.jpg"
            alt="Cutting Board Before"
          />
          <img
            className="about-us__photo about-us__photo--middle"
            src="../../static/photos/about-us/polishing-knife.jpg"
            alt="Cutting Cut Off"
          />
          <img
            className="about-us__photo about-us__photo--last"
            src="../../static/photos/index/bussen-resize.png"
            alt="Cutting Board After"
          />
        </div>
        <div>
          <h2 className="about-us__h2">
            Onze geschiedenis
          </h2>
          <p className="about-us__p">
            In 1985 heeft de heer Bloom, nadat hij een exclusieve opleiding had genoten aan de beroemde Solingen Messerfabrieken in Duitsland, het bedrijf Bloom Staalwaren opgericht. De eerste jaren was hij te vinden op markten met een mobiele slijperij. Maar ook in zijn bedrijfspand was hij actief. In die tijd werd er nog veel zilverwerk verwerkt, waarbij niet alleen geslepen werd maar ook handvaten opnieuw aan het lemmet werden gezet. In 2006 is de het bedrijf verder gegaan onder de huidige naam: 'Horecaslijperij Bloom BV'. Zilverwerk is sindsdien wat naar de achtergrond geraakt.
            <br />
            Inmiddels rijden we met vijf mobiele slijpunits in heel Nederland. Ook kunnen wij u van dienst zijn in ons bedrijfspand in Hendrik Ido Ambacht, waar wij buiten het slijpen, u ook kunnen helpen met het vlakken van snijplanken.
          </p>
        </div>
        <img
          className="about-us__photo about-us__photo--mobile-only"
          src="../../static/photos/index/bussen-resize.png"
          alt="Cutting Board After"
        />
      </div>
    );
  }
}

export default AboutUsContainer;
