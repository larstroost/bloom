import React from 'react';
import Link from 'next/link';

import './about-us-container.scss';
import InfoSection from '../info-section/InfoSection';
import InfoSectionReversed from '../info-section-reversed/InfoSectionReversed';
import Divider from '../divider/Divider';

class AboutUsContainer extends React.Component {
  render() {
    return (
      <div className="about-us__container">
        <InfoSection
          infoTitle="Wie zijn wij"
          infoText="Door de kennis en vaardigheid van het uitstekend opgeleide personeel te combineren met de in eigen beheer ontwikkelde slijpapparatuur, heeft Horeca Slijperij Bloom een kwalitatief zeer hoogwaardig slijpproces ontwikkeld. Hierdoor hebben wij een gevarieerd en vast klantenbestand met klanten door heel Nederland en Noord België weten op te bouwen."
          src="../../static/photos/about-us/PortretHJ3.png"
          alt="Snijplanken"
        />
        <Divider />
        <InfoSectionReversed
          infoTitle="Onze Geschiedenis"
          infoText="De messenslijperij van Dhr. Bloom is sinds 1985 een begrip in de horeca. Door de exclusieve opleidingen die Dhr. Bloom aan de beroemde Solingen Messerfabrieken in Duitsland heeft gevolgd, heeft hij de juiste kennis in huis om dit vakmanschap in Nederland uit te oefenen. Het bedrijf Bloom Staalwaren was gevestigd. Met twee externe slijpers in dienst, welke door Dhr. Bloom zijn opgeleid, slijpen zij de messen bij de klanten op lokatie. Vanaf 1 januari 2006 voert dit bedrijf verder onder de naam: Horeca Slijperij Bloom B.V. Hoewel Dhr. Bloom geen deel meer uitmaakt van de dagelijkse werkzaamheden, begeleidt hij nog wel de slijpers. Door de kennis en vaardigheid van het uitstekend opgeleide personeel te combineren met de in eigen beheer ontwikkelde slijpapparatuur, heeft Horeca Slijperij Bloom een kwalitatief zeer hoogwaardig slijpproces ontwikkeld. Hierdoor hebben wij een gevarieerd en vast klantenbestand met klanten door heel Nederland en Noord België weten op te bouwen."
          src="../../static/photos/about-us/SlijpenGrayScale-5x4.png"
          alt="Snijplanken"
        />
      </div>
    );
  }
}

export default AboutUsContainer;
