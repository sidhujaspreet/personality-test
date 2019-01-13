export const isNullOrUndefnied = (value) => value === null || value === undefined;

export const isNullOrUndefniedOrEmpty = (value) => value === null || value === undefined || value === '';

export const isSafe = (value) => !isNullOrUndefnied(value);

export const arrayContains = (array, value) => array.indexOf(value) > -1;
