const readline = require('readline');

let display = (count) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            readline.cursorTo(process.stdout, 0, 0);
            for(let i=0;(count/10)>i;i++){
                process.stdout.write("\n");
            }
            for(let j=0;(count%10)>j;j++){
                process.stdout.write("　");
            }
            process.stdout.write("〇〇=>");
            resolve();
        }, 100);
    });
}


let  main = async () => {
    console.clear();
    let count = 1;
    while(1){
        await display(count++);
    }
};


main();