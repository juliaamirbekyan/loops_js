let age1 = prompt("1.How old are you?")
let age2 = prompt("2.How old are you?")
let age3 = prompt("3.How old are you?")
let age4 = prompt("4.How old are you?")
if (age1 < age2 && age1 < age3 && age1 < age4){
    alert(`Younger age is ${age1}`)
}else if (age2 < age1 && age2 < age3 && age2 < age4){
    alert(`Younger age is ${age2}`)
}else if (age3 < age1 && age3 < age2 && age3 < age4){
    alert(`Younger age is ${age3}`)
}else {
    alert(`Younger age is ${age4}`)
} 
