var bitcoin = require('bitcoinjs-lib');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: false
});

rl.on('line', readLine);


function convert_path(pub_key, path){

    var hdNode = bitcoin.HDNode.fromBase58(pub_key);
    var key1 = hdNode.derivePath(path);
    return key1.getPublicKeyBuffer();
}


function script_address(pub58keys, num, path){

    var  pubKeys = pub58keys.map(function (xpub) {
        return convert_path(xpub, path);
    });

    pubKeys = pubKeys.sort(function(a, b) {
        var av = parseInt(a.toString("Hex"), 16);
        var bv = parseInt(b.toString("Hex"), 16);
        if(av>bv){
            return 1;
        }else if(bv>av){
            return -1;
        }else{
            return 0
        }
    });


    var redeemScript = bitcoin.script.multisig.output.encode(num, pubKeys);
    var scriptPubKey = bitcoin.script.scriptHash.output.encode(bitcoin.crypto.hash160(redeemScript));
    return bitcoin.address.fromOutputScript(scriptPubKey, bitcoin.networks.bitcoin);
}



var pub58keys  = [];
var num = 0;
var pubkeys_entering = true;


function printRequisites(){
    console.log('---------------------------------------');
    console.log("Multisig "+num+" out of "+pub58keys.length);

    for(var i=0;i<pub58keys.length;i++){
        console.log('pubkey#'+i+': '+pub58keys[i]);
    }

}

function printAddresses(){
    for(i=1;i<10;i++){
        var path = '0/'+i;
        var addr = script_address(pub58keys, num, path);
        console.log(path + ": "+addr);
    }
}

console.log('Enter public keys one by one, and press ENTER at the end');
console.log('Enter public key #'+pub58keys.length+':');

function readLine(line){

    if(pubkeys_entering && line.length==0){
        pubkeys_entering = false;
    }else if(pubkeys_entering){
        pub58keys.push(line);
    }else{
        num = parseInt(line, 10);
        printRequisites();
        printAddresses();
        process.exit();
    }

    if(pubkeys_entering && pub58keys.length>0)
        console.log('Enter public key #'+pub58keys.length+':');
    else
        console.log('Enter number of approvals (1-'+pub58keys.length+'):');



}
