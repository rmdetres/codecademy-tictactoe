
function getUserChoice (userInput){
    userInput = userInput.toLowerCase();
    
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){
      return userInput;
        }  else {console.log('Error!');}   
    
    };
    
    function getComputerChoice(){
      var randomNumber = Math.floor(Math.random()*3);
      switch(randomNumber){
        case 0:
        return 'rock';
        break;
    
        case 1:
        return 'paper';
        break;
    
        case 2:
        return 'scissors';
        break;
      }
    };
    
    function determineWinner(userChoice,computerChoice){
    if(userChoice === computerChoice){
    console.log('its a tie!');
    }  if (userChoice === 'rock'){
      if(computerChoice === 'paper'){
        console.log('you lose!')
      }if(computerChoice === 'scissors'){
        console.log('you win!')
      }
    }
    if(userChoice === 'paper'){
      if(computerChoice === 'rock'){
        console.log('you win!');
      }if(computerChoice === 'scissors'){
        console.log('you lose!')
      }  
    }
    if (userChoice ==='scissors'){
      if(computerChoice === 'rock'){
        console.log('you lose!') }
        if(computerChoice === 'paper'){
        console.log('you win!') }
    }
    };
    
    function playGame(){
      var userChoice = getUserChoice('scissors');
      var computerChoice = getComputerChoice();
      console.log(userChoice);
      console.log(computerChoice);
      determineWinner(userChoice,computerChoice);
    }
     
     playGame();