"use strict";

/* =====================================================
   🍓 MEVA MIX — JAVASCRIPT
   ===================================================== */

let cart = [];
let promoApplied = false;
let currentDiscount = 0;

const PROMO_CODES = {
    "MEVAMIX10": 0.10,
    "6MEVA79Y": 0.20
};


/* =====================================================
   🍎 MEVALAR
   ===================================================== */

const fruits = [

    {
        name: "Tarvuz",
        price: 5000,
        unit: "kg",
        image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=700"
    },

    {
        name: "Qovun",
        price: 8000,
        unit: "kg",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDgsTNm7bJeU31qAyOtwNJeyeoAj3DQuekhppbLSWT3Q&s=10"
    },

    {
        name: "Mango",
        price: 20000,
        unit: "dona",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRytCdK5Dw8nRtC9WmBUGef282_uxK6gk3QOYF9RZz1Lg&s"
    },

    {
        name: "Dragon Fruit",
        price: 25000,
        unit: "dona",
        image: "https://images.unsplash.com/photo-1527325678964-54921661f888?w=700"
    },

    {
        name: "Shaftoli",
        price: 25000,
        unit: "kg",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7C7jnyw4rDXP4RSCGRHDGfo9PfBawVFP8eB2C4O2Jkw&s=10"
    },

    {
        name: "Junli Shaftoli",
        price: 25000,
        unit: "kg",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa-VJcD3chazgyn7NApZGdFdk8sOqrYPMQ0duWALqTcg&s=10"
    },

    {
        name: "Oq Shaftoli",
        price: 25000,
        unit: "kg",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtpAeg6r5co7Jc1SXfcfBffdLzQhTBBas5lGXtinAlMQ&s=10"
    },

    {
        name: "Anjir Shaftoli",
        price: 25000,
        unit: "kg",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWDl9toWP_njEz2POLSjr_D_-nDxID5H5paOVgAt571A&s=10"
    },

    {
        name: "Uzum",
        price: 30000,
        unit: "kg",
        image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=700"
    },

    {
        name: "Apelsin",
        price: 30000,
        unit: "kg",
        image: "https://images.unsplash.com/photo-1547514701-42782101795e?w=700"
    },

    {
        name: "Yashil olma",
        price: 25000,
        unit: "kg",
        image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=700"
    },

    {
        name: "Banan",
        price: 20000,
        unit: "kg",
        image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=700"
    },

    {
        name: "Anjir",
        price: 25000,
        unit: "kg",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjZuqvjj77bwezqfckhRpyc0nO5vfr-4dzY5uRgk5sEg&s=10"
    },

    {
        name: "Nok",
        price: 40000,
        unit: "kg",
        image: "https://images.unsplash.com/photo-1514756331096-242fdeb70d4a?w=700"
    },

    {
        name: "Qulupnay",
        price: 100000,
        unit: "kg",
        image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=700"
    },

    {
        name: "Ananas",
        price: 50000,
        unit: "dona",
        image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=700"
    },

    {
        name: "Laym",
        price: 100000,
        unit: "kg",
        image: "https://images.unsplash.com/photo-1587496679742-bad502958fbf?w=700"
    },

    {
        name: "Limon",
        price: 50000,
        unit: "kg",
        image: "https://images.unsplash.com/photo-1590502593747-42a996133562?w=700"
    },

    {
        name: "Golubika",
        price: 40000,
        unit: "kg",
        image: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=700"
    },

    {
        name: "Kiwi",
        price: 70000,
        unit: "kg",
        image: "https://images.unsplash.com/photo-1585059895524-72359e06133a?w=700"
    },

    {
        name: "Ejevika",
        price: 70000,
        unit: "kg",
        image: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=700"
    },

    {
        name: "Malina",
        price: 100000,
        unit: "kg",
        image: "https://images.unsplash.com/photo-1577069861033-55d04cec4ef5?w=700"
    },

    {
        name: "Mandarin",
        price: 40000,
        unit: "kg",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCcA2Y9H5PqQ6LQU7hzLI_-fViWVsC6PWW60GG4ueObA&s=10"
    },

    {
        name: "Kakos",
        price: 50000,
        unit: "dona",
        image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=700"
    },

    {
        name: "Avocado",
        price: 30000,
        unit: "dona",
        image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=700"
    },

    {
        name: "Olxo‘ri",
        price: 10000,
        unit: "kg",
        image: "https://images.unsplash.com/photo-1596363505729-4190a9506133?w=700"
    }

];


