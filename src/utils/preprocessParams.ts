import isBoolean from 'lodash/isBoolean.js';
import mapValues from 'lodash/mapValues.js';

export interface Params {
  [k: string]: string | boolean | number;
}

/**
 * @param {any} params
 * @returns {any}
 * @ignore
 */
function preprocessParams(params: Params) {
  return mapValues(params, (value) => {
    if (isBoolean(value)) {
      return value ? 'true' : 'false';
    }
    return String(value);
  });
}

export default preprocessParams;
