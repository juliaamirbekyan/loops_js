num = 5
row = 0
while (row < num){
    row++
    let col = 0
    while (col < num){
        col++
        if (num - row < col){
            process.stdout.write(`*`) 
        }else{
            process.stdout.write(` `)
        }
    }console.log()
}            
    