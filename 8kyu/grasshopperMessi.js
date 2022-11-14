/*
Grasshopper - Messi goals function
Messi goals function

Messi is a soccer player with goals in three leagues:

LaLiga
Copa del Rey
Champions
Complete the function to return his total number of goals in all three leagues.

Note: the input will always be valid.

For example:

5, 10, 2  -->  17
*/
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  // code goes here
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}
goals(5, 10, 2)

//reduce() method
// const goals = (...a) => a.reduce((s, v) => s + v, 0);

//Arrow version
// const goals = (laLigaGoals, copaDelReyGoals, championsLeagueGoals) => laLigaGoals + copaDelReyGoals + championsLeagueGoals;
// goals(5, 10, 2)
