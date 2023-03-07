export const roundNum = (num) => {
  num = num.toString();
  return num.length <= 4 ? num : `${num.slice(0, 2)}k`;
};
