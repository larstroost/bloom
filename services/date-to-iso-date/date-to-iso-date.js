const dateToIsoDate = (date, time) => {
  const [day, month, year] = date.split('-');
  const timeFormatted = time.replace('.', ':');
  const dateInstance = new Date(`${year}-${month}-${day} ${timeFormatted}`);

  return dateInstance.toISOString();
};

export default dateToIsoDate;
