$(document).ready(function() {
  var game = [];
  var user = [];
  var round = 0;
  var random;
  var active = 'true';
  var sounds = [
    new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'),
    new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'),
    new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'),
    new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3')
  ];

  $('#new').on('click', function() {
    startGame();
  });

  function startGame() {
    // reset and re-initialize everything
    game = [];
    user = [];
    round = 0;
    active = 'true';
    $('.counter').text(round);
    newRound();
  };

  function newRound() {
    // add random number to sequence
    randomNumber();
    // animate sequence
    numberToButton();
    // enable user interaction and register any clicks

    // if correct response and number of clicks is less than length of sequnce, wait for player input

    // repeat until user is wrong

  };

  function checkUser() {
    for (var i = 0; i < game.length; i++) {
      if (game[i] === user[i]) {
        console.log('correct');
        // randomNumber();
      }
    }
  };

  function endGame() {
    // if player misclicks, display game over message
    // stop game
  };

  function stopGame() {
    game = [];
    user = [];
    round = 0;
    active = 'false';
    $('.counter').text(0);
  }

  function randomNumber() {
    random = Math.floor((Math.random() * 4) + 1);
    numberToButton();
  };

  function numberToButton() {
    if (random === 1) {
      game.push('green');
      green();
    } else if (random === 2) {
      game.push('red');
      red();
    } else if (random === 3) {
      game.push('yellow');
      yellow();
    } else if (random === 4) {
      game.push('blue');
      blue();
    }
  };

  function green() {
    if (active) {
      // temporarily change color
      $('.green').css('background-color', 'green');
      // play audio
      sounds[0].play();
      // change color back
      setTimeout(function() {
        $('.green').css('background-color', '#00a74a');
      }, 400);
      // push to array
      user.push('green');
      // increase round counter
      round++;
      $('.counter').text(round);
      // check if user input is correct
      checkUser();
    }
  };

  function red() {
    if (active) {
      // temporarily change color
      $('.red').css('background-color', 'red');
      // play audio
      sounds[0].play();
      // change color back
      setTimeout(function() {
        $('.red').css('background-color', '#9f0f17');
      }, 400);
      // push to array
      user.push('red');
      // increase round counter
      round++;
      $('.counter').text(round);
      // check if user input is correct
      checkUser();
    }
  };

  function yellow() {
    if (active) {
      // temporarily change color
      $('.yellow').css('background-color', 'yellow');
      // play audio
      sounds[0].play();
      // change color back
      setTimeout(function() {
        $('.yellow').css('background-color', '#cca707');
      }, 400);
      // push to array
      user.push('yellow');
      // increase round counter
      round++;
      $('.counter').text(round);
      // check if user input is correct
      checkUser();
    }
  };

  function blue() {
    if (active) {
      // temporarily change color
      $('.blue').css('background-color', 'blue');
      // play audio
      sounds[0].play();
      // change color back
      setTimeout(function() {
        $('.blue').css('background-color', '#094a8f');
      }, 400);
      // push to array
      user.push('blue');
      // increase round counter
      round++;
      $('.counter').text(round);
      // check if user input is correct
      checkUser();
    }
  };

  $('.green').click(function() {
    green();
  });
  $('.red').click(function() {
    red();
  });
  $('.yellow').click(function() {
    yellow();
  });
  $('.blue').click(function() {
    blue();
  });
});
