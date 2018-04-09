function Cipher(){
  this.alphabet = 'abcdefghijklmnopqrstuvwxyz';
  this.table = {};
  const alphabetLength = this.alphabet.length;
  
  for(var i = 0; i < alphabetLength; i++){
    var letter = this.alphabet[i];
    this.table[letter] = this.alphabet.substr(i) + this.alphabet.substr(0, i);
  }
};

Cipher.prototype.encrypt = function(secret, message){
  var messageLength = message.length;
  var fullRepeats = Math.floor(messageLength / secret.length);
  var rest = messageLength % secret.length;
  var secretKey = secret.repeat(fullRepeats) + secret.substr(0, rest);

  var cipheredMessage = '';
  for(var i = 0; i < messageLength; i++){
    var letterSecret = secretKey[i];
    var letterMessage = message[i];
    var secretInd = this.alphabet.indexOf(letterSecret);
    cipheredMessage += this.table[letterMessage][secretInd];
  }
  return cipheredMessage;
};

Cipher.prototype.decript = function(){

}

module.exports = Cipher;