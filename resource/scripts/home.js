const product = [{
  image : 'resource/product/iphone-13-pro.webp',
  name :'Apple iphone 13 pro - 256GB',
  rating :{
    stars:'resource/ratings/rating-45.png',
    count: 28
  },
  priceCent:17000000,
  },{
  image : 'resource/product/iso-100-protein-powder.jpg',
  name :'Dymatize ISO 100 - 5lb',
  rating :{
    stars:'resource/ratings/rating-40.png',
    count: 127
  },
  priceCent:3400000,
  },{
  image : 'resource/product/black-gray-sport-tshirt.webp',
  name :'Black & Gray Sport T-shirt',
  rating :{
    stars:'resource/ratings/rating-50.png',
    count: 12
  },
  priceCent:130000,
  },{
    image : 'resource/product/ladies-handbag.png',
    name :'Black Ladies Handbag & purse',
    rating :{
      stars:'resource/ratings/rating-25.png',
      count: 41
    },
    priceCent:470000,
    },{
      image : 'resource/product/Xiaomi-10000mAh-powerbank.webp',
      name:'Xiaomi Mi Powerbank - 10000mAh',
      rating :{
        stars:'resource/ratings/rating-30.png',
        count: 84
      },
      priceCent:1800000,
      },{
      image : 'resource/product/cerave-hydrating-cleanser.jpg',
      name :'Cerave hydrating cleanser',
      rating :{
        stars:'resource/ratings/rating-40.png',
        count: 102
      },
      priceCent:220000,
      }
];

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

      <button class="add-to-cart-button button-primary">
        Add to Cart
      </button>
    </div>
    `;
});

document.querySelector('.js-product-grid').innerHTML = productHTML;