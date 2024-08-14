import { GameManager } from "./store";

export function startLogger() {
  setInterval(() => {
    console.log(GameManager.getInstance().log());
  }, 4000);
}
