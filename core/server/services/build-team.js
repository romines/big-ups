var build = function(rankings) {

  var results = [];
  for (var i = 0; i < rankings.length; i++) {
    var rank = rankings[i];
    var chopped = rank.team.href.split('/');

    var team = {
      name: getFirstName(chopped[chopped.length -1], rank.team.text),
      nickname: rank.team.text,
      league: rank.url.slice(19,22),
      dead: chopped[chopped.length -2],
      rank: Number(rank.rank),
      wins: rank.wins,
      losses: rank.losses,
      imgPath: chopped[3] + '/' + chopped[7] + '.png'
    }
    results.push(team);
  }
  
  return results;

}
