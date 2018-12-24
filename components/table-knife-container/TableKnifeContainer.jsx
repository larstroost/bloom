import React from 'react';
import Link from 'next/link';

import './table-knife-container.scss';
import KnifeInfo from '../knife-info/KnifeInfo'
import InfoSection from '../info-section/InfoSection'

class TableKnifeContainer extends React.Component {
  render() {
    return (
      <div className="table-knife__container">
        <InfoSection
          infoTitle="Tafelmessen Informatie Pagina"
          infoText="Zoekt u speciaal vakmanschap om uw tafelmessen te slijpen? Wilt u uw dure bestek het liefst toevertrouwen aan het bedrijf met de meeste deskundigheid? Dan bent u bij Horecaslijperij Bloom BV aan het juiste adres. Al 30 jaar zijn wij bedreven in het slijpen van alle soorten messen. Het ene tafelmes is het andere niet en de ene gebruiker is ook anders dan de andere. Wij slijpen altijd precies op de manier zoals het hoort en houden daarbij altijd rekening met de eisen van de klant. Tafelmessen slijpen is geen sinecure. Het kan heel onprettig aanvoelen wanneer een mes net iets te bot of net iets te scherp is. Als één van de weinige bedrijven in Nederland kunnen wij snel al uw tafelmessen op locatie komen slijpen. Waar u bij andere bedrijven de messen een paar dagen kwijt bent, zorgen wij ervoor dat u uw messen niet hoeft te missen. Dat is de service waarmee wij uniek zijn en die de kracht van ons bedrijf vormt. Neem contact met ons op via de contactpagina als u vragen heeft of als u een afspraak wilt maken."
          src="../../static/photos/chef-knives/kitchen-knife.jpg"
          alt="Tafelmessen"
        />
        <ul className="table-knife__list">
          <KnifeInfo
            title="Tafelmes"
            info="Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren '60 populair geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten."
            photo="static/photos/chef-knives/knife-squared.jpg"
          />
          <KnifeInfo
            title="Tafelmes 2"
            info="Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren '60 populair geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten."
            photo="static/photos/chef-knives/knife-squared.jpg"
          />
          <KnifeInfo
            title="Tafelmes 3"
            info="Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren '60 populair geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten."
            photo="static/photos/chef-knives/knife-squared.jpg"
          />
          <KnifeInfo
            title="Tafelmes 4"
            info="Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren '60 populair geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten."
            photo="static/photos/chef-knives/knife-squared.jpg"
          />
          <KnifeInfo
            title="Tafelmes 5"
            info="Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren '60 populair geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten."
            photo="static/photos/chef-knives/knife-squared.jpg"
          />
          <KnifeInfo
            title="Tafelmes 6"
            info="Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren '60 populair geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten."
            photo="static/photos/chef-knives/knife-squared.jpg"
          />
          <KnifeInfo
            title="Tafelmes 7"
            info="Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren '60 populair geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten."
            photo="static/photos/chef-knives/knife-squared.jpg"
          />
          <KnifeInfo
            title="Tafelmes 8"
            info="Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren '60 populair geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten."
            photo="static/photos/chef-knives/knife-squared.jpg"
          />
        </ul>
      </div>
    );
  }
}

export default TableKnifeContainer;
