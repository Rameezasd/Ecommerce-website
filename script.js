let cart = [];

function addToCart(productName, price) {
    cart.push({ productName, price });
    alert(`${productName} has been added to your cart.`);
    console.log(cart);
}

// Optionally, you can add more functions to manage the cart or interact with the UI.

const productsPerPage = 5;
let currentPage = 1;

// Initialize page
function initPage() {
    renderProducts();
    renderPagination();
}

// Render products based on the current page and filters
function renderProducts() {
    const productList = document.getElementById('product-list');
    const allProducts = Array.from(productList.children);

    // Filter products based on the selected category
    const category = document.getElementById('category').value;
    const filteredProducts = allProducts.filter(product => 
        !category || product.dataset.category === category
    );

    // Hide all products initially
    allProducts.forEach(product => product.style.display = 'none');

    // Show only the products for the current page
    const start = (currentPage - 1) * productsPerPage;
    const end = start + productsPerPage;
    filteredProducts.slice(start, end).forEach(product => {
        product.style.display = 'block';
    });
}

// Render pagination buttons
function renderPagination() {
    const productList = document.getElementById('product-list');
    const allProducts = Array.from(productList.children);

    const category = document.getElementById('category').value;
    const filteredProducts = allProducts.filter(product => 
        !category || product.dataset.category === category
    );

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    if (totalPages > 1) {
        for (let i = 1; i <= totalPages; i++) {
            const button = document.createElement('button');
            button.textContent = i;
            if (i === currentPage) {
                button.classList.add('disabled');
            } else {
                button.addEventListener('click', () => {
                    currentPage = i;
                    renderProducts();
                    renderPagination();
                });
            }
            pagination.appendChild(button);
        }
    }
}

// Filter products based on the selected category
function filterProducts() {
    currentPage = 1;
    renderProducts();
    renderPagination();
}

// Event listener for filter changes
document.getElementById('category').addEventListener('change', filterProducts);

// Initialize the page
initPage();

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.toggle-btn1');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const moreInfo = this.nextElementSibling;
            const isVisible = moreInfo.style.display === 'block';
            
            if (isVisible) {
                moreInfo.style.display = 'none';
                this.textContent = '+';
            } else {
                moreInfo.style.display = 'block';
                this.textContent = '−'; // Unicode for minus sign
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.toggle-btn2');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const moreInfo = this.nextElementSibling;
            const isVisible = moreInfo.style.display === 'block';
            
            if (isVisible) {
                moreInfo.style.display = 'none';
                this.textContent = '+';
            } else {
                moreInfo.style.display = 'block';
                this.textContent = '−'; // Unicode for minus sign
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.toggle-btn3');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const moreInfo = this.nextElementSibling;
            const isVisible = moreInfo.style.display === 'block';
            
            if (isVisible) {
                moreInfo.style.display = 'none';
                this.textContent = '+';
            } else {
                moreInfo.style.display = 'block';
                this.textContent = '−'; // Unicode for minus sign
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.toggle-btn4');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const moreInfo = this.nextElementSibling;
            const isVisible = moreInfo.style.display === 'block';
            
            if (isVisible) {
                moreInfo.style.display = 'none';
                this.textContent = '+';
            } else {
                moreInfo.style.display = 'block';
                this.textContent = '−'; // Unicode for minus sign
            }
        });
    });
});