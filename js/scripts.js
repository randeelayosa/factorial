$(document).ready(function() {
  var multiples = [];
  var factorial = 1;


  $("#factor-form").submit(function(event) {
  event.preventDefault();
  var userInput = parseInt($("#factorial").val());

  for (var i = userInput; i > 0; i--) {
    factorial *= i;
  }

  $("#result").append(factorial);
  $("#result").show();
  $("#factor-form").fadeToggle();

  console.log(userInput)
  console.log(factorial)

  });
});
