let productHTML = '';

/*Generating HTML code for each objects in product class*/ 
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
        LKR ${(product.priceCent/100).toFixed(2)}
      </div>

      <div class="product-quantity">
        <select>
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

document.querySelectorAll('.js-add-to-cart-button')

  .forEach((button) => {
    button.addEventListener('click', () => {
      const productId = button.dataset.productId;
  
      let matchingitem;

      cart.forEach((item) => {
        if(productId === item.productId){
          matchingitem = item;
        }
      });

      if (matchingitem){
        matchingitem.quantity += 1;
      }else{
        cart.push({
        productId : productId,
        quantity : 1
        });
      }

      let totelCartQuantity = 0;
      cart.forEach((item) =>{
        totelCartQuantity += item.quantity;
      })

      document.querySelector('.js-cart-quantity').innerHTML = totelCartQuantity;
      
    });
  });
  