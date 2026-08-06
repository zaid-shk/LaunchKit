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
import { askDatabase } from "../prompts/dependencies/database.js";
import { generateTemplate } from "../core/generateTemplate.js";


export async function createProject() {
  // const s = spinner();

  const projectName = await askProjectName();

  if (!projectName) {
    console.error("Please provide a project name.");
    process.exit(1);
  }

  if (fs.existsSync(projectName)) {
    console.error(`Folder "${projectName}" already exists.`);
    process.exit(1);
  }


  const language = await askLanguage();
  const type = await askType();


  copyTemplate(projectName, language, type);
  // s.stop("Project Created");

  const dependencies = await installDependecies();
  generateTemplate(projectName, language, dependencies)


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
