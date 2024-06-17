document.addEventListener('DOMContentLoaded', function() {
    const emptyCartBtn = document.getElementById('emptyCartBtn');
    const cartItemsContainer = document.querySelector('.cart-items');

    function addToCart(product) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
    }

    function renderCart() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cartItemsContainer.innerHTML = '';
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'col-lg-4 col-md-6 col-12';
            cartItem.innerHTML = `
                <div class="menu-thumb">
                    <img src="${item.image}" class="img-fluid menu-image" alt="${item.name}">
                    <div class="menu-info d-flex flex-wrap align-items-center">
                        <h7 class="mb-0">${item.name}</h7>
                        <span class="price-tag bg-white shadow-lg ms-4"><small>${item.price} </small>lei</span>
                        <div class="d-flex flex-wrap align-items-center w-100 mt-2">
                            <h6 class="reviews-text mb-0 me-3">4.4/5</h6>
                            <div class="reviews-stars">
                                <i class="bi-star-fill reviews-icon"></i>
                                <i class="bi-star-fill reviews-icon"></i>
                                <i class="bi-star-fill reviews-icon"></i>
                                <i class="bi-star-fill reviews-icon"></i>
                                <i class="bi-star reviews-icon"></i>
                            </div>
                            <p class="reviews-text mb-0 ms-4">128 Reviews</p>
                        </div>
                    </div>
                </div>
            `;
            cartItemsContainer.appendChild(cartItem);
        });
    }

    emptyCartBtn.addEventListener('click', function() {
        localStorage.removeItem('cart');
        renderCart(); // Reafiseaza coșul după ce a fost golit
    });

    renderCart();
});
