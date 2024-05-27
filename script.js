document.addEventListener('DOMContentLoaded', () => {
    const product = {
        name: "Sneak Peek",
        image: "amazing-product.jpg",
        description: "This amazing product will solve all your problems!",
        price: 50.99
    };

    document.getElementById('product-name').textContent = product.name;
    document.getElementById('product-image').src = product.image;
    document.getElementById('product-description').textContent = product.description;
    document.getElementById('product-price').textContent = `$${product.price}`;
});
