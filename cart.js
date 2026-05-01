let cart = [];

function addToCart(name, price) {
    cart.push({ name, price });
    updateCartCount();
    alert(name + " added to cart!");
}

function updateCartCount() {
    document.getElementById("cart-count").innerText = cart.length;
}

function viewCart() {
    const cartSection = document.getElementById("cart-section");
    const cartItems = document.getElementById("cart-items");
    const totalElement = document.getElementById("total");

    cartSection.classList.remove("hidden");
    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach(item => {
        let li = document.createElement("li");
        li.innerText = `${item.name} - ₹${item.price}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    totalElement.innerText = total;
}