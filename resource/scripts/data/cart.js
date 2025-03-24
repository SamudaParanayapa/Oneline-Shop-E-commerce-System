export let cart = JSON.parse(localStorage.getItem('cart')) || [];

export function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId, quantitySelectElement) {
  const quantity = Number(quantitySelectElement.value);
  let matchingItem;

  cart.forEach((item) => {
    if (productId === item.productId) {
      matchingItem = item;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += quantity;
  } else {
    cart.push({
      productId: productId,
      quantity: quantity,
    });
  }
  saveToStorage();
}

export function removeFromCart(productId) {
  const newCart = cart.filter((item) => item.productId !== productId);
  cart = newCart;
  saveToStorage();
}

export function cartQuantityCount() {
  return cart.reduce((total, item) => total + item.quantity, 0);
}