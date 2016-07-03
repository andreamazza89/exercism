var Bob = function() {};

Bob.prototype.hey = function(input) {

 
  if (!input.match(/\D*/) && input === input.toUpperCase()) {
    return 'Whoa, chill out!';
  } else if (input.match(/\?/)) {
    return 'Sure.';
  } else if (false) {
  } else {
    return 'Whatever.';
  }
}

module.exports = Bob;
