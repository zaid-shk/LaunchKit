import { copyFolder } from "../utils/copy.js";
import { getModulePath, getProjectPath } from "../utils/paths.js";

export function auth(projectName, dependencies, language) {


    const source = getModulePath("auth", dependencies.auth, language);
    const destination = getProjectPath(projectName)
    copyFolder(source, destination)
}