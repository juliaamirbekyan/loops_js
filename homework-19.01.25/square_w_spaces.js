let num = 5
let row = 0;
while (row < num){
    row++
    let col = 0;
    while (col < num){
        col++
        if (row == 1 || col == 1 || row == num || col == num){
            process.stdout.write(`*`)
        }
        else{
            process.stdout.write(` `)
        }
    }
    console.log()
}