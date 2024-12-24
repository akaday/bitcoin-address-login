const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');
const fs = require('fs');
const dotenv = require('dotenv');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const bitcoin = require('bitcoinjs-lib');

dotenv.config();

const app = express();
const port = 3000;

const sslOptions = {
    key: fs.readFileSync(process.env.SSL_KEY_PATH),
    cert: fs.readFileSync(process.env.SSL_CERT_PATH)
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());

const validateBitcoinAddress = (address) => {
    const regex = /^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$/;
    return regex.test(address);
};

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
});

app.post('/submit', limiter, (req, res) => {
    const bitcoinAddress = req.body.bitcoinAddress;
    if (!validateBitcoinAddress(bitcoinAddress)) {
        return res.status(400).json({ message: 'Invalid Bitcoin address' });
    }
    console.log('Bitcoin Address:', bitcoinAddress);
    res.json({ message: 'Bitcoin address received' });
});

app.post('/create-bitcoin-address', (req, res) => {
    const keyPair = bitcoin.ECPair.makeRandom();
    const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey });
    res.json({ address });
});

https.createServer(sslOptions, app).listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
