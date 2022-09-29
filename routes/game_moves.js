const router = require("express").Router();
const gameMovesController = require("../controllers/game_moves_controller");

router.get("/new-game", gameMovesController.new_game); // the route for starting a new game
router.get("/hit", gameMovesController.hit); // the route for hitting a card

module.exports = router;
