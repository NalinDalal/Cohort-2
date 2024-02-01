const fs = require('fs');

// Reading the contents of 'a.txt' asynchronously
fs.readFile('a.txt', 'utf-8', (readErr, data) => {
    if (readErr) {
        console.error('Error reading file:', readErr);
    } else {
        console.log('Data read is:');
        console.log(data);

        // Modifying the data (for example, adding a new line)
        const newData = data + '\nNew line added.';

        // Writing to a new file 'output.txt'
        fs.writeFile('output.txt', newData, 'utf-8', (writeErr) => {
            if (writeErr) {
                console.error('Error writing to file:', writeErr);
            } else {
                console.log('Data written to output.txt');
            }
        });
    }
});

// Variable declaration and initialization
let ans = 0;

// Loop to calculate the sum of numbers from 0 to 99
for (let i = 0; i < 100; i++) {
    ans = ans + i;
}

// Logging the final value of the 'ans' variable to the console
console.log(ans);

/*
In this example:

The contents of 'a.txt' are read asynchronously using fs.readFile.
The read data is then modified (in this case, a new line is added).
The modified data is written to a new file named 'output.txt' using fs.writeFile.
Make sure that the file you want to write to (output.txt in this example) is not critical, as this example overwrites its contents each time the script is run. If you want to append data to an existing file, you can use fs.appendFile instead of fs.writeFile.
*/