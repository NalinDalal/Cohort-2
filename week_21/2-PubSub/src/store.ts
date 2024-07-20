interface Game {
  id: string;
  whitePlayer: string;
  blackPlayer: string;
  moves: string[];
}

export class GameManager {
  games: Game[] = [];
  private static instance: GameManager; //static attribute created, s0mething associated with class
  private constructor() {
    // Private constructor ensures that a new instance cannot be created from outside
    this.games = [];
  }

  static getInstance() {
    //see it create single instance for every time called
    if (GameManager.instance) {
      return GameManager.instance;
    }
    GameManager.instance = new GameManager();
    return GameManager.instance;
  }

  addMove(gameId: string, move: string) {
    console.log(`Adding ${move} to game ${gameId}`);
    const game = this.games.find((game) => game.id === gameId);
    game?.moves.push(move);
  }

  addGame(gameId: string) {
    const game = {
      id: gameId,
      whitePlayer: "Alice",
      blackPlayer: "Denzel",
      moves: [],
    };
    this.games.push(game);
  }

  log() {
    console.log(this.games);
  }
}

export const gameManager = GameManager.getInstance();
