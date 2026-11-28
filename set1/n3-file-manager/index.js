/*
Name: Kemerson D. Fernandez
Section: IV-BSIT-C
Activity: N3 - File Manager with fs and path
Date: November 25, 2026
*/

const fs = require("fs");
const path = require("path");

// Folder where all text files will be stored
const filesFolder = path.join(__dirname, "files");

// Get command-line arguments
const command = process.argv[2];
const fileName = process.argv[3];
const content = process.argv.slice(4).join(" ");

// Build a safe file path
function getFilePath(name) {
    if (!name || path.basename(name) !== name) {
        throw new Error("Please provide a valid file name.");
    }

    return path.join(filesFolder, name);
}

// Create a new file
function createFile(name, text) {
    const filePath = getFilePath(name);

    fs.writeFileSync(filePath, text, { flag: "wx" });

    console.log(`File created successfully: ${name}`);
}

// Read an existing file
function readFile(name) {
    const filePath = getFilePath(name);

    const data = fs.readFileSync(filePath, "utf8");

    console.log(`File: ${name}`);
    console.log("Contents: " + data);
}

// Append text to an existing file
function updateFile(name, text) {
    const filePath = getFilePath(name);

    fs.appendFileSync(filePath, text);

    console.log(`File updated successfully: ${name}`);
}

// Delete an existing file
function deleteFile(name) {
    const filePath = getFilePath(name);

    fs.unlinkSync(filePath);

    console.log(`File deleted successfully: ${name}`);
}

// List all files with their details
function listFiles() {
    const fileNames = fs.readdirSync(filesFolder);

    if (fileNames.length === 0) {
        console.log("No files found.");
        return;
    }

    fileNames.forEach((name) => {
        const filePath = path.join(filesFolder, name);
        const stats = fs.statSync(filePath);

        if (stats.isFile()) {
            const fileContent = fs.readFileSync(filePath, "utf8");

            console.log("--------------------------------");
            console.log("Full Path: " + filePath);
            console.log("File Name: " + path.basename(filePath));
            console.log("Extension: " + path.extname(filePath));
            console.log("Contents: " + fileContent);
        }
    });
}

// Display student information
console.log("Name: Kemerson D. Fernandez");
console.log("Section: IV-BSIT-C");
console.log("Activity: N3 - File Manager");
console.log("--------------------------------");

try {
    switch (command) {
        case "create":
            if (process.argv.length < 5) {
                throw new Error("Usage: node index.js create <filename> <content>");
            }
            createFile(fileName, content);
            break;

        case "read":
            readFile(fileName);
            break;

        case "update":
            if (process.argv.length < 5) {
                throw new Error("Usage: node index.js update <filename> <text>");
            }
            updateFile(fileName, content);
            break;

        case "delete":
            deleteFile(fileName);
            break;

        case "list":
            listFiles();
            break;

        default:
            console.log("Unknown command.");
            console.log("Available commands: create, read, update, delete, list");
    }
} catch (error) {
    console.error("Error: " + error.message);
}
