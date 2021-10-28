import * as dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

/*
 * All times coming from the server side will be in UTC.
 * DO NOT manipulate the date time objects those time objects directly
 * The below functions should return a NEW DATE TIME OBJECT or formated string
 * Reference for available plugins: https://day.js.org/docs/en/plugin/plugin
 */

const example = () => {
  // add the utc plugin to the dayjs object
  dayjs.extend(utc);

  // add the timezone plugin to the dayjs object
  dayjs.extend(timezone);

  //creates a new dayjs date object
  const testTime = dayjs.utc();

  // use `format()` to print the full date object as a string
  console.log({
    utc: testTime.format(),
    nycTime: dayjs(testTime).tz('America/New_York').format(),
  });
};

export const getLocalTime = (date, timeZone) => {
  dayjs.extend(utc);
  dayjs.extend(timezone);
  return dayjs.utc(date).tz(timeZone);
};

export const getUTCTimeNow = () => {
  dayjs.extend(utc);
  return dayjs.utc();
};
