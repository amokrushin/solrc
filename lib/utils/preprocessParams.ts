import isBoolean from 'lodash/isBoolean';
import mapValues from 'lodash/mapValues';

/**
 * @param {any} params
 * @returns {any}
 * @ignore
 */
function preprocessParams(params) {
    return mapValues(params, (value) => {
        if (isBoolean(value)) {
            return value ? 'true' : 'false';
        }
        return value;
    });
}

export default preprocessParams;
