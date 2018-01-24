
function theBeatlesPlay(musicians, instruments) {
  let results = [];
  for ( let i = 0; i < musicians.length; i++ ) {
        results.push(musicians[i] + " plays " + instruments[i]);
      }
return results;
}
