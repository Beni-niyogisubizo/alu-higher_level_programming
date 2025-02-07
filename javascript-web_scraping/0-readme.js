 #!/usr/bin/node
const fs = require('fs');
const path = require('path');

// Get the file path from the first command-line argument
const filePath = process.argv[2];

// Check if the file path is provided
if (!filePath) {
    console.error('Usage: node script.js <file_path>');
    process.exit(1); // Exit with an error code
}

// Read the file in UTF-8 encoding
fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
        // Print the error object if an error occurs
        console.error('An error occurred:', err);
    } else {
        // Print the content of the file
        console.log(data);
    }
});
