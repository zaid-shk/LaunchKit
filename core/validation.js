import { copyFolder } from "../utils/copy.js";
import { getModulePath, getProjectPath } from "../utils/paths.js";

export function validate(projectName, dependencies, language) {
    console.log(dependencies.validation);

    const source = getModulePath("validation", dependencies.validation, language);
    const destination = getProjectPath(projectName)
    copyFolder(source, destination)
}