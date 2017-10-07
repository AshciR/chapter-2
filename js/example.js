// Variables used for the greeting message
const greet = "Howdy ";
const name = "Richie";
const message = ", please check your order:";
const welcome = greet + name + message;

// Variables used for the sign calculations
const sign = "My Vacation Home";
const tilesVar = sign.length;
const subTotalVar = tilesVar * 5;
const ship = 7;
const total = subTotalVar + ship;

// Assign the values to the DOM
let elGreeting = document.getElementById("greeting");
elGreeting.textContent = welcome;

let elSign = document.getElementById("userSign");
elSign.textContent = sign;

let elTiles = document.getElementById("tiles");
elTiles.textContent = tilesVar;

let elSubtotal = document.getElementById("subTotal");
elSubtotal.textContent = "$" + subTotalVar;

let elShipping = document.getElementById("shipping");
elShipping.textContent = "$" + ship;

let elGrandTotal = document.getElementById("grandTotal");
elGrandTotal.textContent = "$" + total;

