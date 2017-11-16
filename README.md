# Utilities for blockhain usage

## Installation

### Pre-requisites

You should have node and npm installed

### Build

$ npm install

## Generate many Bitcoin addresses from mnemonics

Use node utils/generate.js command. 
It generates many addresses from mnemonics

````
$ node utils/generate.js
Enter your mnemonic phrase:traffic used dial lens keen birth surprise clean rookie horse jar fiber
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

## Generate random Ethereum wallet address and key

Use node utils/wallet.js command. It generates a random private key, mnemonics and seed for the wallet

````
$ node utils/wallet.js
Mnemonics: traffic used dial lens keen birth surprise clean rookie horse jar fiber
Extended PK: xprv9s21ZrQH143K489oYskzwd6f77JWbi2UDDB8ud2DMND3FXtyXDgUr9z3M3q7mK4sGHMN2GuFQtnPM4QXoobQtL2yejah9vepxoSKoAAeY8E
pkey: 0x6fcd90f58a8ecbccfa2a4f59ba3f1d555c36a2e72e154a6f812629e65fd4ce11
Address: 0xdfa5295c577aeb539f77b5ed5531298b468fa68d

````