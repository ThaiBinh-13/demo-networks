import dayjs, { Dayjs } from 'dayjs';

export const DEFAULT_DATE_FORMAT = 'DD/MM/YYYY';
export const DEFAULT_TIME_FORMAT = 'hh:mm A';

export const toDateTime = (date?: string | number) => {
  const DATE_TIME_FORMAT = `${DEFAULT_DATE_FORMAT} - ${DEFAULT_TIME_FORMAT}`;
  switch (typeof date) {
    case 'number': {
      return dayjs.unix(date).format(DATE_TIME_FORMAT);
    }
    case 'string': {
      return dayjs(date).format(DATE_TIME_FORMAT);
    }
    case 'object': {
      if (dayjs.isDayjs(date)) {
        return dayjs(date as Dayjs).format(DATE_TIME_FORMAT);
      }
      throw new Error('Unknown date type');
    }
    default:
      throw new Error('Unknown date type');
  }
};

export const toDate = (date?: string | number) => {
  switch (typeof date) {
    case 'number': {
      return dayjs.unix(date).format(DEFAULT_DATE_FORMAT);
    }
    case 'string': {
      return dayjs(date).format(DEFAULT_DATE_FORMAT);
    }
    case 'object': {
      if (dayjs.isDayjs(date)) {
        return dayjs(date as Dayjs).format(DEFAULT_DATE_FORMAT);
      }
      throw new Error('Unknown date type');
    }
    default:
      throw new Error('Unknown date type');
  }
};
