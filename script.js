// Navigation Dropdown and Initializations
document.addEventListener('DOMContentLoaded', () => {
    initializeSliders();
    initializeMegaMenu();
    initializeCountdown();
    initializeQuickView();
    initializeTabs();
    setupNewsletterPopup();
    setupMobileMenu();

    // Newsletter form submission in main newsletter section
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = e.target.querySelector('input[type="email"]').value;
            // Here you would typically send this to your backend
            alert('Thank you for subscribing!');
            e.target.reset();
        });
    }

    // Handle add to cart buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const product = button.closest('.product-card');
            if (product) {
                const productName = product.querySelector('h3').textContent;
                const price = product.querySelector('.price').textContent;
                addToCart(productName, price);
            } else {
                // For the hero section "Shop Now" button
                window.location.href = '#featured-products';
            }
        });
    });
});

// Cart functionality
let cart = [];

function addToCart(productName, price) {
    cart.push({
        name: productName,
        price: price
    });
    updateCartCount();
    showAddToCartNotification();
}

function updateCartCount() {
    // Update cart count in the UI
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

function showAddToCartNotification() {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = 'Item added to cart!';
    document.body.appendChild(notification);

    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Newsletter popup
function setupNewsletterPopup() {
    const hasSeenPopup = localStorage.getItem('hasSeenPopup');

    if (!hasSeenPopup) {
        setTimeout(() => {
            showNewsletterPopup();
        }, 5000);
    }
}

function showNewsletterPopup() {
    const popup = document.createElement('div');
    popup.className = 'newsletter-popup active';
    popup.innerHTML = `
        <div class="popup-content">
            <button class="close-popup">&times;</button>
            <h3>Get 10% Off Your First Order</h3>
            <p>Subscribe to our newsletter for exclusive offers and maple care tips!</p>
            <form class="popup-form">
                <input type="email" placeholder="Enter your email" required>
                <button type="submit" class="btn btn-primary">Subscribe</button>
            </form>
        </div>
    `;

    document.body.appendChild(popup);

    // Close button functionality
    const closeButton = popup.querySelector('.close-popup');
    closeButton.addEventListener('click', () => {
        popup.remove();
        localStorage.setItem('hasSeenPopup', 'true');
    });

    // Form submission
    const form = popup.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = e.target.querySelector('input[type="email"]').value;
        // Here you would typically send this to your backend
        popup.remove();
        localStorage.setItem('hasSeenPopup', 'true');
        showNotification('Thank you for subscribing! Check your email for your discount code.');
    });
}

// Initialize all sliders
function initializeSliders() {
    // Hero Slider
    new Swiper('.hero-slider', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // Products Slider
    new Swiper('.products-slider', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 4,
            },
        },
    });
}

// Mega Menu functionality
function initializeMegaMenu() {
    const megaMenuItems = document.querySelectorAll('.mega-menu-item');
    
    megaMenuItems.forEach(item => {
        const megaMenu = item.querySelector('.mega-menu');
        if (megaMenu) {
            // Add hover effect for smoother transitions
            item.addEventListener('mouseenter', () => {
                megaMenu.style.display = 'grid';
                setTimeout(() => {
                    megaMenu.style.opacity = '1';
                }, 50);
            });

            item.addEventListener('mouseleave', () => {
                megaMenu.style.opacity = '0';
                setTimeout(() => {
                    megaMenu.style.display = 'none';
                }, 200);
            });
        }
    });
}

// Countdown Timer
function initializeCountdown() {
    const countdown = document.querySelector('.countdown');
    if (!countdown) return;

    const endTime = new Date(countdown.dataset.time).getTime();

    const timer = setInterval(() => {
        const now = new Date().getTime();
        const distance = endTime - now;

        if (distance < 0) {
            clearInterval(timer);
            countdown.innerHTML = "EXPIRED";
            return;
        }

        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdown.querySelector('.hours').textContent = String(hours).padStart(2, '0');
        countdown.querySelector('.minutes').textContent = String(minutes).padStart(2, '0');
        countdown.querySelector('.seconds').textContent = String(seconds).padStart(2, '0');
    }, 1000);
}

// Quick View functionality
function initializeQuickView() {
    const quickViewButtons = document.querySelectorAll('.quick-view');
    const modal = document.getElementById('quickViewModal');
    const closeModal = modal?.querySelector('.close-modal');

    quickViewButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.dataset.product;
            loadQuickViewContent(productId);
            modal.style.display = 'flex';
        });
    });

    if (closeModal) {
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
}

