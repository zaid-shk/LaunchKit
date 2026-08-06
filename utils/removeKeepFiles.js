import fs from "node:fs";
import path from "node:path";

export function removeKeepFiles(dir) {
    if (!fs.existsSync(dir)) return;

    const files = fs.readdirSync(dir);

    for (const file of files) {
        const fullPath = path.join(dir, file);

        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            removeKeepFiles(fullPath);
        } else if (file === ".gitkeep" || file === ".keep") {
            fs.unlinkSync(fullPath);
        }
    }
}