import { copyFolder } from "../utils/copy.js";
import { getModulePath, getProjectPath } from "../utils/paths.js";

export function auth(projectName, dependencies, language, type) {
    if (dependencies.auth === "none") return;

    const source = getModulePath("auth", dependencies.auth, language, type);
    const destination = getProjectPath(projectName)
    copyFolder(source, destination)
}