export const getTotalFollowers = (arr) => {
  let total = 0;
  arr.forEach((platform) => (total += platform.followers));
  return total;
};
