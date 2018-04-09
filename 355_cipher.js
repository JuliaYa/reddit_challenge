function cipher(secret, message){
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const alphabetLength = alphabet.length;
  const table = {};


  for(var i = 0; i < alphabetLength; i++){
    var letter = alphabet[i];
    table[letter] = alphabet.substr(i) + alphabet.substr(0, i);
  }

  var messageLength = message.length;
  var fullRepeats = Math.floor(messageLength / secret.length);
  var rest = messageLength % secret.length;
  var secretKey = secret.repeat(fullRepeats) + secret.substr(0, rest);

  var cipheredMessage = '';
  for(var i = 0; i < messageLength; i++){
    var letterSecret = secretKey[i];
    var letterMessage = message[i];
    var secretInd = alphabet.indexOf(letterSecret);
    cipheredMessage += table[letterMessage][secretInd];
  }
  return cipheredMessage;
}

module.exports = cipher;