function loadQuickViewContent(productId) {
    // This would typically fetch product data from an API
    const quickViewContent = document.querySelector('.product-quick-view');
    quickViewContent.innerHTML = `
        <div class="quick-view-grid">
            <div class="quick-view-images">
                <img src="images/${productId}.jpg" alt="Product Image">
            </div>
            <div class="quick-view-details">
                <h2>Acer palmatum 'Specimen'</h2>
                <div class="rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                    <span>(24 reviews)</span>
                </div>
                <p class="price">$89.99</p>
                <div class="stock-status in-stock">
                    <i class="fas fa-check"></i> In Stock
                </div>
                <p class="description">
                    Beautiful specimen with vibrant colors throughout the seasons. 
                    Perfect for containers or as a focal point in your garden.
                </p>
                <div class="quantity-selector">
                    <button class="decrease">-</button>
                    <input type="number" value="1" min="1">
                    <button class="increase">+</button>
                </div>
                <button class="btn btn-primary add-to-cart">Add to Cart</button>
            </div>
        </div>
    `;

    // Initialize quantity selector
    const quantityInput = quickViewContent.querySelector('input[type="number"]');
    const decreaseBtn = quickViewContent.querySelector('.decrease');
    const increaseBtn = quickViewContent.querySelector('.increase');

    decreaseBtn.addEventListener('click', () => {
        if (quantityInput.value > 1) {
            quantityInput.value = parseInt(quantityInput.value) - 1;
        }
    });

    increaseBtn.addEventListener('click', () => {
        quantityInput.value = parseInt(quantityInput.value) + 1;
    });

    // Handle add to cart within quick view
    const addToCartButton = quickViewContent.querySelector('.add-to-cart');
    if (addToCartButton) {
        addToCartButton.addEventListener('click', () => {
            const productName = quickViewContent.querySelector('h2').textContent;
            const price = quickViewContent.querySelector('.price').textContent;
            addToCart(productName, price);
            const modal = document.getElementById('quickViewModal');
            modal.style.display = 'none';
        });
    }
}

// Product tabs functionality
function initializeTabs() {
    const tabs = document.querySelectorAll('.tab');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const category = tab.dataset.category;
            
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Here you would typically filter products based on category
            filterProducts(category);
        });
    });
}

function filterProducts(category) {
    // This would typically filter products based on category
    console.log(`Filtering products by category: ${category}`);
    // Example: Show/hide swiper slides based on data-category attributes
    const slides = document.querySelectorAll('.products-slider .swiper-slide');
    slides.forEach(slide => {
        const productCard = slide.querySelector('.product-card');
        if (category === 'all') {
            slide.style.display = 'block';
        } else {
            const productName = productCard.querySelector('h3').textContent.toLowerCase();
            if (productName.includes(category)) {
                slide.style.display = 'block';
            } else {
                slide.style.display = 'none';
            }
        }
    });
    // Refresh Swiper after filtering
    const swiper = document.querySelector('.products-slider').swiper;
    swiper.update();
}

// Mobile Menu Toggle
function setupMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
}

// Notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Height matching script for category and deal sections
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('category-deal-container');
    
    if (container) {
        const shopByCategorySection = container.querySelector('section.category-showcase');
        const dealOfDaySection = container.querySelector('section.deal-of-day');

        // Function to match heights
        function matchSectionHeights() {
            if (shopByCategorySection && dealOfDaySection) {
                // Reset height first
                dealOfDaySection.style.height = 'auto';
                shopByCategorySection.style.height = 'auto';

                // Get natural heights
                const categoryHeight = shopByCategorySection.offsetHeight;
                const dealHeight = dealOfDaySection.offsetHeight;

                // Set both to the maximum height
                const maxHeight = Math.max(categoryHeight, dealHeight);
                
                // Only apply if screen is wide enough
                if (window.innerWidth > 768) {
                    shopByCategorySection.style.height = `${maxHeight}px`;
                    dealOfDaySection.style.height = `${maxHeight}px`;
                } else {
                    shopByCategorySection.style.height = 'auto';
                    dealOfDaySection.style.height = 'auto';
                }
            }
        }

        // Match heights on load and resize
        matchSectionHeights();
        window.addEventListener('resize', matchSectionHeights);
    }
});
