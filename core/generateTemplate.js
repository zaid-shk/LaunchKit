import fs from "node:fs";
import path from "node:path";
import { getModulePath } from "../utils/paths.js";
import { database } from "./database.js";
import { auth } from "./auth.js";
import { validate } from "./validation.js";

export async function generateTemplate(projectName, language, dependencies) {
    await database(projectName, dependencies, language)
    await auth(projectName, dependencies, language)
    await validate(projectName, dependencies, language)
}