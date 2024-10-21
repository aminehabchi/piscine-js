import { readdir } from 'node:fs/promises';
import { argv } from 'node:process';

if (argv.length > 2) {
    let path = argv[2]
    try {
        const files = await readdir(path);
        console.log(files.length)
    } catch (err) {
        console.error(1);
    }
} else {
    let path = argv[1]
    while (path[path.length - 1] != '/') {
        path = path.slice(0, path.length - 1)
    }
    try {
        const files = await readdir(path);
        console.log(files.length)
    } catch (err) {
        console.error(1);
    }
}
