import fs from 'node:fs'

export function copyFolder(source, destination) {
    fs.cpSync(source, destination, {
        recursive: true,
        force: true
    });
}