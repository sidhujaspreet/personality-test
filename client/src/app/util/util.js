export const isNullOrUndefnied = (value) => value === null || value === undefined;

export const isNullOrUndefniedOrEmpty = (value) => value === null || value === undefined || value === '';

export const isSafe = (value) => !isNullOrUndefnied(value);

export const arrayContains = (array, value) => array.indexOf(value) > -1;

export const groupBy = (array, groupByKey) => array.reduce((acc, current) => {
  acc[current[groupByKey]] = acc[current[groupByKey]] || [];
  acc[current[groupByKey]].push(current);
  return acc;
}, {});

export const updateArray = (actualArr, valueArr, attr) => {
  valueArr.forEach(ans => {
    let index = actualArr.map(i => i[attr]).indexOf(ans[attr]);
    index > -1 ? actualArr.splice(index, 1, ans) : actualArr.push(ans);
  });
  return actualArr;
};
