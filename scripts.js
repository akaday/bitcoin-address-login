document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('bitcoin-address-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const bitcoinAddress = document.getElementById('bitcoin-address').value;
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
        });
    }
});
