// function getShippingCost(country) {
//   let message;
// switch (country) {
//   case "China":
//   message = "Shipping to China will cost 100 credits";
//   break;

//   case "Chile":
//   message = "Shipping to Chile will cost 250 credits";
//   break;

//   case "Australia":
//   message = "Shipping to Australia will cost 170 credits";
//   break;

//   case "Jamaica":
//   message = "Shipping to Jamaica will cost 120 credits";
//   break;

//   default:
//   message = `Sorry, there is no delivery to your ${country}`;
// }
//   return message;
// }
// console.log(getShippingCost("Germany"));
// console.log(getShippingCost("China"));
// console.log(getShippingCost("Australia"));
// console.log(getShippingCost("Chile"));
// console.log(getShippingCost("Jamaica"));
// console.log(getShippingCost("Sweden"));

// function checkStorage(available, ordered) {

// if (ordered === 0)
//     return "Your order is empty!";
//  if (ordered > available)
//     return "Your order is too large, not enough goods in stock!";

//     return "The order is accepted, our manager will contact you";
  
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));

// function getExtremeElements(array) {

//   return [array[0], array[array.length - 1]];
// }
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));
// console.log(getExtremeElements([1, 2, 3, 4, 5]));