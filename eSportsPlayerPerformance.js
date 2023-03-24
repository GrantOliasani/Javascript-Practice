function playedInTournament(tournament, player){
    var players = tournament.players;
    for (let i = 0; i < players.length; i++) {
        var currentPlayer = players[i];
        if (currentPlayer == player) {
            return true;
        }
        
    }
    return false;
}

var tournaments = [
    {win: true, players: ['smirk', 'Grant', 'fly']},
    {win: true, players: ['superb', 'san', 'tired']},
    {win: true, players: ['smirk', 'knight', 'tired']},
    {win: false, players: ['san', 'superb', 'fly']},
    {win: true, players: ['smirk', 'san', 'fly']},
    {win: false, players: ['superb', 'knight', 'tired']},
]

function tournamentsPlayed(tournaments,player) {
    var playCount = 0;
    for (let i = 0; i < tournaments.length; i++) {
        var currentTournament = tournaments[i];
        var playerDidPlay = playedInTournament(currentTournament,player);
        if(playerDidPlay){
            playCount+=1;
        }
    }
    return playCount;
}

console.log(tournamentsPlayed(tournaments, 'Grant'));