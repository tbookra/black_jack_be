const router = require("express").Router();
const gameMovesController = require("../controllers/game_moves_controller");

router.get("/", gameMovesController.getTest);

router.get("/new-game",gameMovesController.new_game)
router.get("/hit",gameMovesController.hit)

module.exports = router;
