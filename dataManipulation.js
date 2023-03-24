var players = [
    {name: 'superb', skill: 3},
    {name: 'smirk', skill: 7},
    {name: 'tired', skill: 6},
    {name: 'ANS', skill: 9},
];

var playerAges = {
    superb: 21,
    smirk: 21,
    tired: 22,
    ANS: 21
};

function mergePlayersAndAges(allPlayers, ages){
    var playerData= [];
    for (let i = 0; i < allPlayers.length; i++) {
        const currPlayer = allPlayers[i];
        var newEntry = {
            name: currPlayer.name,
            skill: currPlayer.skill,
            age: ages[currPlayer.name]
        };
        playerData.push(newEntry);
    }
    return playerData;
}

function getSkilledPlayers(allPlayers) {
    var skilledPlayers= []; 
    for (let i = 0; i < allPlayers.length; i++) {
        const currentPlayer = allPlayers[i];
        if (currentPlayer.skill >= 5) {
            skilledPlayers.push(currentPlayer.name)
        }
    }

    return skilledPlayers;
}



console.log("This skilled players are "+getSkilledPlayers(players));
console.log(mergePlayersAndAges(players,playerAges))