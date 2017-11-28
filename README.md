# Utilities for Generating Bitcoin and Ethereum Wallet addresses

## Installation

### Pre-requisites

You should have node and npm installed

### Build

$ npm install

## Generate many Bitcoin addresses from mnemonics

Use node utils/generate_btc.js command. 
It generates many addresses from mnemonics

````
$ node utils/generate_btc.js
Enter your mnemonic phrase or xpub key:traffic used dial lens keen birth surprise clean rookie horse jar fiber
Generating addresses for mnemonics: traffic used dial lens keen birth surprise clean rookie horse jar fiber
35oWRUGEbpyCYkQPD5mrjU3YzVmjNBZw3G
3AGiX8nfxnpX4aFCGWGrggxPMNgDTxa9TH
3BUcZWJyVrBTmt8HSC25tXiHRc7xDe2Gey
3GCz1CaRB6nyhkzBi1T6cTw8uxzELiVto3
3BVixqdjAiBJ12CesyZA1fShoadQLNSzut
3MtEbLvLnPHNDpW6zVF5ZiBd96Hqyp3V2T
3B14UwiBmCvsUPgVgqipeG8nL8M3XNWpzb
32hDYQRJ1vNYSjkW4NV4pw2vZNASogB8et
3BAMeJCFkRkArqZNacFGbtTmYrRa9drGpw
3Q5S4DvreHHcrVuzofhpuapj7dQm9yawe7
````

## Generate many Bitcoin addresses from xpub Public key

Use node utils/generate_btc.js command. 
It generates many addresses from xpub public key

````
$ node utils/generate_btc.js
Enter your mnemonic phrase or xpub key:xpub6ASuArnXKPbfEVRpCesNx4P939HDXENHkksgxsVG1yNp9958A33qYoPiTN9QrJmWFa2jNLdK84bWmyqTSPGtApP8P7nHUYwxHPhqmzUyeFG
Generating addresses for pubkey: xpub6ASuArnXKPbfEVRpCesNx4P939HDXENHkksgxsVG1yNp9958A33qYoPiTN9QrJmWFa2jNLdK84bWmyqTSPGtApP8P7nHUYwxHPhqmzUyeFG
0/1: 1LtD46KjEZcr4b28JJ5AoNHDE1eAtuWjSX
0/2: 1HjoBCnJxuuJTG5TVXAp8pQvKGY77d6AtE
0/3: 1NntKK9xAeNFgsbwvHouFWEiJrozGUjeHp
0/4: 1DvuU2ht6LHJ48boE4jzWzhRqYot9MBtBJ
0/5: 1Kvz85SAwLc1p37P3zifoWw2A7sVcLzzJn
0/6: 1PFqsGemmCGALtPzZPF36jx4cY5XbPcpdM
0/7: 1NL8LB6VXuqEFv3cbEHXS767mwjnc1oqab
0/8: 1Firydd61wghVfb1YxR9wQwCiPjFJdtd2H
0/9: 12CJyHdCAvLDbCbnNe8S6ZCYN8Wc9LtvkW
````

## Generate many Bitcoin addresses from multisig wallet public keys

Use node utils/multisig.js command. 
It generates many addresses from xpub public keys for multisig wallet

````
$ node utils/multisig.js
  Enter public keys one by one, and press ENTER at the end
  Enter public key #0:
  xpub.....
  Enter public key #1:
  xpub.....
  Enter public key #2:
  xpub.....
  Enter public key #3:
  xpub.....
  Enter public key #4:
  xpub.....
  Enter public key #5:
  
  Enter number of approvals (1-5):
  3
  ---------------------------------------
  Multisig 3 out of 5
  pubkey#0: xpub...
  pubkey#1: xpub...
  pubkey#2: xpub...
  pubkey#3: xpub...
  pubkey#4: xpub...
  0/1: 3PdKivJG77792M6FonEgNQ47nNmqpxQWVP
  0/2: 3Cw98SegHx59s8KuYjAhQa6yaaazFe1YGa
  0/3: 3Qyuyu5AwHRtuM2H2ReXSMhMgTxUxAVkTj
  0/4: 35EUuwususLQWHX3KS44EnC7ftd6unrjg6
  0/5: 3FLUtTytdtpXdQX1udtCpEYsG9Jz2E2Gqu
  0/6: 33sdsdd32uXSqSBK8BTesbcgxG2pmL3fuV
  0/7: 39kHhahG1fxHksrURrhtqenUnvDsTrUpmZ
  0/8: 3Gdsdsddd43wsfkshqaZiXzjXST6V4djHK
  0/9: 3QHwsdru4dh4gs3AZMphwduQFUcn4jrMSJ

````

## Generate many Ethereum addresses from mnemonics

Use node utils/generate_eth.js command. 
It generates many addresses from mnemonics

````
$ node utils/generate_eth.js
Enter your mnemonic phrase or xpub key:traffic used dial lens keen birth surprise clean rookie horse jar fiber
Generating addresses for mnemonics: traffic used dial lens keen birth surprise clean rookie horse jar fiber
0/0: 0xdfa5295c577aeb539f77b5ed5531298b468fa68d
0/1: 0xa0f522fc6780ce2d5668c73444455aba369afd30
0/2: 0x4b90457757935f49768d72970a472e4998bbc31d
0/3: 0xe83eef5c126b7362f41bf2c674a516385baad2c9
0/4: 0x2983e802a1a7e4edc7556b7c89b33fec6c0cee63
0/5: 0x987083ac110f7388d167c677a3a4bd66cc3ac758
0/6: 0x5ffc138ca8a5dafc562586db5c759dfab1317cf3
0/7: 0x635132d2fb68e3801e48441bb6499fff410dd55b
0/8: 0xeb89bc400111f3b10e34b4403d1a39c20cd4457b
0/9: 0x4b643f5d30b4d7712c514b5381b1583d3bb849ca
````


## Generate random Ethereum wallet address and key

Use node utils/wallet.js command. It generates a random private key, mnemonics and seed for the wallet

````
$ node utils/wallet.js
Mnemonics: traffic used dial lens keen birth surprise clean rookie horse jar fiber
Extended PK: xprv9s21ZrQH143K489oYskzwd6f77JWbi2UDDB8ud2DMND3FXtyXDgUr9z3M3q7mK4sGHMN2GuFQtnPM4QXoobQtL2yejah9vepxoSKoAAeY8E
pkey: 0x6fcd90f58a8ecbccfa2a4f59ba3f1d555c36a2e72e154a6f812629e65fd4ce11
Address: 0xdfa5295c577aeb539f77b5ed5531298b468fa68d

````