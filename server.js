const express = require('express');
const bodyParser = require('body-parser');
const bitcoin = require('bitcoinjs-lib');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {
    const bitcoinAddress = req.body.bitcoinAddress;

    try {
        bitcoin.address.toOutputScript(bitcoinAddress);
    } catch (e) {
        return res.status(400).json({ error: 'Invalid Bitcoin address' });
    }

    console.log('Bitcoin Address:', bitcoinAddress);
    res.json({ message: 'Bitcoin address received' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
