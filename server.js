const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {
    const bitcoinAddress = req.body.bitcoinAddress;
    console.log('Bitcoin Address:', bitcoinAddress);
    res.json({ message: 'Bitcoin address received' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
