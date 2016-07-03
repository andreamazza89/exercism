var DnaTranscriber = function() {};

var conversionTable = function(single_char) {

  var rules = { 
    C: 'G',
    G: 'C',
    A: 'U',
    T: 'A',
  };

  return rules[single_char];
}

DnaTranscriber.prototype.toRna = function(strand) {
  strandArray = strand.split('');
  convertedArray = strandArray.map(conversionTable);
  return convertedArray.join('');
}

module.exports = DnaTranscriber;
