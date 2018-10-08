import dateToIsoDate from '../date-to-iso-date';

test('dateToIsoDate', () => {
  expect(dateToIsoDate('16-08-2018', '17:00')).toBe('2018-08-16T15:00:00.000Z');
});
