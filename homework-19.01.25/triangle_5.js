num = 5
row = 0
while (row < num){
    row += 1
    col = 0
    while (col < num){
        col += 1
        if (row + col <= num){
            process.stdout.write(`*`) 
        }else{
            process.stdout.write(` `)
        }
    }console.log()
}            