// Coding Challenge 4: Retail Discount Engine

// Array of products
let products = [
    { sku: "001", name: "Headphones", category: "electronics", price: 45.00, inventory: 30 },
    { sku: "002", name: "Lamp", category: "household", price: 25.00, inventory: 15 },
    { sku: "003", name: "Apples", category: "groceries", price: 3.00, inventory: 100 },
    { sku: "004", name: "Jeans", category: "apparel", price: 60.00, inventory: 20 },
    { sku: "005", name: "Lipstick", category: "beauty", price: 20.00, inventory: 50 }
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

console.log(products);

// Customer Data 
const customers = [
    { name: "Alice", customerType: "student", couponCode: "STUDENT5", taxRate: 0.085,
        cart: [ { sku: "005", quantity: 1 }, { sku: "003", quantity: 5 } ] },
    { name: "Bob", customerType: "senior", couponCode: "SENIOR07", taxRate: 0.085,
        cart: [ { sku: "002", quantity: 2 }, { sku: "004", quantity: 1 } ] },
    { name: "Charlie", customerType: "regular", couponCode: null, taxRate: 0.085,
        cart: [ { sku: "001", quantity: 1 }, { sku: "002", quantity: 1 }, { sku: "003", quantity: 2 } ] }
];

// Check out simulation for each customer
for ( let i = 0; i < customers.length; i++ ) {
    let customer = customers[i];
    let subtotal = 0;



// Discount by Customer Type
let extraDiscounts = 0;
 if (customer.customerType === "student") {
    extraDiscounts = 0.05;
} else if (customer.customerType === "senior") {
    extraDiscounts = 0.07;
} else {
    extraDiscounts = 0;
}
}