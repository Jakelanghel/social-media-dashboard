export const getStatTitle = (statKey) => {
  // Create an array from the key of each stat
  let arr = Array.from(statKey);
  let title = "";
  // loop over each char in title looking for capital letter indicating a space is needed
  arr.forEach((char) => {
    char === char.toLowerCase() ? (title += char) : (title += " " + char);
  });
  return title;
};
