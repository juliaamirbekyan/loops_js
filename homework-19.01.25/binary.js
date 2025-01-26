let num = 10;
let bin = "";
while (num > 0) {
  bin = (num % 2) + bin;
  num = Math.floor(num / 2); 
}
console.log(bin);
