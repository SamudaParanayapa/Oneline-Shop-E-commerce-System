import { cart, removeFromCart, cartQuantityCount } from './data/cart.js';
import { product } from './data/product.js';
import { formatCurrency } from './utils/money.js';

// Render cart items
function renderCartItems() {
  let cartHTML = '';

  cart.forEach((cartItem) => {
    const productId = cartItem.productId;
    const matchingProduct = product.find((product) => product.id === productId);

    if (!matchingProduct) return;

    cartHTML += `
      <div class="cart-item-container js-cart-item-container-${productId}">
        <div class="cart-item-details-grid">
          <img class="product-image" src="${matchingProduct.image}">
          <div class="cart-item-details">
            <div class="product-name">${matchingProduct.name}</div>
            <div class="product-price">LKR ${formatCurrency(matchingProduct.priceCent)}</div>
            <div class="product-quantity">
              <span>Quantity: <span class="quantity-label">${cartItem.quantity}</span></span>
              <span class="update-quantity-link link-primary">Update</span>
              <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id}">Delete</span>
            </div>
          </div>
        </div>
      </div>
    `;
  });

  document.querySelector('.js-order-summary').innerHTML = cartHTML;

  document.querySelectorAll('.js-delete-link').forEach((link) => {
    link.addEventListener('click', () => {
      const productId = link.dataset.productId;
      removeFromCart(productId);
      renderCartItems();
      updateCartQuantity();
      updateTotalPrice();
    });
  });
}

// Calculate and display the total price
function updateTotalPrice() {
  let totalPrice = 0;
  cart.forEach((cartItem) => {
    const matchingProduct = product.find((product) => product.id === cartItem.productId);
    if (matchingProduct) {
      totalPrice += matchingProduct.priceCent * cartItem.quantity;
    }
  });

  document.querySelector('.js-total-price').innerText = `LKR ${formatCurrency(totalPrice)}`;
}

// Update cart quantity display
function updateCartQuantity() {
  const cartQuantity = cartQuantityCount();
  document.querySelector('.js-cart-quantity').innerText = `${cartQuantity} items`;
}

// Handle checkout button click
document.querySelector('.js-checkout-btn').addEventListener('click', () => {
  if (cart.length === 0) {
    alert('Your cart is empty!');
    return;
  }
  alert('Proceeding to checkout...');
  localStorage.removeItem('cart');
  renderCartItems();
  updateTotalPrice();
  updateCartQuantity();
});

// Initial render
renderCartItems();
updateTotalPrice();
updateCartQuantity();