/* =====================================================
   💰 NARX
   ===================================================== */

function formatPrice(price, unit) {
    return Number(price).toLocaleString("uz-UZ") + " so‘m/" + unit;
}


/* =====================================================
   🍎 MEVALARNI CHIQARISH
   ===================================================== */

function renderProducts(list = fruits) {

    const grid = document.getElementById("productsGrid");

    if (!grid) return;

    grid.innerHTML = "";

    if (list.length === 0) {

        grid.innerHTML = `
            <div class="no-products">
                <div>🍓</div>
                <h3>Meva topilmadi</h3>
                <p>Boshqa nom bilan qidirib ko‘ring.</p>
            </div>
        `;

        return;
    }

    list.forEach(function (fruit, index) {

        const originalIndex = fruits.indexOf(fruit);

        const card = document.createElement("article");

        card.className = "product-card";

        card.style.animationDelay = `${index * 0.05}s`;

        card.innerHTML = `
            <div class="product-image">
                <img
                    src="${fruit.image}"
                    alt="${fruit.name}"
                    loading="lazy"
                    onerror="imageError(this)"
                >
            </div>

            <div class="product-info">

                <h3>${fruit.name}</h3>

                <p class="product-price">
                    ${formatPrice(fruit.price, fruit.unit)}
                </p>

                <button
                    class="add-cart"
                    type="button"
                    onclick="addToCart(${originalIndex})"
                >
                    🛒 Savatga qo‘shish
                </button>

            </div>
        `;

        grid.appendChild(card);
    });
}


/* =====================================================
   🖼️ RASM XATOSI
   ===================================================== */

function imageError(image) {

    image.onerror = null;

    image.src =
        "https://placehold.co/700x500/f4f7ef/6b7d68?text=Meva+Mix";
}


/* =====================================================
   🔎 QIDIRUV
   ===================================================== */

function searchProducts() {

    const input = document.getElementById("searchInput");

    if (!input) return;

    const search = input.value.toLowerCase().trim();

    const result = fruits.filter(function (fruit) {

        return fruit.name.toLowerCase().includes(search);

    });

    renderProducts(result);
}


/* =====================================================
   🛒 SAVATGA QO‘SHISH
   ===================================================== */

function addToCart(index) {

    const fruit = fruits[index];

    if (!fruit) return;

    const existing = cart.find(function (item) {
        return item.name === fruit.name;
    });

    if (existing) {

        existing.quantity += 1;

    } else {

        cart.push({
            name: fruit.name,
            price: fruit.price,
            unit: fruit.unit,
            image: fruit.image,
            quantity: 1
        });
    }

    updateCart();

    showToast(`🍓 ${fruit.name} savatga qo‘shildi!`);
}


/* =====================================================
   🔢 SAVAT SONI
   ===================================================== */

function getCartCount() {

    return cart.reduce(function (total, item) {
        return total + item.quantity;
    }, 0);
}


/* =====================================================
   🛒 SAVATNI YANGILASH
   ===================================================== */

function updateCart() {

    const count = document.getElementById("cartCount");

    if (count) {
        count.textContent = getCartCount();
    }

    renderCart();
}


/* =====================================================
   🛒 SAVATNI CHIQARISH
   ===================================================== */

