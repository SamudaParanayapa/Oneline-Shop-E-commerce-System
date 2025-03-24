import { cart, addToCart, cartQuantityCount } from './data/cart.js';
import { product } from './data/product.js';
import { formatCurrency } from './utils/money.js';

let productHTML = '';

updateCartQuantity();

product.forEach((product) => {
  productHTML += `
    <div class="product-container">
      <div class="product-image">
        <img src="${product.image}" alt="">
      </div>
      <div class="product-title limit-text-to-2-lines">${product.name}</div>
      <div class="product-raiting">
        <img class="product-rating-stars" src="${product.rating.stars}">
        <div class="product-rating-count link-primary">${product.rating.count}</div>
      </div>
      <div class="product-price">LKR ${formatCurrency(product.priceCent)}</div>
      <div class="product-quantity">
        <select class="js-product-quantity">
          ${Array.from({ length: 10 }, (_, i) => `<option value="${i + 1}">${i + 1}</option>`).join('')}
        </select>
      </div>
      <div class="product-to-cart">
        <img src="resource/icons/checkmark.png"> Added
      </div>
      <button class="add-to-cart-button button-primary js-add-to-cart-button" data-product-id="${product.id}">
        Add to Cart
      </button>
    </div>
  `;
});

document.querySelector('.js-product-grid').innerHTML = productHTML;

function updateCartQuantity() {
  document.querySelector('.js-cart-quantity').innerHTML = cartQuantityCount();
}

document.querySelectorAll('.js-add-to-cart-button').forEach((button) => {
  button.addEventListener('click', () => {
    const productId = button.dataset.productId;
    const quantitySelectElement = button.closest('.product-container').querySelector('.js-product-quantity');
    const productToCart = button.closest('.product-container').querySelector('.product-to-cart');

    addToCart(productId, quantitySelectElement);
    updateCartQuantity();

    productToCart.classList.add('visible');
    setTimeout(() => {
      productToCart.classList.remove('visible');
    }, 500);
  });
});