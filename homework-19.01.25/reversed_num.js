let num = prompt("Number?");
let reversed_num = 0;
let last_digit;
while (num !== 0) {
  last_digit = num % 10;
  reversed_num = reversed_num * 10 + last_digit; 
  num = (num - last_digit) / 10;
}
alert(reversed_num); 
