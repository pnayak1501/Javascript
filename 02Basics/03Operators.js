// + - * / %

var num1 = 7;
var num2 = 6;

console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);
console.log(num1%num2);

var ans = num1>num2;
console.log(ans);

var sellingPrice = 199;
var listingPrice = 799;

var discountPercent;
discountPercent = ((listingPrice-sellingPrice)/listingPrice)*100;
console.log("Discount percentage is : " + discountPercent);
displayDiscountPercentage = Math.round(discountPercent);
console.log(displayDiscountPercentage);