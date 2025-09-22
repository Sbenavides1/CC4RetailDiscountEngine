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

    // Calculate subtotal
    for (let line of customer.cart) {
        let product;
        for (let p of products) {
            if (p.sku === line.sku) {
                product = p;
                break;
            }
        }
        if (product && product.inventory > 0) {
            let quantity = Math.min(line.quantity, product.inventory);
            subtotal += product.discountedPrice * quantity;
            product.inventory -= quantity; 
        }
    }

// Discount by Customer Type
let extraDiscount = 0;
 if (customer.customerType === "student") {
    extraDiscount = 0.05;
} else if (customer.customerType === "senior") {
    extraDiscount = 0.07;
} else {
    extraDiscount = 0;
}
let finishedTotal = subtotal * (1 - extraDiscount);
console.log(`customer ${i +1} (${customer.name}, ${customer.customerType}) total: $${finishedTotal.toFixed(2)}`);
}

// product after discount
console.log("Products after discount:");
let sampleProduct = products[0];
for (let key in sampleProduct) {
    console.log(`${key}: ${sampleProduct[key]}`);
}

// object entries
console.log("Object entries of all products:");
for (let product of products) {
    for (let [key, value] of Object.entries(product)) {
        console.log(`${key}: ${value}`);
    }
    console.log("-----");
}

