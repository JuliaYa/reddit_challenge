const Cipher = require('../355_cipher');

test('message "thepackagehasbeendelivered" with secret "snitch" return "lumicjcnoxjhkomxpkwyqogywq"', () => {
  var cipher = new Cipher();
  var encriptedMessage = cipher.encrypt('snitch', 'thepackagehasbeendelivered');
  expect(encriptedMessage).toBe('lumicjcnoxjhkomxpkwyqogywq');
});

// Challenge Inputs

test('message "theredfoxtrotsquietlyatmidnight" with secret "bond" return "uvrufrsryherugdxjsgozogpjralhvg"', () => {
  var cipher = new Cipher();
  var encriptedMessage = cipher.encrypt('bond', 'theredfoxtrotsquietlyatmidnight');
  expect(encriptedMessage).toBe('uvrufrsryherugdxjsgozogpjralhvg');
});

test('message "murderontheorientexpress" with secret "train" return "flrlrkfnbuxfrqrgkefckvsa"', () => {
  var cipher = new Cipher();
  var encriptedMessage = cipher.encrypt('train', 'murderontheorientexpress');
  expect(encriptedMessage).toBe('flrlrkfnbuxfrqrgkefckvsa');
});

test('message "themolessnuckintothegardenlastnight" with secret "garden" return "zhvpsyksjqypqiewsgnexdvqkncdwgtixkx"', () => {
  var cipher = new Cipher();
  var encriptedMessage = cipher.encrypt('garden', 'themolessnuckintothegardenlastnight');
  expect(encriptedMessage).toBe('zhvpsyksjqypqiewsgnexdvqkncdwgtixkx');
});