import process from "node:process";
import fs from "node:fs";
import { outro, spinner } from "@clack/prompts";
import { askProjectName } from "../prompts/projectName.js";
import { askTemplate } from "../prompts/template.js";

import { copyTemplate } from "./copyTemplate.js";
import { askLanguage } from "../prompts/language.js";
import { updatePackegeJson } from "./updatePackageJson.js";
import { askType } from "../prompts/type.js";
import { installDependecies } from "./installDependecies.js";

export async function createProject() {
  const s = spinner();

  const projectName = await askProjectName();
  const language = await askLanguage();
  const type = await askType();

  if (!projectName) {
    console.error("Please provide a project name.");
    process.exit(1);
  }

  if (fs.existsSync(projectName)) {
    console.error(`Folder "${projectName}" already exists.`);
    process.exit(1);
  }

  s.start("Creating project");

  copyTemplate(projectName, language, type);
  s.stop("Project Created");

  const dependencies = await installDependecies();

  updatePackegeJson(projectName, type, dependencies);

  outro(`
Project created successfully! 🎉

Next:
  cd ${projectName}
  npm install
  npm run dev
`);

  return projectName;
}
