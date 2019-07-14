import React from 'react';
import Link from 'next/link';

import './chef-knife-container.scss';
import KnifeInfo from '../knife-info/KnifeInfo'
import InfoSection from '../info-section/InfoSection'
import InfoHeader from '../info-header/InfoHeader'

class ChefKnifeContainer extends React.Component {
  render() {
    return (
      <div className="chef-knife__container">
        <InfoHeader
          infoTitle="KEUKENMESSEN SLIJPEN"
          infoText="Er zijn veel verschillende soorten messen die vallen onder de term keukenmessen. Westerse messen zoals het koksmes, fileermes, hakmes, kartel of broodmes en slagersmes. Japanse messen zoals Santuko, Deba en Gyuto. Uiteraard slijpen wij al deze messen. Zowel de Westerse als de Oosterse messen worden met alle zorg en expertise behandeld. Wij letten bij ieder mes op de oorspronkelijke vorm en functie en slijpen deze, op locatie, weer naar de perfecte scherpte. Ook voor een kaasmes, kaaswieg, pizzaroller, magimix of groentecutter bent u bij ons aan het juiste adres."
          src="../../static/photos/index/banner23.svg"
          alt="Banner"
        />
        <ul className="chef-knife__list">
          <KnifeInfo
            title="KOKSMES"
            info="Een mes met een glad lemmet van ongeveer 20 a 26 centimeter, een multifunctionele alleskunner, welke gebruikt wordt voor alles van het hakken van kruiden, snijden van groenten tot het uitbenen van kip."
            photo="../../static/photos/chef-knives/Koksmes.png"
          />
          <KnifeInfo
            title="FILEERMES"
            info="Een mes van ongeveer 15 centimeter met een glad lemmet, gebruikt voor het fileren van vlees, vis en gevogelte."
            photo="../../static/photos/chef-knives/Fileermes.png"
          />
          <KnifeInfo
            title="BROODMES"
            info="Een groot mes met een gekarteld lemmet van ongeveer 21 centimeter, gebruikt voor het snijden van broden."
            photo="../../static/photos/chef-knives/Broodmes.png"
          />
          <KnifeInfo
            title="SCHILMES"
            info="Klein mes met een glad lemmet van ongeveer 6 a 8 centimeter, gebruikt voor schillen, pellen en snijden van aardappels, groenten en fruit."
            photo="../../static/photos/chef-knives/Schilmes1.png"
          />
          <KnifeInfo
            title="OFFICEMES"
            info="Klein mes met een glad lemmet van ongeveer 10 centimeter, gebruikt voor voornamelijk schillen, pellen en snijden van groenten en fruit."
            photo="../../static/photos/chef-knives/Officemes2.png"
          />
          <KnifeInfo
            title="SLAGERSMES"
            info="Een groot mes met een lichtgekromd glad lemmet van ongeveer 20 tot 26 centimeter, gebruikt voor het snijden van vlees met botten."
            photo="../../static/photos/chef-knives/Slagersmes.png"
          />
          <KnifeInfo
            title="JAPANS MES"
            info="Mes van harder staal dan westerse messen. Het afgebeelde mes is een 'Gyuto', de Japanse interpretatie van het Westerse koksmes."
            photo="../../static/photos/chef-knives/Japans_mes.png"
          />
          <KnifeInfo
            title="TOMATENMES"
            info="Klein mes met een glad lemmet van ongeveer 6 a 8 centimeter, gebruikt voor schillen, pellen en snijden van aardappels, groenten en fruit."
            photo="../../static/photos/chef-knives/Tomatenmes.png"
          />
          <KnifeInfo
            title="HAKMES"
            info="Een groot mes met glad lemmet van ongeveer 27 centimeter met als voornaamste gebruiksdoel het openbreken van karkassen, doorhakken van gewrichten en het snijden van vlees."
            photo="../../static/photos/chef-knives/Hakmes.png"
          />
          <KnifeInfo
            title="MAGIMIX"
            info="Een groot mes met glad lemmet van ongeveer 27 centimeter met als voornaamste gebruiksdoel het openbreken van karkassen, doorhakken van gewrichten en het snijden van vlees."
            photo="../../static/photos/chef-knives/Magimix.png"
          />
        </ul>
      </div>
    );
  }
}

export default ChefKnifeContainer;
