#!/usr/bin/node
const fs = require('fs');

// Get the file path from the first command-line argument
const filePath = process.argv[2];

// Check if the file path is provided
if (!filePath) {
  console.error('Usage: ./0-readme.js <file_path>');
  process.exit(1);
}

// Read the file in UTF-8 encoding
fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    // Print the error object if an error occurs
    console.error(err);
    return;
  }
  // Print the content of the file
  console.log(data);
});

