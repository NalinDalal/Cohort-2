import { GameManager } from "./store";
import { startLogger } from "./logger";

startLogger();

setInterval(() => {
  GameManager.getInstance().addGame(Math.random().toString());
}, 5000);
