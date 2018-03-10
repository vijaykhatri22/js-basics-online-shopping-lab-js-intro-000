var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({ itemName : item , itemPrice : Math.floor((Math.random() * 100) + 1)});

  return `${item} has been added to your cart.`;
}

function viewCart() {
  if(!cart.length){
    return "Your shopping cart is empty."
  }
  else{
    	var temp=[];
    for(var i=0;i<cart.length;i++){
      temp.push(`${cart[i].itemName} at \$${cart[i].itemPrice}`);
    }
    if(cart.length==1){
      return `In your cart, you have ${temp[0]}.`;
      
    }
    else {
      return `In your cart, you have ${temp.slice(0,cart.length - 1).join(', ')} and ${temp.slice(cart.length-1)}.`;
  }
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
