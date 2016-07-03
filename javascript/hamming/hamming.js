var Hamming = function() {};

Hamming.prototype.compute = function(strandA, strandB) { 

  
  strandArray = strandA.split('');
  strandBrray = strandB.split('');

  if (strandArray.length !== strandBrray.length) throw 'DNA strands must be of equal length.'

  var distance = 0;
  
  for (i = 0; i < strandA.length; i++) {
    if (strandArray[i] !== strandBrray[i]) { distance++ };
  };
  
  return distance;
};

module.exports = Hamming;
