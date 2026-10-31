console.log("===== ONLINE SHOPPING SYSTEM =====");

// 1. Product Database

let products = [
    { id: 1, name: "Laptop", price: 45000, stock: 5, category: "Electronics" },
    { id: 2, name: "Mobile", price: 20000, stock: 10, category: "Electronics" },
    { id: 3, name: "Headphones", price: 1500, stock: 15, category: "Accessories" },
    { id: 4, name: "Keyboard", price: 800, stock: 20, category: "Accessories" },
    { id: 5, name: "Mouse", price: 500, stock: 25, category: "Accessories" }
];

let cart = [];

// 2. Display Products

function displayProducts() {
    console.log("\nAvailable Products:");

    products.forEach(({ id, name, price, stock }) => {
        console.log(`${id}. ${name} | ₹${price} | Stock: ${stock}`);
    });
}

displayProducts();

// 3. Search Product

function searchProduct(productName) {
    let result = products.find(
        product =>
            product.name.toLowerCase() === productName.toLowerCase()
    );

    console.log("\nSearch Result:", result ?? "Product Not Found");
}

searchProduct("Laptop");

// 4. Add Product to Cart

function addToCart(productId, quantity) {
    let product = products.find(p => p.id === productId);

    if (!product) {
        console.log("Product not found!");
        return;
    }

    if (quantity <= 0 || quantity > product.stock) {
        console.log("Invalid quantity or insufficient stock!");
        return;
    }

    let existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        if (existingItem.quantity + quantity > product.stock) {
            console.log("Not enough stock!");
            return;
        }

        cart = cart.map(item =>
            item.id === productId
                ? { ...item, quantity: item.quantity + quantity }
                : item
        );
    } else {
        cart = [
            ...cart,
            { ...product, quantity }
        ];
    }

    console.log(`${product.name} added to cart!`);
}

addToCart(1, 1);
addToCart(2, 2);
addToCart(3, 2);

// 5. Update Quantity

function updateQuantity(productId, newQuantity) {
    let product = products.find(p => p.id === productId);

    if (!product || newQuantity <= 0 || newQuantity > product.stock) {
        console.log("Invalid quantity!");
        return;
    }

    cart = cart.map(item =>
        item.id === productId
            ? { ...item, quantity: newQuantity }
            : item
    );

    console.log("Quantity updated!");
}

updateQuantity(2, 3);

// 6. Remove Product

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    console.log("Product removed if it existed.");
}

// removeFromCart(3);

// 7. Display Cart

function displayCart() {
    console.log("\n===== YOUR CART =====");

    if (cart.length === 0) {
        console.log("Cart is empty!");
        return;
    }

    cart.forEach(({ name, price, quantity }) => {
        console.log(
            `${name} | ₹${price} x ${quantity} = ₹${price * quantity}`
        );
    });
}

displayCart();

// 8. Calculate Subtotal

let subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
);

console.log("\nSubtotal: ₹" + subtotal);

// 9. Apply Discount

let discount = 0;

if (subtotal >= 50000) {
    discount = subtotal * 0.15;
} else if (subtotal >= 20000) {
    discount = subtotal * 0.10;
} else if (subtotal >= 10000) {
    discount = subtotal * 0.05;
}

console.log("Discount: ₹" + discount);

// 10. Coupon Code

function applyCoupon(code, amount) {
    let couponDiscount = 0;

    if (code === "SAVE500" && amount >= 5000) {
        couponDiscount = 500;
    } else if (code === "SAVE10" && amount >= 10000) {
        couponDiscount = amount * 0.10;
    } else {
        console.log("Invalid coupon or minimum purchase not reached!");
    }

    return Math.min(couponDiscount, amount);
}

let couponDiscount = applyCoupon("SAVE500", subtotal - discount);

console.log("Coupon Discount: ₹" + couponDiscount);

// 11. Final Bill

let finalAmount = subtotal - discount - couponDiscount;

console.log("\n===== FINAL BILL =====");
console.log("Subtotal: ₹" + subtotal);
console.log("Discount: ₹" + discount);
console.log("Coupon: ₹" + couponDiscount);
console.log("Final Amount: ₹" + finalAmount);

// 12. Total Items

let totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
);

console.log("Total Items:", totalItems);

console.log("\n===== THANK YOU FOR SHOPPING =====");