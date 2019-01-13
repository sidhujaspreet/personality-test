export const isNullOrUndefnied = (value) => value === null || value === undefined;

export const isNullOrUndefniedOrEmpty = (value) => value === null || value === undefined || value === '';

export const isSafe = (value) => !isNullOrUndefnied(value);

export const arrayContains = (array, value) => array.indexOf(value) > -1;

export const groupBy = (array, groupByKey) => array.reduce((acc, current) => {
  acc[current[groupByKey]] = acc[current[groupByKey]] || [];
  acc[current[groupByKey]].push(current);
  return acc;
}, {});
