import sanitizeHtml from 'sanitize-html';
import dayjs from 'dayjs';

/**
 * Sanitize Content
 * @param content any
 * @returns content any
 */
export const sanitizeContent = (content) => {
  if (typeof content === 'string') {
    return sanitizeHtml(content);
  }

  return content;
};

/**
 * Sanitize a Json Array
 * @param arrayOrObject Array or Object
 * @returns output Array or Object
 */
const sanitizeArrayObject = (arrayOrObject) => {
  const output = Array.isArray(arrayOrObject) ? [] : {};

  // loop for an array
  for (let key in arrayOrObject) {
    const item = arrayOrObject[key];
    if (typeof item === 'object' && item instanceof FormData) {
      output[key] = item;
    } else if (
      typeof item === 'object' &&
      item !== null &&
      dayjs.isDayjs(item)
    ) {
      output[key] = item;
    } else if (
      typeof item === 'object' &&
      item !== null &&
      typeof item.getMonth === 'function'
    ) {
      output[key] = item;
    } else if (
      Array.isArray(item) ||
      (typeof item === 'object' && item !== null)
    ) {
      output[key] = sanitizeArrayObject(item);
    } else {
      output[key] = sanitizeContent(item);
    }
  }

  return output;
};

export const sanitizeData = (inputVal) => {
  try {
    if (typeof inputVal === 'object' && inputVal instanceof FormData) {
      return inputVal;
    }

    if (
      Array.isArray(inputVal) ||
      (typeof inputVal === 'object' && inputVal !== null)
    ) {
      return sanitizeArrayObject(inputVal);
    }

    return sanitizeContent(inputVal);
  } catch (e) {
    console.log('parse error', e);
  }
};

export const isRequestSuccessful = (code) => {
  return code >= 200 && code <= 204;
};

export const isEmptyObject = (obj = {}) => {
  for (const key in obj) {
    // eslint-disable-next-line no-prototype-builtins
    if (obj?.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
};
