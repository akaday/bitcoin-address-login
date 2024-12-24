function login() {
  const address = document.getElementById('bitcoin-address').value;
  if (validateBitcoinAddress(address)) {
    // Proceed with login
    alert('Login successful');
  } else {
    alert('Invalid Bitcoin address');
  }
}

function validateBitcoinAddress(address) {
  // Basic validation logic for Bitcoin addresses
  const regex = /^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$/;
  return regex.test(address);
}
