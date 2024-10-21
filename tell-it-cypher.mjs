import { argv } from 'node:process';
import fs from 'node:fs/promises';
import { log } from 'node:console';


let fileName = argv[2]
let code = argv[3]
let content = await readFileContent(fileName);
if (code == 'encode') {
    content = Buffer.from(fileName);
    content = content.toString('base64');
    console.log(content);
} else if (code == 'decode') {
    content= Buffer.from(content, 'base64').toString();
}
 let saveFile = argv[4]

 saveContentToFile(saveFile,content)

async function saveContentToFile(fileName, content) {
    try {
        await fs.writeFile(fileName, content, 'utf8'); 
    } catch (err) {
        console.error(`Error saving content to file '${fileName}':`, err);
    }
}

async function readFileContent(filename) {
    try {
        const content = await fs.readFile(filename, 'utf8');
        return content;
    } catch (err) {
        console.error(`Error reading the file '${filename}':`, err);
        return null;
    }
}