var bitcoin = require('bitcoinjs-lib');
var bip39 = require('bip39');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter your mnemonic phrase:', function(mnemonic){

    if(!bip39.validateMnemonic(mnemonic)){
        console.log('WARNING! Your mnemonics is bad!')
    }else{
        console.log("Generating addresses for mnemonics: "+ mnemonic);

        var seed = bip39.mnemonicToSeed(mnemonic);
        var bitcoinNetwork = bitcoin.networks.bitcoin;

        var hdMaster = bitcoin.HDNode.fromSeedBuffer(seed, bitcoinNetwork);

        for(i=0;i<10;i++){
            var key1 = hdMaster.derivePath('m/44\'/0\'/0\'/0/'+i);
            console.log(key1.keyPair.getAddress());
        }
    }



rl.close();
});


