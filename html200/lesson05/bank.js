let balance = 1000;

function bankApp() {
  input = prompt('Welcome to the Bank ... Enter D to Deposit, Enter W to Withdraw, Enter B to View Balance, and Enter Q to Quit the App');
  // input = prompt('Welcome to the Bank ... Enter D to Deposit, Enter W to Withdraw, Enter B to View Balance, and Enter Q to Quit the App');

  switch(input) {

    case input = 'd':
      dAmt = prompt('How much would you like to Deposit?');
      balance = parseInt(dAmt) + balance;
      alert('Your balance is ' + balance);
      bankApp();
      break;

    case input = 'w':
      wAmt = prompt('How much would you like to Withdraw?')
      balance = balance - parseInt(wAmt);
      alert('Your balance is ' + balance);
      bankApp();
      break;
//
    case input = 'b':
      alert('Your balance is ' + balance);
      bankApp();
      break;
//
    case input = 'q':
      alert('You are quitting the Bank App. Your final balance is ' + balance);
      break;

    default:
      alert('Please enter a valid reponse');
      bankApp()
}
}
// switch
//
//   case input = 'd':
//     input = prompt ('How much would you like to deposit?')
