let cartTotal = 16.3;

let roundedUp = Math.ceil(cartTotal);

let donation = (roundedUp - cartTotal).toFixed(2);
console.log(roundedUp);

console.log(donation);
