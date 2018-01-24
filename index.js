
function theBeatlesPlay(musicians, instruments) {
  let results = [];
  for ( let i = 0; i < musicians.length; i++ ) {
        results.push(musicians[i] + " plays " + instruments[i]);
      }
return results;
}

const facts =[  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice" ];
var newFacts = [];

function johnLennonFacts(arr) {
  var count = 0;
  while (count < facts.length) {
    newFacts.push(facts[count] + "!!!");
    count++;
  }
};
