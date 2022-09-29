const cardUtilities = require("../utilities/cards_utils");

// this is the array that contain the remaining cards in the pack for the game
let CARDS = cardUtilities.newPackage();

// the new game functionality
const new_game = (req, res) => {
  try {
    CARDS = cardUtilities.newPackage();
    const card1 = popCard();
    const card2 = popCard();
    const card3 = popCard();
    const card4 = popCard();
    res
      .status(200)
      .send({ success: { player: [card1, card2], dealer: [card3, card4] } });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

// the functionality for pulling one card from the pack
const hit = (req, res) => {
  try {
    const card = popCard();
    console.log(CARDS);
    res.status(200).send({ success: card });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

// the function for picking a random card of remaining cards in the pack, and popping it out of the stack.
const popCard = () => {
  const rand = getRandomArbitrary(CARDS.length - 1, 0);
  const popped = CARDS[rand];
  CARDS = CARDS.filter((card) => card !== popped);
  return popped;
};

// function for choosing a random number of the index or the remaining cards array.
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

module.exports.new_game = new_game;
module.exports.hit = hit;
