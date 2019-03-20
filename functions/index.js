const functions = require('firebase-functions');
const fireinit = require('./fireinit');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// const config = {
//   dev: false,
//   buildDir: 'nuxt',
//   build: {
//     publicPath: '/'
//   }
// }
// const nuxt = new Nuxt(config);
exports.createGame = functions.firestore.document('games/{id}').onCreate((snap, context) => {
  const game = snap.data();
  if (game.id_season === 'WecIXZjJsJG46boTWI2p'){
    if (game.is_completed){
      let homeTeamId = game.home.id_team;
      let awayTeamId = game.away.id_team;
      console.log(game);
      console.log("homeTeamId: "+homeTeamId);
      console.log("awayTeamId: "+awayTeamId);
      var docRef = fireinit.DB.collection('seasons').doc('WecIXZjJsJG46boTWI2p');
      docRef.get().then(doc => {
        if (doc && doc.exists){
          let season = doc.data();
          console.log(season);
          var homeTeam = season.teams.find(team => team.id_team === homeTeamId);
          var awayTeam = season.teams.find(team => team.id_team === awayTeamId);
          console.log(homeTeam);
          if (game.home_score > game.away_score){
            //home is winner
            //update season table table
            homeTeam.won = parseInt(homeTeam.won) + 1;
            homeTeam.point = parseInt(homeTeam.won) + 3;
            awayTeam.lose += parseInt(awayTeam.lose) + 1;
          } else if (game.home_score === game.away_score){
            //draw
            homeTeam.draw = parseInt(homeTeam.draw) + 1;
            homeTeam.point = parseInt(homeTeam.point) + 1;
            awayTeam.draw = parseInt(awayTeam.draw) + 1;
            awayTeam.point = parseInt(awayTeam.point) + 1;
          } else if (game.home_score < game.away_score){
            //home is lost
            homeTeam.lose = parseInt(homeTeam.lose) + 1;
            awayTeam.won = parseInt(awayTeam.won) + 1;
            awayTeam.point = parseInt(awayTeam.point) + 3;
          }
          homeTeam.game_played = parseInt(homeTeam.game_played) + 1;
          homeTeam.goals_for = parseInt(homeTeam.goals_for) + parseInt(game.home_score);
          homeTeam.goals_against = parseInt(homeTeam.goals_against) + parseInt(game.away_score);
          awayTeam.game_played = parseInt(awayTeam.game_played) + 1;
          awayTeam.goals_for = parseInt(awayTeam.goals_for) + parseInt(game.away_score);
          awayTeam.goals_against = parseInt(awayTeam.goals_against) + parseInt(game.home_score);
          let newTeamResuls = [homeTeam, awayTeam];
          //update result
          let teamsObj = {teams:newTeamResuls};
          console.log(teamsObj);
          return docRef.update(Object.assign({}, teamsObj));
        }
      });

    }
  }
});
