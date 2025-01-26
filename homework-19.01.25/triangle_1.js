let num = 5
let row = 0 
while (row < num){
    row++
    let col = 0 
    while (col < row){
        col++
        process.stdout.write(`* `)
    }console.log()
}