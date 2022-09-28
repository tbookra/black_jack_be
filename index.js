const express = require("express");
const app = express();

const cors = require("cors");
const PORT = 5050

const gameMovesRouter = require('./routes/game_moves')

app.use(
    cors({
      origin: "*",
      method: ["GET","POST","PUT","DELETE"],
      credentials:true
    })
    );
  app.use(express.json());

  app.get("/", (req, res) => {
    res.send("welcome to social server");
  });
  app.use('/game_moves',gameMovesRouter)

  app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
  });