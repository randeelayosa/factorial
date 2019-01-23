$(document).ready(function() {
  var multiples = [];
  var factorial = 1;

  $("#factor-form").submit(function(event) {
  event.preventDefault();
  var userInput = parseInt($("#factorial").val());
  multiples.push(userInput);
  console.log(multiples)

  multiples.forEach(function(multiple) {
    factorial *= multiple;
  });
});
});






  //
  // $("#factor-form").submit(function(event) {
  // event.preventDefault();
  // var factorial = 1;
  // var multiples = [5,4,3,2,1];
  //
  // multiples.forEach(function(multiple) {
  //   factorial *= multiple;
  // });
