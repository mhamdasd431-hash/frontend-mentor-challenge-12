let currentQuantity = 0;

const countSpan = document.querySelector(".count");
const minusBtn = document.querySelector(".minus-btn");
const plusBtn = document.querySelector(".plus-btn");
const cartButton = document.querySelector(".add-to-cart-btn");
const cartCount = document.querySelector(".cart-count");
const cartBody = document.querySelector(".cart-body");
const cartBtn = document.querySelector(".cart-btn");
const cartDropdown = document.querySelector(".cart-dropdown");
const price = 125.00;

if (cartBtn && cartDropdown) {
    cartBtn.addEventListener("click", () => {
        cartDropdown.classList.toggle("active");
    });
}

if (plusBtn && countSpan) {
    plusBtn.addEventListener("click", () => {
        currentQuantity++;
        countSpan.textContent = currentQuantity;
    });
}

if (minusBtn && countSpan) {
    minusBtn.addEventListener("click", () => {
        if (currentQuantity > 0) {
            currentQuantity--;
            countSpan.textContent = currentQuantity;
        }
    });
}

if (cartButton) {
    cartButton.addEventListener("click", () => {
        let qtyToAdd = currentQuantity > 0 ? currentQuantity : 1;
        
        if (cartCount) {
            cartCount.textContent = qtyToAdd;
        }
        
        const total = price * qtyToAdd;
        
        if (cartBody) {
            cartBody.innerHTML = `
                <div class="cart-item">
                    <img src="images/image-product-1-thumbnail.jpg" alt="Thumbnail" class="cart-thumb">
                    <div class="cart-item-info">
                        <p class="item-name">Fall Limited Edition Sneakers</p>
                        <p class="item-calculation">$${price.toFixed(2)} x ${qtyToAdd} <span class="total-price">$${total.toFixed(2)}</span></p>
                    </div>
                    <button class="delete-btn">
                        <img src="images/icon-delete.svg" alt="delete">
                    </button>
                </div>
                <button class="checkout-btn">Checkout</button>
            `;
        }
    });
}

if (cartBody) {
    cartBody.addEventListener("click", (event) => {

        if (event.target.closest(".delete-btn")) {
            currentQuantity = 0;
            if (countSpan) countSpan.textContent = 0;
            if (cartCount) cartCount.textContent = 0;
            cartBody.innerHTML = `<p class="empty-msg">Your cart is empty.</p>`;
        }

        if (event.target.closest(".checkout-btn")) {
            alert("Thank you for your purchase! Order placed successfully. 🎉");
            currentQuantity = 0;
            if (countSpan) countSpan.textContent = 0;
            if (cartCount) cartCount.textContent = 0;
            cartBody.innerHTML = `<p class="empty-msg">Your cart is empty.</p>`;
            if (cartDropdown) cartDropdown.classList.remove("active");
        }
    });
}


const menuToggle = document.querySelector(".menu-toggle");
const closeMenu = document.querySelector(".close-menu");
const navbar = document.querySelector(".navbar");
const overlay = document.querySelector(".overlay");

// 1. فتح القائمة عند الضغط على زر الهامبرجر
if (menuToggle && navbar && overlay) {
    menuToggle.addEventListener("click", () => {
        navbar.classList.add("active");
        overlay.classList.add("active");
    });
}

// 2. إغلاق القائمة عند الضغط على زر الإغلاق (X)
if (closeMenu && navbar && overlay) {
    closeMenu.addEventListener("click", () => {
        navbar.classList.remove("active");
        overlay.classList.remove("active");
    });
}

// 3. إغلاق القائمة عند الضغط على الخلفية المعتمة (Overlay)
if (overlay && navbar) {
    overlay.addEventListener("click", () => {
        navbar.classList.remove("active");
        overlay.classList.remove("active");
    });
}