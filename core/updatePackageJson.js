import fs from "node:fs";
import path from "node:path";
import { askType } from "../prompts/index.js";
import { auth, database, orm, validation } from "../config/package.js";
import { packages } from "../config/dependecies/packages.js";

export function updatePackegeJson(projectName, type, dependencies = {}) {
  const packageJsonPath = path.join(projectName, "package.json");

  const packageContent = fs.readFileSync(packageJsonPath, "utf8");

  const packageJson = JSON.parse(packageContent);

  //update
  packageJson.name = projectName;
  packageJson.type = type;

  packageJson.dependencies = {
    express: packages.express,
    dotenv: packages.dotenv,

    ...(auth[dependencies.auth] || {}),
    ...(database[dependencies.database] || {}),
    ...(orm[dependencies.orm] || {}),
    ...(validation[dependencies.validation] || {}),
  };

  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
}
