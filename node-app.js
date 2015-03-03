var fs = require('fs');
eval(fs.readFileSync('cards.js')+'');

process.stdin.resume();
process.stdin.setEncoding('utf8');
var util = require('util');

var currentCard = 0;
var question = true;

var selectCard = function () {
  if(question) {
    console.log(CARDS[currentCard][2]);
  } else {
    console.log(CARDS[currentCard][0]);
    currentCard++;
  }
  question = !question;
};

selectCard();

process.stdin.on('data', selectCard);
