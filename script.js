var game = [];
var user = [];
var round = 0;
var random;
var active = 'true';
var mode = 'normal';
var sounds = [
  new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'),
  new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'),
  new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'),
  new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3')
];

$('#new').on('click', function() {
  startGame();
});

$('.green').click(function() {
  sounds[0].play();
});
$('.red').click(function() {
  sounds[1].play();
});
$('.yellow').click(function() {
  sounds[2].play();
});
$('.blue').click(function() {
  sounds[3].play();
});

function startGame() {
  var sequence = [];
  var copy = [];
  var round = 0;
  var active = 'true';
  var mode = 'normal';
  newRound();
};

function newRound() {
  // add random number to sequence
  randomNumber();
  // animate sequence
  // enable user interaction and register any clicks
  // if correct response and number of clicks is less than length of sequnce, wait for player input
  // repeat until user is wrong
};

function registerClick() {

};

function checkLose() {

};

function endGame() {

};

function changeMode() {

};

function stopGame() {
  var sequence = [];
  var copy = [];
  var round = 0;
  var active = 'true';
  var mode = 'normal';  
}

function animate() {

};

function lightUp() {

};

function playSound() {

};

function randomNumber() {
  random = Math.floor((Math.random() * 4) + 1);
  game.push(random);
  return random;
};

function numberToButton() {
  if (random === 1) {
    green();
  } else if (random === 2) {
    red();
  } else if (random === 3) {
    yellow();
  } else if (random === 4) {
    blue();
  }
}
