export let cart = JSON.parse(localStorage.getItem('cart')); 

if(!cart){  
cart = [{
  productId : '003',
  quantity : 3
  },{
  productId : '002',
  quantity : 6
  }];
}

export function saveToStorage(){
  localStorage.setItem('cart',JSON.stringify(cart));
}

/*  This function gets the selected value from the <select> element and adds it to the cart.
If the product is already in the cart, it updates the quantity. 
If not, it adds the product with the selected quantity from the <select> element. */
export function addToCart(productId,quantitySelectElement){
  let matchingitem;
  const quantity = Number(quantitySelectElement.value);

  document.querySelector('.js-product-quantity')
  cart.forEach((cartItem) => {
    if(productId === cartItem.productId){
      matchingitem = cartItem;
    }
  });
  
  if (matchingitem){
    matchingitem.quantity += quantity;
  }else{
    cart.push({
    productId : productId,
    quantity : quantity
    });
    console.log(quantity);
  }
  saveToStorage();
}

/*Removes a product from the cart by its productId.
It creates a new array with all products except the one to be removed,
and updates the cart array with the filtered (newCart) array.*/
export function removeFromCart(productId){
  const newCart = [];

  cart.forEach((cartItem) =>{
    const stayProduct = cartItem.productId

    if (productId != stayProduct){
      newCart.push(cartItem)
    }
  })

  cart = newCart;
  saveToStorage();
}