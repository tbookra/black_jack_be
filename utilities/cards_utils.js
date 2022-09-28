const newPackage = () => {
  let newPack = [];
  const CARDS_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  const CARDS_SYMBOLS = ["hearts", "diamonds", "clubs", "spades"];
  for (const symbol of CARDS_SYMBOLS) {
    for (const number of CARDS_NUMBERS) {
      newPack.push(`${symbol};${number}`);
    }
  }
  return newPack;
};



module.exports.newPackage = newPackage;
