var bip39 = require('bip39');
var hdkey = require('ethereumjs-wallet/hdkey');

var mnemonic = bip39.generateMnemonic();
console.log("Mnemonics: "+mnemonic);

var h = hdkey.fromMasterSeed(bip39.mnemonicToSeed(mnemonic));
console.log("Extended PK: "+h.privateExtendedKey());

var wallet = h.derivePath("m/44'/60'/0'/0/0").getWallet();

console.log("pkey: "+ wallet.getPrivateKeyString());
console.log("Address: "+ wallet.getAddressString());
