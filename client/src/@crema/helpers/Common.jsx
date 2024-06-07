import { useIntl } from 'react-intl';

export const getBreakPointsValue = (valueSet, breakpoint) => {
  if (typeof valueSet === 'number') return valueSet;
  switch (breakpoint) {
    case 'xs':
      return valueSet.xs;
    case 'sm':
      return valueSet.sm || valueSet.xs;
    case 'md':
      return valueSet.md || valueSet.sm || valueSet.xs;
    case 'lg':
      return valueSet.lg || valueSet.md || valueSet.sm || valueSet.xs;
    default:
      return (
        valueSet.xl || valueSet.lg || valueSet.md || valueSet.sm || valueSet.xs
      );
  }
};

export const isEmpty = (obj) => {
  for (let key in obj) {
    // eslint-disable-next-line no-prototype-builtins
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
};

export const getFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes';
  let k = 1024,
    dm = 2,
    sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
    i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

export const multiPropsFilter = (products, filters, stringKey = 'title') => {
  const filterKeys = Object.keys(filters);
  return products.filter((product) => {
    return filterKeys.every((key) => {
      if (filters[key].length === 0) return true;
      // Loops again if product[key] is an array (for material attribute).
      if (Array.isArray(product[key])) {
        return product[key].some((keyEle) => filters[key].includes(keyEle));
      }
      if (filters[key]?.start || filters[key]?.end) {
        if (key === 'mrp') {
          return (
            product[key] >= filters[key].start &&
            product[key] < filters[key].end
          );
        } else {
          const start = new Date(filters[key].start).getTime();
          const end = new Date(filters[key].end).getTime();
          const productDate = new Date(product[key]).getTime();

          return productDate >= start && productDate <= end;
        }
      }
      if (key === stringKey) {
        return product[key].toLowerCase().includes(filters[key].toLowerCase());
      }
      return filters[key].includes(product[key]);
    });
  });
};

// 'intl' service singleton reference
let intl;

export function IntlGlobalProvider({ children }) {
  intl = useIntl();
  // Keep the 'intl' service reference
  return children;
}

export const appIntl = () => {
  return intl;
};

export const generateRandomUniqueNumber = () => {
  const numbers = [];
  const number = Math.floor(Math.random() * 100000000);

  if (numbers.includes(number)) {
    return generateRandomUniqueNumber();
  } else {
    return number;
  }
};
