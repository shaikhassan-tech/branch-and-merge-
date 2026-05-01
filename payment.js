function checkout() {
    if (cart.length === 0) {
        alert("Cart is empty!");
        return;
    }

    let confirmPayment = confirm("Proceed to payment?");

    if (confirmPayment) {
        processPayment();
    }
}

function processPayment() {
    setTimeout(() => {
        alert("✅ Payment Successful!");

        // Clear cart
        cart = [];
        document.getElementById("cart-count").innerText = 0;
        document.getElementById("cart-items").innerHTML = "";
        document.getElementById("total").innerText = 0;
    }, 1000);
}