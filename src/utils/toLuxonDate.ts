import isDate from 'lodash/isDate';
import isNumber from 'lodash/isNumber';
import isString from 'lodash/isString';
import { DateTime } from 'luxon';
import { MaybeDateTime } from '../types';

export const toLuxonDate = (
  value: MaybeDateTime,
  { zone = 'local' } = {}
): DateTime | null => {
  if (!value) {
    return null;
  }
  if (DateTime.isDateTime(value)) {
    return value.setZone(zone);
  }
  if (isDate(value)) {
    return DateTime.fromJSDate(value, { zone });
  }
  if (isString(value)) {
    if (value === 'now') {
      return DateTime.local().setZone(zone);
    } else {
      return DateTime.fromISO(value, { zone });
    }
  }
  if (isNumber(value)) {
    return DateTime.fromMillis(value, { zone });
  }
  throw new Error(`Invalid date format: {${typeof value}} "${value}"`);
};
