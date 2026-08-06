import path from "node:path";
import { fileURLToPath } from "node:url";

export function getTemplatePath(template) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const templatePath = path.join(__dirname, `../template/base/${template}`);

  return path.join(__dirname, "..", "template", "base", template);
}
export function getModulePath(category, module, language) {

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  return path.join(
    __dirname,
    "..",
    "template",
    "modules",
    category,
    module,
    language
  );
}

export function getProjectPath(projectName) {
  return path.join(process.cwd(), projectName);
}
