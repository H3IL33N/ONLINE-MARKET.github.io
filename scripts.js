// Carrito de compras usando localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];
updateCartDisplay();

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        const product = e.target.closest('.product');
        const id = product.dataset.id;
        const name = product.dataset.name;
        const price = parseFloat(product.dataset.price);
        
        const existingItem = cart.find(item => item.id === id);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ id, name, price, quantity: 1 });
        }
        
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartDisplay();
        alert('Producto agregado al carrito!');
    });
});

document.getElementById('cart-btn').addEventListener('click', () => {
    document.getElementById('cart').classList.remove('hidden');
});

document.getElementById('close-cart').addEventListener('click', () => {
    document.getElementById('cart').classList.add('hidden');
});

document.getElementById('checkout-btn').addEventListener('click', () => {
    document.getElementById('cart').classList.add('hidden');
    document.getElementById('checkout').classList.remove('hidden');
});

document.getElementById('checkout-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    alert(`Pedido enviado! Nombre: ${name}, Email: ${email}. (Esto es solo simulación)`);
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay();
    document.getElementById('checkout').classList.add('hidden');
});

function updateCartDisplay() {
    const cartItems = document.getElementById('cart-items');
    const total = document.getElementById('total');
    const cartCount = document.getElementById('cart-count');
    
    cartItems.innerHTML = '';
    let totalPrice = 0;
    let count = 0;
    
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;
        cartItems.appendChild(li);
        totalPrice += item.price * item.quantity;
        count += item.quantity;
    });
    
    total.textContent = totalPrice.toFixed(2);
    cartCount.textContent = count;
}
