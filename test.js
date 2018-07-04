const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();

const bc1 ={
    "chain": [
    {
    "index": 1,
    "timestamp": 1530696908417,
    "transactions": [],
    "nonce": 100,
    "hash": "0",
    "previousBlockHash": "0"
    },
    {
    "index": 2,
    "timestamp": 1530696929052,
    "transactions": [],
    "nonce": 18140,
    "hash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
    "previousBlockHash": "0"
    },
    {
    "index": 3,
    "timestamp": 1530696974728,
    "transactions": [
    {
    "amount": 12.5,
    "sender": "00",
    "recipient": "8aac71807f6d11e8a5ffa7a1eb4182df",
    "transactionId": "96b2c0607f6d11e8a5ffa7a1eb4182df"
    },
    {
    "amount": 200,
    "sender": "00GRFRFTRYRRTYFGB",
    "recipient": "00DF94548V3TYRTY4",
    "transactionId": "a8e123d07f6d11e8a5ffa7a1eb4182df"
    },
    {
    "amount": 40,
    "sender": "00GRFRFTRYRRTYFGB",
    "recipient": "00DF94548V3TYRTY4",
    "transactionId": "ac2f8b807f6d11e8a5ffa7a1eb4182df"
    },
    {
    "amount": 30,
    "sender": "00GRFRFTRYRRTYFGB",
    "recipient": "00DF94548V3TYRTY4",
    "transactionId": "ad737d307f6d11e8a5ffa7a1eb4182df"
    }
    ],
    "nonce": 9004,
    "hash": "000062aa8b6fa7c37738ae71519ff557a734e96bc45300f961182eb37c77ab7d",
    "previousBlockHash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100"
    },
    {
    "index": 4,
    "timestamp": 1530697010662,
    "transactions": [
    {
    "amount": 12.5,
    "sender": "00",
    "recipient": "8aac71807f6d11e8a5ffa7a1eb4182df",
    "transactionId": "b1e270107f6d11e8a5ffa7a1eb4182df"
    },
    {
    "amount": 60,
    "sender": "00GRFRFTRYRRTYFGB",
    "recipient": "00DF94548V3TYRTY4",
    "transactionId": "bbf294407f6d11e8a5ffa7a1eb4182df"
    },
    {
    "amount": 80,
    "sender": "00GRFRFTRYRRTYFGB",
    "recipient": "00DF94548V3TYRTY4",
    "transactionId": "bd25e4207f6d11e8a5ffa7a1eb4182df"
    },
    {
    "amount": 90,
    "sender": "00GRFRFTRYRRTYFGB",
    "recipient": "00DF94548V3TYRTY4",
    "transactionId": "bef1ca807f6d11e8a5ffa7a1eb4182df"
    },
    {
    "amount": 1450,
    "sender": "00GRFRFTRYRRTYFGB",
    "recipient": "00DF94548V3TYRTY4",
    "transactionId": "c1bb4ac07f6d11e8a5ffa7a1eb4182df"
    }
    ],
    "nonce": 5761,
    "hash": "00007c5350de0d6edb0ae136dd5724b4ade5e9a52e131eeb741bf3aa3bb15d15",
    "previousBlockHash": "000062aa8b6fa7c37738ae71519ff557a734e96bc45300f961182eb37c77ab7d"
    },
    {
    "index": 5,
    "timestamp": 1530697024929,
    "transactions": [
    {
    "amount": 12.5,
    "sender": "00",
    "recipient": "8aac71807f6d11e8a5ffa7a1eb4182df",
    "transactionId": "c74cebb07f6d11e8a5ffa7a1eb4182df"
    }
    ],
    "nonce": 59807,
    "hash": "0000050cb20cfb736d8c7fda714e1c7c80ad8fc4393aeec6e89dd8785481a757",
    "previousBlockHash": "00007c5350de0d6edb0ae136dd5724b4ade5e9a52e131eeb741bf3aa3bb15d15"
    },
    {
    "index": 6,
    "timestamp": 1530697030787,
    "transactions": [
    {
    "amount": 12.5,
    "sender": "00",
    "recipient": "8aac71807f6d11e8a5ffa7a1eb4182df",
    "transactionId": "cfd1b4f07f6d11e8a5ffa7a1eb4182df"
    }
    ],
    "nonce": 2956,
    "hash": "00009d2670888377d38928763eaa464b51e2a2196c1f02b6274264be81064238",
    "previousBlockHash": "0000050cb20cfb736d8c7fda714e1c7c80ad8fc4393aeec6e89dd8785481a757"
    }
    ],
    "pendingTransactions": [
    {
    "amount": 12.5,
    "sender": "00",
    "recipient": "8aac71807f6d11e8a5ffa7a1eb4182df",
    "transactionId": "d34b99707f6d11e8a5ffa7a1eb4182df"
    }
    ],
    "currentNodeUrl": "http://localhost:3001",
    "networkNodes": []
    }

console.log('VALID',bitcoin.chainIsValid(bc1.chain));