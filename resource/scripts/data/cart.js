export const cart = [{
  productId : '003',
  quantity : 2
  },{
  productId : '002',
  quantity : 6
  }];

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
  }
}