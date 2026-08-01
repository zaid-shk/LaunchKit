import fs from "node:fs";
import { getTemplatePath } from "../utils/paths.js";
import { askTemplate, askType } from "../prompts/index.js";
export function copyTemplate(projectName, language, type) {
  let template;

  if (language === "js" && type === "cjs") {
    template = "js-cjs";
  } else if (language === "js" && type === "esm") {
    template = "js-esm";
  } else if (language === "ts" && type === "cjs") {
    template = "ts-cjs";
  } else {
    template = "ts-esm";
  }

  const templatePath = getTemplatePath(template);

  fs.cpSync(templatePath, projectName, {
    recursive: true,
  });
}
