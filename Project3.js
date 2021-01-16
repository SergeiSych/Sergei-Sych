const team = {
    _games: [
      {
        opponent: 'Milan',
        teamPoints: 21,
        opponentPoints: 27
      },
      { opponent: 'Barcelona',
        teamPoints: 40,
        opponentPoints: 17
      },
      {
        opponent: 'Belarus',
        teamPoints: 1,
        opponentPoints:25
      }
    ],
    _players: [
      {
        firstName: 'Nick',
        lastName: 'Gorynuch',
        age: 12
      },
      {
        firstName: 'Sergei',
        lastName: 'Cech',
        age: 15
      },
      {
        firstName: 'Roman',
        lastName: 'Abramchyk',
        age: 10
      }
    ],
  
    get players() {
      return this._players;
    },
  
   get games() {
     return this._games;
   },
  
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
  
    this.players.push(player);
  },
  
  addGame(oppName, points,oppPoints){
    const game = {
      oppName: oppName,     // maybe a mistake
      points: points,
      oppPoints: oppPoints
    }
    this.games.push(game);
  }
  };
  
  team.addPlayer('Steph','Curry',28);
  team.addPlayer('Lisa','Leslie',44);
  team.addPlayer('Bugs','Bunny',76);
  
  // console.log(team.players);
  
  team.addGame("Sea Lions", 50, 45);
  team.addGame("Wolves ", 650, 15);
  team.addGame("Tigers", 38, 10);
  
  console.log(team.games);
  
  
  