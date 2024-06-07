import dayjs from 'dayjs';
import AdvancedFormat from 'dayjs/plugin/advancedFormat'; // load on demand
import relativeTime from 'dayjs/plugin/relativeTime'; // load on demand
import localizedFormat from 'dayjs/plugin/localizedFormat'; // load on demand

dayjs.extend(localizedFormat);
dayjs.extend(AdvancedFormat); // use plugin
dayjs.extend(relativeTime); // use plugin

export const getDateObject = (dateObject) => {
  if (dateObject) return dayjs(dateObject);
  return dayjs();
};

export const getFormattedDate = (dateObject, format = 'MMM DD,YYYY') => {
  if (dateObject) return dayjs(dateObject).format(format);
  return '';
};

export const getCurrentMonthDate = (date, format = 'MMM DD,YYYY') => {
  if (date) return dayjs().date(date).format(format);

  return dayjs().format(format);
};

export const getFormattedDateTime = (
  value = 0,
  unit = 'days',
  format = 'MMM DD,YYYY',
) => {
  if (value === 0) {
    return dayjs().format(format);
  } else {
    return dayjs().add(value, unit).format(format);
  }
};

export const getTimeFromNow = (date) => {
  const timestamp = dayjs(date).format('X');
  const newDate = dayjs.unix(timestamp);
  return dayjs(newDate).fromNow();
};
