let energy = prompt("Electricity cost")
let message = (energy < 100) ? 0:
(energy < 200) ? (energy - 100) * 200:
(energy-200) * 220
alert(message)