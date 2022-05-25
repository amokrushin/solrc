import { DateTime } from 'luxon';
import { MaybeDateTime } from '../types';
import { toLuxonDate } from './toLuxonDate';

const UTC_ZONE = 'UTC';

export const SolrDate = {
  encode(value: MaybeDateTime) {
    const date = toLuxonDate(value);
    return DateTime.isDateTime(date)
      ? date.setZone(UTC_ZONE).toISO()
      : undefined;
  },
  decode(value: string | null, zone = 'local') {
    return value ? DateTime.fromISO(value).setZone(zone) : null;
  },
};
