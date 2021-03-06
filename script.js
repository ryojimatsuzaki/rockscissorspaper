const janken = () => {

  // Decide what number corresponds to which hand
  const ROCK = 1;
  const SCISSORS = 2;
  const PAPER = 3;

  // Enter the user's hand
  function getHumHand() {
    var hum = prompt('Please enter your hand from 1~3\n\n' + ROCK + ':rock\n' + SCISSORS + ':scissors\n' + PAPER + ':paper');
    hum = parseInt(hum, 10);
    if (hum !== ROCK && hum !== SCISSORS && hum !== PAPER) {
      return undefined;
    } else {
      return hum;
    };
  };

  //Decide the computer's hand
  function getComHand() {
    return Math.floor(Math.random() * 3) + 1;
  };

  //Get computer's hand name
  function getHandName(num) {
    switch (num) {
      case ROCK:
        return 'rock';
      case SCISSORS:
        return 'scissors';
      case PAPER:
        return 'paper';
    };
  };

  //Get the result
  function getResult(com, hum) {
    if (hum === com) {
      return 'It was a draw!';
    } else if ((com === ROCK && hum === PAPER || com === SCISSORS && hum === ROCK || com === PAPER && hum === SCISSORS)) {
      return 'You won!';
    } else {
      return 'You lost!';
    };
  };

  //Ultimate message 
  function getResultMsg(com, hum) {
    return getResult(com, hum) + 'The computer\'s hand was ' + getHandName(com) + ' !';
  };

  //Alert the ultimate message and print the result to the box
  var hum = getHumHand();
  if (!hum) {
    alert('Oops! You entered a wrong key. Please refresh the page and try again!');
  } else {
    var com = getComHand();
    alert(getResultMsg(com, hum));

    var result = document.getElementById('first-result');
    result.innerHTML = getResult(com, hum);
    
    var result2 = document.getElementById('second-result');
    result2.innerHTML = '残念でした！';
    
    /*
      if (getResult(com, hum) === '結果はあいこでした。') {
        //continue;
        var result2 = document.getElementById('second-result');
        result2.innerHTML = '残念でした！';
      } else {
        result2.innerHTML = '次です！';
      }*/
    
  /*
    //ここから繰り返しのコード
    var win = 0;
    var isLose = false;
    while (!isLose) {
      if (getResult(com, hum) === '結果はあいこでした。') {
        //continue;
        var result2 = document.getElementById('second-result');
        result2.innerHTML = '残念でした！';
      }
      
      if (getResult(com, hum) === '勝ちました。') {
        win++;
        //alert('ただいま「' + win + '」勝です。');
        //continue;
      }
      alert('連勝はストップです。記録は「' + win + '」勝でした。');
      
      isLose = true;
    }*/


    return getResult(com, hum);


  };


};