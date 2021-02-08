import { isNumber } from 'lodash';
import { isString } from 'lodash';
import { isDate }   from 'lodash';
import { DateTime } from 'luxon';


export const toLuxonDate = (value: any, { zone = 'local' } = {}): DateTime | null => {
    if (!value) {
        return null;
    }
    if (DateTime.isDateTime(value)) {
        return DateTime.setZone(zone);
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
