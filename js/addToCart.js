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
        cart.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.className = 'col-lg-4 col-md-6 col-12';
            cartItem.innerHTML = `
                <div class="menu-thumb">
                    <img src="${item.image}" class="img-fluid menu-image" alt="${item.name}">
                    <button type="button" class="button delete-button">
                        <span class="button__text">Șterge</span>
                        <span class="button__icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="512" viewBox="0 0 512 512" height="512" class="svg">
                                <title></title>
                                <path style="fill:none; stroke:#323232;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M112,112l20,320c.95,18.49,14.4,32,32,32H348c17.67,0,30.87-13.51,32-32l20-320"></path>
                                <line y2="112" y1="112" x2="432" x1="80" style="stroke:#323232;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px"></line>
                                <path style="fill:none;stroke:#323232;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M192,112V72h0a23.93,23.93,0,0,1,24-24h80a23.93,23.93,0,0,1,24,24h0v40"></path>
                                <line y2="400" y1="176" x2="256" x1="256" style="fill:none;stroke:#323232;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"></line>
                                <line y2="400" y1="176" x2="192" x1="184" style="fill:none;stroke:#323232;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"></line>
                                <line y2="400" y1="176" x2="320" x1="328" style="fill:none;stroke:#323232;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px"></line>
                            </svg>
                        </span>
                    </button>
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
                
                <style>
                    .button {
                        --main-focus: #2d8cf0;
                        --font-color: #323232;
                        --bg-color-sub: #dedede;
                        --bg-color: #eee;
                        --main-color: #323232;
                        position: relative;
                        width: 150px;
                        height: 40px;
                        cursor: pointer;
                        display: flex;
                        align-items: center;
                        border: 2px solid var(--main-color);
                        box-shadow: 4px 4px var(--main-color);
                        background-color: var(--bg-color);
                        border-radius: 10px;
                        overflow: hidden;
                    }
                    
                    .button, .button__icon, .button__text {
                        transition: all 0.3s;
                    }
                    
                    .button .button__text {
                        transform: translateX(33px);
                        color: var(--font-color);
                        font-weight: 600;
                    }
                    
                    .button .button__icon {
                        position: absolute;
                        transform: translateX(109px);
                        height: 100%;
                        width: 39px;
                        background-color: var(--bg-color-sub);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    
                    .button .svg {
                        width: 20px;
                        fill: var(--main-color);
                    }
                    
                    .button:hover {
                        background: var(--bg-color);
                    }
                    
                    .button:hover .button__text {
                        color: transparent;
                    }
                    
                    .button:hover .button__icon {
                        width: 148px;
                        transform: translateX(0);
                    }
                    
                    .button:active {
                        transform: translate(3px, 3px);
                        box-shadow: 0px 0px var(--main-color);
                    }

                </style>
            `;
            cartItemsContainer.appendChild(cartItem);

            const deleteButton = cartItem.querySelector('.delete-button');
            deleteButton.addEventListener('click', function() {
                removeFromCart(index);
            });
        });
    }

    function removeFromCart(index) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.splice(index, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
    }

    emptyCartBtn.addEventListener('click', function() {
        localStorage.removeItem('cart');
        renderCart();
    });

    renderCart();
});
