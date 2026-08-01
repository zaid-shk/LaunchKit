import path from "node:path";
import { fileURLToPath } from "node:url";

export function getTemplatePath(template) {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const templatePath = path.join(__dirname, `../template/${template}`);

  return path.join(__dirname, "..", "template", template);
}
