import React from 'react';
import Link from 'next/link';

import './cutting-boards-container.scss';
import InfoSection from '../info-section/InfoSection'
import InfoSectionReversed from '../info-section-reversed/InfoSectionReversed'

class CuttingBoardsContainer extends React.Component {
  render() {
    return (
      <div className="cutting-boards__container">
        <InfoSection
          infoTitle="Snijplanken Vlakken Informatie Pagina"
          infoText="Snijplanken vlakken is geen onbelangrijke zaak. Wanneer u uw kostbare snijplank, van welk materiaal dan ook, intensief gebruikt, veroorzaakt u hoe dan ook krassen. In deze krassen kunnen zich ongewenste bacteriën verzamelen. In onze mobiele werkplaats kunt u niet alleen uw dure messen laten slijpen, maar ook uw snijplanken laten bijwerken. Voor een scherpe prijs kunnen wij uw snijplanken vlakken. Dit houdt in dat we de snijplank volledig vlak en krasvrij maken, zodat ze weer aan de Europese HACCP-normen voldoen. Wanneer wij met onze bus bij u in de buurt zijn, kunt u van onze service gebruik maken. Wij rekenen nooit voorrijkosten. In de tijd dat wij uw snijplanken vlakken, ontvangt u van ons leenplanken zodat het werk gewoon door kan gaan. Dat is het voordeel van onze mobiele manier van werken en dus ook de kracht van het bedrijf. Bent u geïnteresseerd in onze service, maar heeft u nog vragen over bepaalde onderwerpen? Of wilt u een afspraak maken met onze professionele slijpers? Neem dan contact met ons op via de contactpagina. Wij helpen u graag verder!"
          src="../../static/photos/chef-knives/kitchen-knife.jpg"
          alt="Snijplanken"
        />
        <InfoSectionReversed
          infoTitle="Snijplanken Vlakken Informatie Pagina"
          infoText="Informatie over snijplanken vlakken."
          src="../../static/photos/chef-knives/kitchen-knife.jpg"
          alt="Snijplanken"
        />
      </div>
    );
  }
}

export default CuttingBoardsContainer;
