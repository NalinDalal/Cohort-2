const fs = require('fs');
let a=1;
console.log(a);

fs.readFile('a.txt','utf-8',(err,data)=>{
    console.log('data read is');
    console.log(data);
})

fs.writeFile('a.txt','utf-8',(writeErr)=>{
    if (writeErr) {
        console.error('Error writing to file:', writeErr);
    } else {
        console.log('Data written to output.txt');
    }
})

// Reading the contents of 'input.txt' asynchronously and writing back to another file 'output.txt'
fs.readFile('a.txt', 'utf-8', (readErr, data) => {
    if (readErr) {
        console.error('Error reading file:', readErr);
    } else {
        console.log('Data read from a.txt:');
        console.log(data);

        // Modifying the data (e.g., appending something)
        const modifiedData = data + '\nAppended Text';

        // Writing the modified data to 'output.txt'
        fs.writeFile('output.txt', modifiedData, 'utf-8', (writeErr) => {
            if (writeErr) {
                console.error('Error writing to file:', writeErr);
            } else {
                console.log('Data written to output.txt');
            }
        });
    }});

let ans=0;
for(let i=0;i<100;i++){
    ans=ans+i;
}
console.log(ans);