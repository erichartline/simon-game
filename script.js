$(document).ready(function() {
  // initialize necessary variables
  var colors = ['green', 'red', 'yellow', 'blue'];
  var game = [];
  var user = [];
  var round = 0;
  var random;
  var strict = false;
  var sounds = {
    green: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3'),
    red: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3'),
    blue: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3'),
    yellow: new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3')
  };

  // start game on click
  $('#new').on('click', function() {
    $(".basic").hide();
    changeMode();
    startGame();
  });

  function startGame() {
    // reset and re-initialize everything
    game = [];
    user = [];
    round = 0;
    active = true;
    $('.counter').html(1);
    newRound();
  };

  function newRound() {
    // add random number to sequence
    randomNumber();
    // animate sequence
    compMoves();
    // enable user interaction and register any clicks
    checkUser();
  };

  // get random move from computer
  function randomNumber() {
    // increase round number
    round++;
    $('.counter').html(round);
    // push new color to array
    game.push(colors[(Math.floor(Math.random() * 4))]);
    // play the computer's move
    compMoves();
  };

  // loop through computer array and display button presses with an interval
  function compMoves() {
    $(".basic").hide();
    var i = 0;
    var moves = setInterval(function() {
      console.log(game[i]);
      if (game[i] === 'green') {
        green();
      } else if (game[i] === 'red') {
        red();
      } else if (game[i] === 'yellow') {
        yellow();
      } else if (game[i] === 'blue') {
        blue();
      }
      i++;
    }, 1000);
    // reset user's moves
    user = [];
  }

  function checkUser() {
    if (user.join('') !== game.slice(0, user.length).join('')) {
      if (strict) {
        $('.basic').html('You Lost!');
        $('.basic').show();
      } else {
        $('.basic').html('Try Again');
        $('.basic').show();
        setTimeout(function() {
          compMoves();
        }, 1500);
      }
    } else if (user.length === game.length) {
      if (round === 20) {
        $('.basic').html('You won!');
      } else {
        $('.counter').html(round);
        user = [];
        console.log('correct move');
        setTimeout(function() {
          newRound();
        }, 1000);
      }
    }
  };

  // determine if mode is strict
  function changeMode() {
    // if clicked, change mode to strict
    if ($('#strict').is(':checked')) {
      strict = true;
    } else {
      strict = false;
    }
  };

  function green() {
      // temporarily change color
      $('.green').css('background-color', 'green');
      // play audio
      sounds.green.play();
      // change color back
      setTimeout(function() {
        $('.green').css('background-color', '#00a74a');
      }, 400);
  };

  function red() {
      // temporarily change color
      $('.red').css('background-color', 'red');
      // play audio
      sounds.red.play();
      // change color back
      setTimeout(function() {
        $('.red').css('background-color', '#9f0f17');
      }, 400);
  };

  function yellow() {
      // temporarily change color
      $('.yellow').css('background-color', 'yellow');
      // play audio
      sounds.yellow.play();
      // change color back
      setTimeout(function() {
        $('.yellow').css('background-color', '#cca707');
      }, 400);
  };

  function blue() {
      // temporarily change color
      $('.blue').css('background-color', 'blue');
      // play audio
      sounds.blue.play();
      // change color back
      setTimeout(function() {
        $('.blue').css('background-color', '#094a8f');
      }, 400);
  };

  $('.green').click(function() {
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
      // check if user input is correct
      checkUser();
  });

  $('.red').click(function() {
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
      // check if user input is correct
      checkUser();
  });
  $('.yellow').click(function() {
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
      // check if user input is correct
      checkUser();
  });
  $('.blue').click(function() {
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
      // check if user input is correct
      checkUser();
  });
});
