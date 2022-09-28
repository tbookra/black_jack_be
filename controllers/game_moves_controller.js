const cardUtilities = require("../utilities/cards_utils");

let CARDS = cardUtilities.newPackage();

const getTest = (req, res) => {
  const card = popCard();
  res.status(200).send({ success: CARDS });
};
const new_game = (req, res) => {
  CARDS = cardUtilities.newPackage();
  const card1 = popCard();
  const card2 = popCard();
  const card3 = popCard();
  const card4 = popCard();
  res
    .status(200)
    .send({ success: { player: [card1, card2], dealer: [card3, card4] } });
};
const hit = (req, res) => {
  const card= popCard();
 console.log(CARDS);
  res
    .status(200)
    .send({ success: card });
};


const popCard = () => {
  const rand = getRandomArbitrary(CARDS.length - 1, 0);
  const popped = CARDS[rand];
  CARDS = CARDS.filter((card) => card !== popped);
  return popped;
};

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

module.exports.getTest = getTest;
module.exports.new_game = new_game;
module.exports.hit = hit;
