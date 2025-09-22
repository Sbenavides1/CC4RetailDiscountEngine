// Coding Challenge 4: Retail Discount Engine

// Array of products
let products = [
    { name: "Headphones", category: "electronics", price: 45.00, inventory: 30 },
    { name: "Lamp", category: "household", price: 25.00, inventory: 15 },
    { name: "Apples", category: "groceries", price: 3.00, inventory: 100 },
    { name: "Jeans", category: "apparel", price: 60.00, inventory: 20 },
    { name: "Lipstick", category: "beauty", price: 20.00, inventory: 50 }
];

// Category Discounts
for (let product of products) {
    let discount = 0;
    switch (product.category) {
        case "electronics":
            discount = 0.20;
            break;
        case "apparel":
            discount = 0.15;
            break;
        case "household":
        case "groceries":
            discount = 0.10;
            break;
        default: 
            discount = 0;
    }
    product.discountedPrice = product.price * (1 - discount);
}
