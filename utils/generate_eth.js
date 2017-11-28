var bip39 = require('bip39');
var hdkey = require('ethereumjs-wallet/hdkey');

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter your mnemonic phrase:', function(mnemonic){

    if(!bip39.validateMnemonic(mnemonic)){

        throw('Check mnemonics, it is wrong: '+ mnemonic);

    }else{

        console.log("Generating addresses for mnemonics: "+ mnemonic);

        var h = hdkey.fromMasterSeed(bip39.mnemonicToSeed(mnemonic));

        for(i=0;i<10;i++){
            var path = '0/'+i;
            var wallet = h.derivePath("m/44'/60'/0'/"+path).getWallet();
            console.log(path + ": "+wallet.getAddressString());
        }
    }



rl.close();
});


