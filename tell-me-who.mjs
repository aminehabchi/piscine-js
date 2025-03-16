import fs from "fs"

const args = process.argv.slice(2);

let path = "."

if (args && args.length > 0) {
    path = args[0]
}

fs.readdir(path, (err, files) => {
    if (!err) {
        for (let i = 0; i < files.length; i++) {
            let name = files[i].split('.')
            name = name[0].split('_')
            console.log((i + 1) + ". " + name[0], name[1]);

        }
    }
});


