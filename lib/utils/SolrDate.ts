import { DateTime }    from 'luxon';
import { toLuxonDate } from './toLuxonDate';

const UTC_ZONE = 'UTC';

export const SolrDate = {
    encode(value) {
        const date = toLuxonDate(value);
        return DateTime.isDateTime(date) ? date.setZone(UTC_ZONE).toISO() : undefined;
    },
    decode(value, zone = 'local') {
        return value ? DateTime.fromISO(value).setZone(zone) : null;
    },
};
