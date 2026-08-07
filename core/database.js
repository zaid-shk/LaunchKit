import { copyFolder } from "../utils/copy.js";
import { getModulePath, getProjectPath } from "../utils/paths.js";

export function database(projectName, dependencies, language, type) {
    if (dependencies.database === "none") return;

    const source = getModulePath("database", dependencies.database, language, type);
    const destination = getProjectPath(projectName)
    copyFolder(source, destination)
}