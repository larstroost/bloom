import React from 'react';
import Link from 'next/link';

import './sciccors-container.scss';
import KnifeInfo from '../knife-info/KnifeInfo'
import InfoSection from '../info-section/InfoSection'

class SciccorsContainer extends React.Component {
  render() {
    return (
      <div className="sciccors__container">
        <InfoSection
          infoTitle="Scharen Informatie Pagina"
          infoText="Deze pagina moet veel tekst gaan bevatten over het slijpen van scharen. Buiten messen slijpt Horeca Slijperij Bloom ook scharen. Grote scharen, kleine scharen, botte scharen, minder scherpe scharen, scharen voor vlees, scharen voor takken, bomen, bladeren, groenten, plastic etc. Lever uw schaar in en wij slijpen het knipvlak weer scherp."
          src="../../static/photos/chef-knives/kitchen-knife.jpg"
          alt="Scissors"
        />
        <ul className="sciccors__list">
          <KnifeInfo
            title="Schaar"
            info="Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren '60 populair geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten."
            photo="static/photos/chef-knives/knife-squared.jpg"
          />
          <KnifeInfo
            title="Schaar 2"
            info="Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren '60 populair geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten."
            photo="static/photos/chef-knives/knife-squared.jpg"
          />
          <KnifeInfo
            title="Schaar 3"
            info="Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren '60 populair geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten."
            photo="static/photos/chef-knives/knife-squared.jpg"
          />
          <KnifeInfo
            title="Schaar 4"
            info="Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren '60 populair geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten."
            photo="static/photos/chef-knives/knife-squared.jpg"
          />
        </ul>
      </div>
    );
  }
}

export default SciccorsContainer;
