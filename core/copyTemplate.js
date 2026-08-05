import fs from "node:fs";
import { getTemplatePath } from "../utils/paths.js";
import { askTemplate, askType } from "../prompts/index.js";
export function copyTemplate(projectName, language, type) {
  console.log(language,type);
  
 let template;

if (language === "js" && type === "cjs") {
  template = "js-cjs";
}

if (language === "js" && type === "esm") {
  template = "js-esm";
}

if (language === "ts" && type === "cjs") {
  template = "ts-cjs";
}

if (language === "ts" && type === "esm") {
  template = "ts-esm";
}

if (!template) {
  throw new Error(`Invalid combination: language=${language}, type=${type}`);
}
  console.log(template)

  const templatePath = getTemplatePath(template);

  fs.cpSync(templatePath, projectName, {
    recursive: true,
  });
}
