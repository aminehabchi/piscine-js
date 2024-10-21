import { readdir } from 'node:fs/promises';
import { argv } from 'node:process';
import fs from 'node:fs/promises'; 

if (argv.length > 2) {
    let path = argv[2]; 
    const files = await getFilenames(path); 

    let arr = [];
    for (let i = 0; i < files.length; i++) {
        let filePath = `${path}/${files[i]}`;
        if (await checkIfYes(filePath)) { 
            arr.push(generateName(files[i]));
        }
    }

    arr.sort(); 


   
    let s = "";
    for (let i = 0; i < arr.length; i++) {
        let ss = `${i + 1}. ${arr[i]}`; 
        s += ss + (i !== arr.length - 1 ? '\n' : ''); 
    }


    await writeToFile(s);
}


async function writeToFile(s) {
    try {
        await fs.writeFile("vip.txt", s); 
        console.log("File 'vip.txt' written successfully.");
    } catch (err) {
        console.error("Error writing to file:", err);
    }
}


function generateName(fileName) {
    fileName = fileName.slice(0, -5); 
    const parts = fileName.split('_'); 
    return `${parts[1]} ${parts[0]}`;
}


async function checkIfYes(filePath) {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        const obj = JSON.parse(data);
        return obj.answer === "yes"; 
    } catch (err) {
        console.error(`Error processing file ${filePath}:`, err);
        return false; 
    }
}


async function getFilenames(directoryPath) {
    try {
        const files = await readdir(directoryPath); 
        return files; 
    } catch (err) {
        console.error('Error reading the directory:', err);
        return [];
    }
}
