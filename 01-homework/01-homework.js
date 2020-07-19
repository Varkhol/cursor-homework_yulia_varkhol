const apple = 15.678;
const cherry = 123.965;
const melon = 90.2345;
const cart = [];

cart.push(apple, cherry, melon);
console.log("Максимальна ціна: " + Math.max(...cart));
console.log("Мінімальна ціна: " + Math.min(...cart));

let sum = 0;
for(let i = 0; i < cart.length; i++){
    sum += cart[i];
    }
console.log("Сума: "+sum+ " "+"грн.");

let floorSum = 0;
for(let i = 0; i < cart.length; i++){
    floorSum += Math.floor(cart[i]);
    }
	
console.log("Сума округлена: "+floorSum+ " "+"грн.");
console.log("Сума округлена до сотень: " + (roundSumm = (Math.ceil(sum/100))*100) +" "+"грн.");
console.log("Чи парне число: " + (floorSum %2 ===0));

const cash = 500;
console.log("Решта: " + (cash - sum)+"грн.");
console.log("Округлене середнє значення: " + (sum/cart.length).toFixed(2)+"грн.");

const discount = Math.random()*10;
console.log("Ціна зі знижкою: " + (sum-discount).toFixed(2)+"грн.");

let cost = 0;
for(let i = 0; i < cart.length; i++){
    cost += cart[i]/2;
    }
console.log("Чистий прибуток: "+((sum-discount)-cost).toFixed(2) +"грн.");