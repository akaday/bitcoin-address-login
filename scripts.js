document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('bitcoin-address-form');
    const errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const bitcoinAddress = document.getElementById('bitcoin-address').value;

        // Regular expression to validate Bitcoin address format
        const bitcoinAddressRegex = /^(1|3|bc1)[a-zA-Z0-9]{25,39}$/;

        if (!bitcoinAddressRegex.test(bitcoinAddress)) {
            errorMessage.textContent = 'Invalid Bitcoin address format.';
            return;
        }

        // Include the bitcoinjs-lib library to validate the Bitcoin address
        const bitcoin = require('bitcoinjs-lib');
        try {
            bitcoin.address.toOutputScript(bitcoinAddress);
        } catch (e) {
            errorMessage.textContent = 'Invalid Bitcoin address.';
            return;
        }

        sendBitcoinAddress(bitcoinAddress);
    });

    function sendBitcoinAddress(address) {
        fetch('/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ bitcoinAddress: address })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
            errorMessage.textContent = 'An error occurred while submitting the Bitcoin address.';
        });
    }
});
