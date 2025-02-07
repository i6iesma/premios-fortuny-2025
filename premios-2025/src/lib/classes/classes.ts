export class Player {
  name: string;
  elo: number;
  score: number;

  constructor(name: string, elo: number) {
    this.name = name;
    this.elo = elo;
    this.score = 0;
  }
}

export class Pairing {
  player1: Player;
  player2: Player;

  constructor(player1: Player, player2: Player) {
    this.player1 = player1;
    this.player2 = player2;
  }

  setWinner(player: Player): void {
    if (player === this.player1) {
      this.player1.score++;
    } else if (player === this.player2) {
      this.player2.score++;
    }
  }
}

export class Round {
  pairings: Pairing[];

  constructor(pairings: Pairing[]) {
    this.pairings = pairings;
  }
}

export class Tournament {
  players: Player[];
  rounds: Round[];
  numberOfRounds: number;

  constructor(players: Player[], numberOfRounds: number) {
    this.players = players;
    this.numberOfRounds = numberOfRounds;
  }
  setPlayerScore(player: Player) {
    let playersCopy = JSON.parse(JSON.stringify(this.players));
    let playerToModify = playersCopy.find(player);
  }

  addRound(round: Round): void {
    this.rounds.push(round);
  }
}
