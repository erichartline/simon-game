$(document).ready(function() {
  var colors = ['green', 'red', 'yellow', 'blue'];
  var game = [];
  var user = [];
  var round = 0;
  var random;
  var active = true; // change to false after testing
  var sounds = {
    green: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'),
    red: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'),
    blue: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'),
    yellow: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3')
  };

  $('#new').on('click', function() {
    startGame();
  });

  $('#stop').on('click', function() {
    stopGame();
  });

  function startGame() {
    // reset and re-initialize everything
    game = [];
    user = [];
    round = 0;
    active = true;
    $('.counter').html(round);
    newRound();
  };

  function newRound() {
    // add random number to sequence
    randomNumber();
    // animate sequence
    numberToButton();
    // enable user interaction and register any clicks
    checkUser();
    // if correct response and number of clicks is less than length of sequnce, wait for player input

    // repeat until user is wrong

  };

  function checkUser() {
    if (user.join('') !== game.slice(0, user.length).join('')) {
      // $('.counter').html('game over');
      console.log('game over');
    } else if (user.length === game.length) {
      round++;
      $('.counter').html(round);
      user = [];
      console.log('same length');
      setTimeout(function() {
        newRound();
      }, 1000);
    } // enter conditionals for strict mode?
  };

  // find way to set interval

  function stopGame() {
    game = [];
    user = [];
    round = 0;
    active = false;
    $('.counter').html(0);
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

  // add strict mode option
  function changeMode() {

  };

  function green() {
    if (active) {
      // temporarily change color
      $('.green').css('background-color', 'green');
      // play audio
      sounds.green.play();
      // change color back
      setTimeout(function() {
        $('.green').css('background-color', '#00a74a');
      }, 400);
      // increase round counter
      round++;
      $('.counter').html(round);
      // check if user input is correct
      checkUser();
    }
  };

  function red() {
    if (active) {
      // temporarily change color
      $('.red').css('background-color', 'red');
      // play audio
      sounds.red.play();
      // change color back
      setTimeout(function() {
        $('.red').css('background-color', '#9f0f17');
      }, 400);
      // increase round counter
      round++;
      $('.counter').html(round);
      // check if user input is correct
      checkUser();
    }
  };

  function yellow() {
    if (active) {
      // temporarily change color
      $('.yellow').css('background-color', 'yellow');
      // play audio
      sounds.yellow.play();
      // change color back
      setTimeout(function() {
        $('.yellow').css('background-color', '#cca707');
      }, 400);
      // increase round counter
      round++;
      $('.counter').html(round);
      // check if user input is correct
      checkUser();
    }
  };

  function blue() {
    if (active) {
      // temporarily change color
      $('.blue').css('background-color', 'blue');
      // play audio
      sounds.blue.play();
      // change color back
      setTimeout(function() {
        $('.blue').css('background-color', '#094a8f');
      }, 400);
      // increase round counter
      round++;
      $('.counter').html(round);
      // check if user input is correct
      checkUser();
    }
  };

  $('.green').click(function() {
    if (active) {
      // temporarily change color
      $('.green').css('background-color', 'green');
      // play audio
      sounds.green.play();
      // change color back
      setTimeout(function() {
        $('.green').css('background-color', '#00a74a');
      }, 400);
      // push to array
      user.push('green');
      // increase round counter
      round++;
      $('.counter').html(round);
      // check if user input is correct
      checkUser();
    }
  });

  $('.red').click(function() {
    if (active) {
      // temporarily change color
      $('.red').css('background-color', 'red');
      // play audio
      sounds.red.play();
      // change color back
      setTimeout(function() {
        $('.red').css('background-color', '#9f0f17');
      }, 400);
      // push to array
      user.push('red');
      // increase round counter
      round++;
      $('.counter').html(round);
      // check if user input is correct
      checkUser();
    }
  });
  $('.yellow').click(function() {
    if (active) {
      // temporarily change color
      $('.yellow').css('background-color', 'yellow');
      // play audio
      sounds.yellow.play();
      // change color back
      setTimeout(function() {
        $('.yellow').css('background-color', '#cca707');
      }, 400);
      // push to array
      user.push('yellow');
      // increase round counter
      round++;
      $('.counter').html(round);
      // check if user input is correct
      checkUser();
    }
  });
  $('.blue').click(function() {
    if (active) {
      // temporarily change color
      $('.blue').css('background-color', 'blue');
      // play audio
      sounds.blue.play();
      // change color back
      setTimeout(function() {
        $('.blue').css('background-color', '#094a8f');
      }, 400);
      // push to array
      user.push('blue');
      // increase round counter
      round++;
      $('.counter').html(round);
      // check if user input is correct
      checkUser();
    }
  });
});
