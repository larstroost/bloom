import React from 'react';
import { shallow } from 'enzyme';

import Client from '../Client';

const client = {
  clientName: 'Hike One',
  kvkNumber: '69529760',
  remarks: 'Placeholder',
  address: 'Stationsplein 45',
  zip: '2521 CJ',
  city: 'Rotterdam',
  phoneNumber: '0634561860',
  email: 'larstroost@upcmail.nl',
  website: 'www.humanoids.nl',
  id: '2'
};


it('client should render without crashing', () => {
  const wrapper = shallow(
    <Client
      clientName={client.clientName}
      city={client.city}
      phoneNumber={client.phoneNumber}
      email={client.email}
      website={client.website}
      address={client.address}
      zip={client.zip}
      kvkNumber={client.kvkNumber}
      remarks={client.remarks}
    />
  );
  expect(wrapper).toMatchSnapshot();
});
