var Gigasecond = function(date) {
  this._date = date;
};

Gigasecond.prototype.date = function() {
  var seconds = this._date.getSeconds();
  var date = this._date;
  date.setSeconds(seconds + 1000000000)
  return date; 
};

module.exports = Gigasecond;
