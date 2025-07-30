// Cart functionality
class Cart {
    constructor() {
        this.items = this.loadCart();
        this.updateCartCount();
        this.initializeEventListeners();
    }

    loadCart() {
        const saved = localStorage.getItem('zech-lystyle-cart');
        return saved ? JSON.parse(saved) : [];
    }

    saveCart() {
        localStorage.setItem('zech-lystyle-cart', JSON.stringify(this.items));
        this.updateCartCount();
    }

    addItem(productId, quantity = 1) {
        const product = getProductById(productId);
        if (!product) return;

        const existingItem = this.items.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({
                id: productId,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: quantity
            });
        }
        
        this.saveCart();
        this.showNotification(`${product.name} added to cart!`);
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.saveCart();
        this.renderCart();
    }

    updateQuantity(productId, quantity) {
        const item = this.items.find(item => item.id === productId);
        if (item) {
            if (quantity <= 0) {
                this.removeItem(productId);
            } else {
                item.quantity = quantity;
                this.saveCart();
                this.renderCart();
            }
        }
    }

    clearCart() {
        this.items = [];
        this.saveCart();
        this.renderCart();
        this.showNotification('Cart cleared!');
    }

    getTotalPrice() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    updateCartCount() {
        const totalItems = this.items.reduce((total, item) => total + item.quantity, 0);
        const cartCountElements = document.querySelectorAll('#cart-count');
        cartCountElements.forEach(element => {
            element.textContent = totalItems;
        });
    }

    renderCart() {
        const cartItemsContainer = document.getElementById('cart-items');
        const cartTotalElement = document.getElementById('cart-total');
        
        if (!cartItemsContainer) return;

        if (this.items.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty</p>';
            cartTotalElement.textContent = '0.00';
            return;
        }

        cartItemsContainer.innerHTML = this.items.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="cart.updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn" onclick="cart.updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                    </div>
                </div>
                <button class="remove-item" onclick="cart.removeItem(${item.id})">Remove</button>
            </div>
        `).join('');

        cartTotalElement.textContent = this.getTotalPrice().toFixed(2);
    }

    initializeEventListeners() {
        // Cart modal toggle
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('cart-link') || e.target.closest('.cart-link')) {
                e.preventDefault();
                this.openCart();
            }
        });

        // Modal close
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('close') || e.target.classList.contains('modal')) {
                this.closeCart();
            }
        });

        // Checkout button
        document.addEventListener('click', (e) => {
            if (e.target.id === 'checkout-btn') {
                this.checkout();
            }
        });

        // Clear cart button
        document.addEventListener('click', (e) => {
            if (e.target.id === 'clear-cart-btn') {
                if (confirm('Are you sure you want to clear your cart?')) {
                    this.clearCart();
                }
            }
        });
    }

    openCart() {
        this.renderCart();
        document.getElementById('cart-modal').style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    closeCart() {
        document.getElementById('cart-modal').style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    checkout() {
        if (this.items.length === 0) {
            alert('Your cart is empty!');
            return;
        }
        
        alert(`Thank you for your purchase! Total: $${this.getTotalPrice().toFixed(2)}`);
        this.clearCart();
        this.closeCart();
    }

    buyNow(productId) {
        const product = getProductById(productId);
        if (!product) return;
        
        if (confirm(`Buy ${product.name} for $${product.price.toFixed(2)}?`)) {
            alert(`Thank you for your purchase of ${product.name}!`);
        }
    }

    showNotification(message) {
        // Create notification element
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: #D4AF37;
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            font-weight: 500;
            z-index: 10000;
            animation: slideInRight 0.3s ease;
        `;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // Remove notification after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'fadeOut 0.3s ease';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
}

// Initialize cart
const cart = new Cart();

// Add to cart function for buttons
function addToCart(productId) {
    cart.addItem(productId);
}

// Buy now function for buttons
function buyNow(productId) {
    cart.buyNow(productId);
}

// Add keyframe animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(100%);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes fadeOut {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);