// Initialise variables 
let userName = 'Nick';
const userQuestion = 'Is Boris Johnson A Helmet?';
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

// If the user enters a name assign to userName, else, say hello.
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

// Log to the console the question the user asked
console.log(`${userName} asked: ${userQuestion}`);

// Switch to control the message output based on the random number value
switch (randomNumber) {
  case 0:
    eightBall = 'Abso Frikkin Lutely';
    break;
  case 1:
    
    eightBall = 'Pretty sure homie';
    break;
  case 2:
    eightBall = 'Mmm, not sure. Try again';
    break;
  case 3:
    eightBall = 'Ask me Later';
    break;
  case 4:
    eightBall = 'Not Today';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Some would say no';
    break;
   case 7:
    eightBall = 'Ding, Ding, Ding, Ding. We have a winner';
    break;
  default:
  //if no values match output this message
console.log(`There appears to be a problem ${userName}! Please contact either ball customer services.`);
}
// print out the message stored within the eightBall variable
console.log(eightBall);
