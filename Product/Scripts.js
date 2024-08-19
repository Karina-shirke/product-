// script.js
document.addEventListener('DOMContentLoaded', function() {
    const categoryItems = document.querySelectorAll('.sidebar ul li');
    const productList = document.querySelector('.product-list');
    const productItems = document.querySelectorAll('.product-item');

    categoryItems.forEach(item => {
        item.addEventListener('click', function() {
            const category = this.getAttribute('data-category');

            // Remove active class from all categories and highlighted class from all products
            categoryItems.forEach(item => item.classList.remove('active'));
            productItems.forEach(product => product.classList.remove('highlighted'));

            // Add active class to the clicked category
            this.classList.add('active');

            // Show the product list
            productList.style.display = 'flex';

            // Filter products based on category and highlight them
            productItems.forEach(product => {
                if (product.getAttribute('data-category') === category) {
                    product.classList.remove('hidden');
                    product.classList.add('highlighted');
                } else {
                    product.classList.add('hidden');
                }
            });
            if (window.innerWidth <= 768) {
                productList.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Automatically trigger click on the first category
    categoryItems[0].click();
});
