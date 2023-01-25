require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess glimpse flame suspect notice crime remember hospital hunt breeze off sight'; 
let testAccounts = [
"0x22e93040a6a556c31ad1050495ab07c41ce9c410bb02dee65f2d2899734d6f6e",
"0x976789bffe666b8495f185dd376342540e7ca55947a307577e2923d831ee14ac",
"0xd0bb66629b7650bff852ffb5a0ac5276c5516a6cf4210f1bf66d684b1b317b0a",
"0x1acdd0c74011a6967bb6f08b91c3825e1533a3779ac99defd9a3be481f710ab8",
"0x38f8edbd30e52112ff9cd92931ce1a2b7942929528f97f8c3268299b2c6f2095",
"0x910ce8bdb94ac05c1aab8084514eb7a9834e89fb8886e80151549a269524716e",
"0x509a91d55c7cd9461de04bec2c5360c50b94c40af6e361fa4159cc9abe0a2fcc",
"0x630fd6387586144fb3e841f1c6c153042d4392b0262808ad6a101424b3d5fe4c",
"0x20768699e034a94bb5431e62e7e4847fc04ead6f283318acad8ee168acb3f77c",
"0x90645754c7bbf3135fbc6d8bdd4fe4e3cc5a8f70519107e16fd4a5a60e098695"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

