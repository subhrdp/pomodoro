const padZero = (number: number) => number.toString().padStart(2, '0');

function displayTime(milliseconds: number, includeHours: boolean = false) {
  const hours = padZero(Math.floor(milliseconds / 3600000));
  const minutes = padZero(Math.floor(milliseconds / 60000) % 60);
  const seconds = padZero(Math.floor(milliseconds / 1000) % 60);

  return `${includeHours ? hours + ':' : ''}${minutes}:${seconds}`;
}

export default displayTime;
