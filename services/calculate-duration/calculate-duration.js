const calculateDuration = (startTime, stopTime) => (Date.parse(stopTime)
- Date.parse(startTime)) / 1000 / 60 / 60;

export default calculateDuration;
