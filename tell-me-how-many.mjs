import fs from "fs"

const args = process.argv.slice(2);

let path = "."

if (args && args.length > 0) {
    path = args[i]
}

fs.readdir(path, (err, files) => {
    if (!err) {
        console.log(files.length);
    }
});


