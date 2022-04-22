

let usd = 19.75
let rate = 122.09

function convertCurrency(usd,rate){
return usd * rate;
} 

res = convertCurrency(usd,rate)

console.log(usd + " USD is equal to " + res.toFixed(2) + " Nepalese Rupees")