
let cartCount = 0;

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.getAttribute('data-name');
        const productPrice = button.getAttribute('data-price');
        alert(`${productName} has been added to your cart for ${productPrice}`);
        
        
        cartCount++;
        document.getElementById('cart-count').innerText = cartCount;
    });
});
