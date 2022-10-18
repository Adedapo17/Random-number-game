const playButton = document.querySelector('.btn');

playButton.addEventListener("click", () => {
    console.log("i was clicked");
    const playerName = prompt("Please enter username");
//  setCookie("username", playerName, 1);

 let point = 0;

 const guessingGame = (range) => {
    let point = 0;
    const guess = prompt(`Predict a number between 1 and ${range}`);
    const playerGuess = parseInt(guess);

    const rndGuess = Math.floor(Math.random() * range) + 1;
    // console.log(rndGuess);

    
    if (rndGuess === playerGuess) {
      point = point + 1;
    //   setCookie("point", point, 1);
      alert(`You won!, ${playerName}, You've scored ${point} point`);
      guessingGame(range + 1);
    } else {
      point = 0;
      alert("You lose!");
    }
  };
  console.log(point);
 guessingGame(2);
  });


  
  
  