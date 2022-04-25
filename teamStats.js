const team = {
  _players:[
    {firstName: 'Tylen', lastName: 'Bagley', age: 18},
    {firstName: 'Tyra', lastName: 'Bagley', age: 11},
    {firstName: 'Jessica', lastName: 'Azogue', age: 18}
  ],
  _games: [
    {opponent: 'Jets', teamPoints: 27, opponentPoints: 48},
    {opponent: 'Eagles', teamPoints: 30, opponentPoints: 53},
    {opponent: 'Steelers', teamPoints: 53, opponentPoints: 39}
  ],
  get players(){
    return this._players;
  },
  get games(){
    return this._games;
  },
  addPlayer(newFirstName, newLastName, newAge){
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge
    };
    this.players.push(player);
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints){
    let game ={
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints
    };
    this.games.push(game)
  }
};

team.addPlayer('Bugs', 'Bunny', 76)
console.log(team.players);

team.addGame('Titans', 100, 98)
console.log(team.games);




