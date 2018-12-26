import React from 'react';
import Link from 'next/link';

import './chef-knife-container.scss';
import KnifeInfo from '../knife-info/KnifeInfo'
import InfoSection from '../info-section/InfoSection'

class ChefKnifeContainer extends React.Component {
  render() {
    return (
      <div className="chef-knife__container">
        <InfoSection
          infoTitle="Koksmessen Slijpen"
          infoText="Er zijn veel verschillende soorten messen die koksmessen genoemd worden. Uiteraard slijpen wij al deze messen. Zowel de Westerse als de Oosterse messen worden met alle zorg en expertise behandeld. Naast het multifunctionele koksmes, slijpen wij ook uitbeenmessen, fileermessen, officiersmessen, tourneermessen, slagersmessen, hakmessen, oestermessen, kaasmessen, broodmessen en natuurlijk tafelmessen. Een Cai Dao, Deba, Usuba, Nakiri, Yanagiba, Takohiki, Hankotsu, Gyuto, Santoku of Sushikiri kunt u gewoon bij ons inleveren en wij slijpen het lemmet weer naar perfecte scherpte. Wij letten bij ieder mes op de oorspronkelijke vorm en functie en slijpen deze op locatie weer naar de juiste scherpte."
          src="../../static/photos/chef-knives/kitchen-knife.jpg"
          alt="Koksmessen"
        />
        <ul className="chef-knife__list">
          <KnifeInfo
            title="Koksmes"
            info="Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren '60 populair geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten."
            photo="static/photos/chef-knives/Chefknife_1_2.jpg"
          />
          <KnifeInfo
            title="Uitbeenmes"
            info="Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren '60 populair geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten."
            photo="static/photos/chef-knives/SmallKnife_2_1.jpg"
          />
          <KnifeInfo
            title="Fileermes"
            info="Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren '60 populair geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten."
            photo="static/photos/chef-knives/Filetknife_1_1.jpg"
          />
          <KnifeInfo
            title="Officieersmes"
            info="Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren '60 populair geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten."
            photo="static/photos/chef-knives/SmallKnife_1_1.jpg"
          />
          <KnifeInfo
            title="Tourneermes"
            info="Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren '60 populair geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten."
            photo="static/photos/chef-knives/knife-squared.jpg"
          />
          <KnifeInfo
            title="Slagersmes"
            info="Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren '60 populair geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten."
            photo="static/photos/chef-knives/knife-squared.jpg"
          />
          <KnifeInfo
            title="Broodmes"
            info="Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren '60 populair geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten."
            photo="static/photos/chef-knives/Breadknife_1_2.jpg"
          />
          <KnifeInfo
            title="Hakmes"
            info="Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren '60 populair geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten."
            photo="static/photos/chef-knives/knife-squared.jpg"
          />
        </ul>
      </div>
    );
  }
}

export default ChefKnifeContainer;