function renderCart() {

    const container = document.getElementById("cartItems");

    if (!container) return;

    if (cart.length === 0) {

        container.innerHTML = `
            <div class="empty-cart">
                <div style="font-size:50px;">🛒</div>
                <p>Savat hozircha bo‘sh</p>
            </div>
        `;

        updateTotal();

        return;
    }

    container.innerHTML = "";

    cart.forEach(function (item, index) {

        const div = document.createElement("div");

        div.className = "cart-item";

        const itemTotal = item.price * item.quantity;

        div.innerHTML = `
            <img
                src="${item.image}"
                alt="${item.name}"
                onerror="imageError(this)"
            >

            <div class="cart-item-info">

                <h4>${item.name}</h4>

                <p>
                    ${formatPrice(itemTotal, item.unit)}
                </p>

            </div>

            <div class="quantity">

                <button
                    type="button"
                    onclick="changeQuantity(${index}, -1)"
                >
                    −
                </button>

                <span>${item.quantity}</span>

                <button
                    type="button"
                    onclick="changeQuantity(${index}, 1)"
                >
                    +
                </button>

            </div>
        `;

        container.appendChild(div);
    });

    updateTotal();
}


/* =====================================================
   ➕➖ MIQDOR
   ===================================================== */

function changeQuantity(index, amount) {

    if (!cart[index]) return;

    cart[index].quantity += amount;

    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }

    updateCart();
}


/* =====================================================
   💰 JAMI
   ===================================================== */

function getSubtotal() {

    return cart.reduce(function (total, item) {

        return total + item.price * item.quantity;

    }, 0);
}


function calculateTotal() {

    let total = getSubtotal();

    if (promoApplied) {
        total = total - total * currentDiscount;
    }

    return Math.round(total);
}


function updateTotal() {

    const total = document.getElementById("cartTotal");

    if (!total) return;

    total.textContent =
        Number(calculateTotal()).toLocaleString("uz-UZ") +
        " so‘m";
}


/* =====================================================
   🎁 PROMOKOD
   ===================================================== */

function applyPromo() {

    const input = document.getElementById("promoInput");

    if (!input) return;

    const code = input.value.trim().toUpperCase();

    if (PROMO_CODES[code] !== undefined) {

        if (promoApplied) {

            showToast("🎁 Promokod allaqachon qo‘llangan!");

            return;
        }

        promoApplied = true;
        currentDiscount = PROMO_CODES[code];

        updateTotal();

        const percent = currentDiscount * 100;

        showToast(`🎉 ${percent}% chegirma qo‘llandi!`);

    } else {

        showToast("❌ Promokod noto‘g‘ri!");

    }
}


/* =====================================================
   🛒 SAVATNI OCHISH
   ===================================================== */

function openCart() {

    const modal = document.getElementById("cartModal");

    if (!modal) return;

    modal.classList.add("active");
}


/* =====================================================
   ❌ SAVATNI YOPISH
   ===================================================== */

function closeCart() {

    const modal = document.getElementById("cartModal");

    if (!modal) return;

    modal.classList.remove("active");
}


/* =====================================================
   🔔 XABAR
   ===================================================== */

function showToast(message) {

    const toast = document.getElementById("toast");

    if (!toast) return;

    toast.textContent = message;

    toast.classList.add("show");

    clearTimeout(window.toastTimer);

    window.toastTimer = setTimeout(function () {

        toast.classList.remove("show");

    }, 2500);
}


/* =====================================================
   🖱️ MODALNI TASHQARISIGA BOSISH
   ===================================================== */

document.addEventListener("click", function (event) {

    const modal = document.getElementById("cartModal");

    if (!modal) return;

    if (event.target === modal) {
        closeCart();
    }
});


/* =====================================================
   ⌨️ ESC
   ===================================================== */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {
        closeCart();
    }
});


/* =====================================================
   🍓 SAYTNI ISHGA TUSHIRISH
   ===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    renderProducts();

    updateCart();

});
