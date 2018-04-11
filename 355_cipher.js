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
  const messageLength = message.length;
  const fullRepeats = Math.floor(messageLength / secret.length);
  const rest = messageLength % secret.length;
  this.secretKey = secret.repeat(fullRepeats) + secret.substr(0, rest);
  var self = this;

  return message.split('').reduce(function (result, letter, index){
    result = result ? result : '';
    const letterSecret = self.secretKey[index];
    const secretInd = self.alphabet.indexOf(letterSecret);
    return result + self.table[letter][secretInd];
  }, 0);
};

Cipher.prototype.decript = function(){

}

module.exports = Cipher;