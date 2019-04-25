import React from 'react';
import Link from 'next/link';

import './chef-knife-container.scss';
import KnifeInfo from '../knife-info/KnifeInfo'
import InfoSection from '../info-section/InfoSection'
import InfoSectionTest from '../info-section-test/InfoSectionTest'

class ChefKnifeContainer extends React.Component {
  render() {
    return (
      <div className="chef-knife__container">
        <InfoSectionTest
          infoTitle="KOKSMESSEN SLIJPEN"
          infoText="Er zijn veel verschillende soorten messen die koksmessen genoemd worden. Uiteraard slijpen wij al deze messen. Zowel de Westerse als de Oosterse messen worden met alle zorg en expertise behandeld. Naast het multifunctionele koksmes, slijpen wij ook uitbeenmessen, fileermessen, officemessen, tourneermessen, slagersmessen, hakmessen, kaaswiegen, broodmessen en natuurlijk tafelmessen. Een Usuba, Nakiri, Yanagiba, Takohiki, Santoku of Sushikiri kunt u gewoon bij ons inleveren en wij slijpen het lemmet weer naar perfecte scherpte. Wij letten bij ieder mes op de oorspronkelijke vorm en functie en slijpen deze op locatie weer naar de juiste scherpte. Ook voor een magimix of groentecutter bent u bij ons aan het juiste adres."
          //Of het nu gaat om koksmessen, brood(katrtel)messen, keukenmessen, tafelmessen of machinemessen, elk mes heeft zijn eigen specifieke vorm en functie. Omdat elke functie een verschillende gebruiksdiscipline vereist, is het van groot belang dat het mes ook na het slijpen zijn specifieke vorm en functie behoudt. Bovendien voorkomt het werken met echt scherpe messen een hoop ongerief en ergernis.
          src="../../static/photos/index/banner23.svg"
          alt="Koksmessen"
        />
        <ul className="chef-knife__list">
          <KnifeInfo
            title="KOKSMES"
            info="Een mes met een glad lemmet van ongeveer 20 a 26 centimeter, een multifunctionele alleskunner, welke gebruikt wordt voor alles van het hakken van kruiden, snijden van groenten tot het uitbenen van kip."
            photo="../../static/photos/chef-knives/Koksmessen.jpg"
          />
          <KnifeInfo
            title="FILEERMES"
            info="Een mes van ongeveer 15 centimeter met een glad lemmet, gebruikt voor het fileren van vlees, vis en gevogelte."
            photo="../../static/photos/chef-knives/Fileermessen.jpg"
          />
          <KnifeInfo
            title="BROODMES"
            info="Een groot mes met een gekarteld lemmet van ongeveer 21 centimeter, gebruikt voor het snijden van broden."
            photo="../../static/photos/chef-knives/Broodmessen2.jpg"
          />
          <KnifeInfo
            title="SLAGERSMES"
            info="Een groot mes met een lichtgekromd glad lemmet van ongeveer 20 tot 26 centimeter, gebruikt voor het snijden van vlees met botten."
            photo="../../static/photos/chef-knives/Slagersmes2.jpg"
          />
          <KnifeInfo
            title="OFFICEMES"
            info="Klein mes met een glad lemmet van ongeveer 10 centimeter, gebruikt voor voornamelijk schillen, pellen en snijden van groenten en fruit."
            photo="../../static/photos/chef-knives/Officemes.jpg"
          />
          <KnifeInfo
            title="SCHILMES"
            info="Klein mes met een glad lemmet van ongeveer 6 a 8 centimeter, gebruikt voor schillen, pellen en snijden van aardappels, groenten en fruit."
            photo="../../static/photos/chef-knives/Schilmesjes.jpg"
          />
          <KnifeInfo
            title="JAPANS MES"
            info="Mes van harder staal dan westerse messen. Het afgebeelde mes is een 'Gyuto', de Japanse interpretatie van het Westerse koksmes."
            photo="../../static/photos/chef-knives/Japans_mes.jpg"
          />
          <KnifeInfo
            title="HAKMES"
            info="Een groot mes met glad lemmet van ongeveer 27 centimeter met als voornaamste gebruiksdoel het openbreken van karkassen, doorhakken van gewrichten en het snijden van vlees."
            photo="../../static/photos/chef-knives/Hakmes.jpg"
          />
        </ul>
      </div>
    );
  }
}

export default ChefKnifeContainer;
