import { cart, addToCart,cartQantityCount,saveToStorage} from "./data/cart.js";
import { product } from "./data/product.js";
import { formatCurrency } from "./utils/money.js";

/* Generating HTML code for each objects in product class */ 
let productHTML = '';

updateCartQuantity();

product.forEach((product) => {
  productHTML += `
    <div class="product-container">
      <div class="product-image">
        <img src="${product.image}" alt="">
      </div>

      <div class="product-title limit-text-to-2-lines">
        ${product.name}
      </div>

      <div class="product-raiting">
        <img class="product-rating-stars" src="${product.rating.stars}">
        <div class="product-rating-count link-primary">
          ${product.rating.count}
        </div>
      </div>

      <div class="product-price">
        LKR ${formatCurrency(product.priceCent)}
      </div>

      <div class="product-quantity ">
        <select class = "js-product-quantity">
          <option selected value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div class="product-to-cart">
        <img src="resource/icons/checkmark.png">
        Added
      </div>

      <button class="add-to-cart-button button-primary js-add-to-cart-button" data-product-id = "${product.id}">
        Add to Cart
      </button>
    </div>
    `;
});
document.querySelector('.js-product-grid').innerHTML = productHTML;

/* This function calculates the total quantity of items in the shopping cart 
 and updates the cart quantity display on the webpage. */
function updateCartQuantity(){
  let totelCartQuantity = cartQantityCount(cart);
      
      document.querySelector('.js-cart-quantity').innerHTML = totelCartQuantity;
}
/* This code listens for clicks on "Add to Cart" buttons. When clicked, it gets the product ID, 
the quantity selected, and the message element that shows "product added to cart". 
It adds the product to the cart, updates the cart quantity display, and briefly shows 
the "product added to cart" message, which disappears after 500 milliseconds. */
document.querySelectorAll('.js-add-to-cart-button')
  .forEach((button) => {
    button.addEventListener('click', () => {
      const productId = button.dataset.productId;
      const quantitySelectElement = button.closest('.product-container').querySelector('.js-product-quantity');
      const productToCart = button.closest('.product-container').querySelector('.product-to-cart');
    
      addToCart(productId,quantitySelectElement);
      updateCartQuantity();

      productToCart.classList.add('visible');
      setTimeout(() => {
        productToCart.classList.remove('visible');
      }, 500);
    });
  });
  