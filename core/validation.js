import { copyFolder } from "../utils/copy.js";
import { getModulePath, getProjectPath } from "../utils/paths.js";

export function validate(projectName, dependencies, language, type) {
    if (dependencies.validation === "none") return;

    const source = getModulePath("validation", dependencies.validation, language, type);
    const destination = getProjectPath(projectName)
    copyFolder(source, destination)
}