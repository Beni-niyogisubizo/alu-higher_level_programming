#!/usr/bin/node
const fs = require('fs'); // Removed 'path' as it's unused

// Get the file path from the first command-line argument
const filePath = process.argv[2];

// Check if the file path is provided
if (!filePath) {
  console.error('Usage: node script.js <file_path>');
  process.exit(1); // Exit with an error code
}

// Read the file in UTF-8 encoding
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    // Print the error object if an error occurs
    console.error('An error occurred:', err.message); // Use err.message for cleaner output
    process.exit(1); // Exit with an error code
  } else {
    // Print the content of the file
    console.log(data);
  }
});:
