import { Tournament, Pairing, Player, Round } from "./classes/classes";

export function swissPairing(tournament: Tournament) {
  // tournament.rounds.forEach(){
  // sortPlayersByScore()
  // pairPlayers()
  // }
  tournament.players[2].score = 1;
  tournament.players[1].score = 0.5;
  sortPlayersByScore(tournament.players);
  return tournament;
}

function sortPlayersByScore(players: Player[]) {
  players.sort((player1, player2) => player2.score - player1.score);
}

function pairPlayers(players: Player[]): Pairing[] {
  let pairings: Pairing[] = [];
}
