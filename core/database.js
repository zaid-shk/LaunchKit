import { copyFolder } from "../utils/copy.js";
import { getModulePath, getProjectPath } from "../utils/paths.js";

export function database(projectName, dependencies, language) {
    const source = getModulePath("database", dependencies.database, language);
    const destination = getProjectPath(projectName)
    copyFolder(source, destination)
}