var readline = require('readline');

let aa1 = [
];

let aa2 = [
['','','','■','■','','','',''],
['','','■','','','■','','',''],
['','■','','','','','■','',''],
['','','','','','','■','',''],
['','','','','','■','','',''],
['','','','','■','','','',''],
['','','','■','','','','',''],
['','','■','','','','','',''],
['','■','■','■','■','■','■','■',''],
];

let aa3 = [
['  ','  ','  ','  ','  ','  ','  ','  ','  '],
['  ','  ','  ','  ','  ','  ','  ','  ','  '],
['  ','  ','  ','  ','  ','  ','  ','  ','  '],
['  ','  ','  ','  ','  ','  ','  ','  ','  '],
['  ','  ','  ','  ','  ','  ','  ','  ','  '],
['  ','  ','  ','  ','  ','  ','  ','  ','  '],
['  ','  ','  ','  ','  ','  ','  ','  ','  '],
['  ','  ','  ','  ','  ','  ','  ','  ','  '],
];



let aa0 = [aa1,aa2];


function display(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            readline.cursorTo(process.stdout, 0, 0);
            process.stdout.write("------------------\n");
            if(num==1){
                for(var a = 0;a<aa1.length;a++){
                    for(var b = 0;b<aa1.length;b++){
                        if(aa1[a][b] != ""){
                            process.stdout.write(aa1[a][b]);
                        }else{
                            process.stdout.write(" ");
                        }
                        process.stdout.write(" ");
                    }
                    process.stdout.write("\n");
                }
            }else{
                for(var a = 0;a<aa2.length;a++){
                    for(var b = 0;b<aa2.length;b++){
                        if(aa2[a][b] != ""){
                            process.stdout.write(aa2[a][b]);
                        }else{
                            process.stdout.write(" ");
                        }
                        process.stdout.write(" ");
                    }
                    process.stdout.write("\n");
                }
            }
            process.stdout.write("------------------\n");
            resolve();
        }, 200);
    });
}

async function main() {
    console.clear();
    for (var i = 0; i < 100; i++) {
        if(i%2 == 0){
            await display(0);
        }else{
            await display(1);
        }
    }
}

main();