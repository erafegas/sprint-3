// If you have time, you can move this variable "products" to a json file and load the data in this js. It will look more professional
var products = [
  {
    id: 1,
    name: "cooking oil",
    price: 10.5,
    type: "grocery",
  },
  {
    id: 2,
    name: "Pasta",
    price: 6.25,
    type: "grocery",
  },
  {
    id: 3,
    name: "Instant cupcake mixture",
    price: 5,
    type: "grocery",
  },
  {
    id: 4,
    name: "All-in-one",
    price: 260,
    type: "beauty",
  },
  {
    id: 5,
    name: "Zero Make-up Kit",
    price: 20.5,
    type: "beauty",
  },
  {
    id: 6,
    name: "Lip Tints",
    price: 12.75,
    type: "beauty",
  },
  {
    id: 7,
    name: "Lawn Dress",
    price: 15,
    type: "clothes",
  },
  {
    id: 8,
    name: "Lawn-Chiffon Combo",
    price: 19.99,
    type: "clothes",
  },
  {
    id: 9,
    name: "Toddler Frock",
    price: 9.99,
    type: "clothes",
  },
];
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
  let x = false;
  let y = 0;
  while (x != true) {
      if (id == products[y].id) {
          x = true;
          cartList.push(products[y]);
      }
      else {
          y++;
      }
  }

}

// Exercise 2
function cleanCart() {
  cartList = [];
}

// Exercise 3
function calculateTotal() {

  let x;

  for (x=0; x < cartList.length; x++) {
     total += cartList[x].price;
  }

  return total;

}

// Exercise 4
function generateCart() {


  for (var x=0; x < cartList.length; x++) {
    
  var encontradoXenCart = false;

    for (var y=0; y < cart.length;y++) {
      if (cartList[x].id === cart[y].id){
        cart[y].quantity +=1;
        encontradoXenCart = true;
      }
    }
    if (!encontradoXenCart) {
      cart.push({...cartList[x]}); // clonar el objeto con {...} para que no modifique los elementos de cartlist.
      cart[cart.length -1].quantity = 1;
    }
  }
}


// Exercise 5
function applyPromotionsCart() {
 
  for (var x=0; x < cart.length; x++){
    if (cart[x].quantity >= 3 && cart[x].name == "cooking oil") {
      cart[x].price = cart[x].price - 10;
    }
    if(cart[x].quantity >= 10 && cart[x].name == "Instant cupcake mixture"){
      cart[x].price =((cart[x].price / 3) * 2).toFixed(2);
    }

  }


}

// ** Nivell II **

// Exercise 7
function addToCart(id) {
  // Refactor previous code in order to simplify it
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array
}

// Exercise 9
function printCart() {
  // Fill the shopping cart modal manipulating the shopping cart dom
}

function open_modal() {
  console.log("Open Modal");
}
