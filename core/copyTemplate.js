import fs from "node:fs";
import { getTemplatePath } from "../utils/paths.js";
import { askTemplate, askType } from "../prompts/index.js";
import { removeKeepFiles } from "../utils/removeKeepFiles.js";
export function copyTemplate(projectName, language, type) {

  let template;

  if (language === "js" && type === "commonjs") {
    template = "js-cjs";
  }

  if (language === "js" && type === "module") {
    template = "js-esm";
  }

  if (language === "ts" && type === "commonjs") {
    template = "ts-cjs";
  }

  if (language === "ts" && type === "module") {
    template = "ts-esm";
  }

  if (!template) {
    throw new Error(`Invalid combination: language=${language}, type=${type}`);
  }

  const templatePath = getTemplatePath(template);

  fs.cpSync(templatePath, projectName, {
    recursive: true,
  });
  removeKeepFiles(projectName)
}
