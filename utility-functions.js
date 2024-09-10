function display(message) {
  document.write(message)
}
function output(message) {
  
  window.outputTag.innerHTML = window.outputTag.innerHTML + message;
  
}
function ask(message) {
  var userText = prompt(message);
  var userNumber = Number(userText);
  var isNotNumber = isNaN(userNumber);
    if (isNotNumber){
      return userText;
    } else {
      return userNumber
    }
}