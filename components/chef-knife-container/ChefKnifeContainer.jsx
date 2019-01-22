import React from 'react';
import Link from 'next/link';

import './chef-knife-container.scss';
import KnifeInfo from '../knife-info/KnifeInfo'
import InfoSection from '../info-section/InfoSection'
import Divider from '../divider/Divider';

class ChefKnifeContainer extends React.Component {
  render() {
    return (
      <div className="chef-knife__container">
        <InfoSection
          infoTitle="Koksmessen Slijpen"
          infoText="Er zijn veel verschillende soorten messen die koksmessen genoemd worden. Uiteraard slijpen wij al deze messen. Zowel de Westerse als de Oosterse messen worden met alle zorg en expertise behandeld. Naast het multifunctionele koksmes, slijpen wij ook uitbeenmessen, fileermessen, officemessen, tourneermessen, slagersmessen, hakmessen, kaaswiegen, broodmessen en natuurlijk tafelmessen. Een Usuba, Nakiri, Yanagiba, Takohiki, Santoku of Sushikiri kunt u gewoon bij ons inleveren en wij slijpen het lemmet weer naar perfecte scherpte. Wij letten bij ieder mes op de oorspronkelijke vorm en functie en slijpen deze op locatie weer naar de juiste scherpte. Ook voor een magimix of groentecutter bent u bij ons aan het juiste adres"
          //Of het nu gaat om koksmessen, brood(katrtel)messen, keukenmessen, tafelmessen of machinemessen, elk mes heeft zijn eigen specifieke vorm en functie. Omdat elke functie een verschillende gebruiksdiscipline vereist, is het van groot belang dat het mes ook na het slijpen zijn specifieke vorm en functie behoudt. Bovendien voorkomt het werken met echt scherpe messen een hoop ongerief en ergernis.
          src="../../static/photos/chef-knives/kitchen-knife.jpg"
          alt="Koksmessen"
        />
        <Divider />
        <ul className="chef-knife__list">
          <KnifeInfo
            title="Koksmes"
            info="Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren '60 populair geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten."
            photo="static/photos/chef-knives/Koksmessen.jpg"
          />
          <KnifeInfo
            title="Fileermes"
            info="Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren '60 populair geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten."
            photo="static/photos/chef-knives/Fileermessen.jpg"
          />
          <KnifeInfo
            title="Broodmes"
            info="Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren '60 populair geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten."
            photo="static/photos/chef-knives/Broodmessen2.jpg"
          />
          <KnifeInfo
            title="Slagersmes"
            info="Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren '60 populair geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten."
            photo="static/photos/chef-knives/Slagersmes2.jpg"
          />
          <KnifeInfo
            title="Officemes"
            info="Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren '60 populair geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten."
            photo="static/photos/chef-knives/Officemes.jpg"
          />
          <KnifeInfo
            title="Schilmes"
            info="Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren '60 populair geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten."
            photo="static/photos/chef-knives/Schilmesjes.jpg"
          />
          <KnifeInfo
            title="Japans mes"
            info="Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren '60 populair geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten."
            photo="static/photos/chef-knives/Japans_mes.jpg"
          />
          <KnifeInfo
            title="Hakmes"
            info="Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren '60 populair geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten."
            photo="static/photos/chef-knives/Hakmes.jpg"
          />
        </ul>
      </div>
    );
  }
}

export default ChefKnifeContainer;
