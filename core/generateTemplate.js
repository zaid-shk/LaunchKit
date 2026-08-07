import fs from "node:fs";
import path from "node:path";
import { getModulePath } from "../utils/paths.js";
import { database } from "./database.js";
import { auth } from "./auth.js";
import { validate } from "./validation.js";

export async function generateTemplate(projectName, language, dependencies, type) {
    if (dependencies.database !== "none") {
        await database(projectName, dependencies, language, type)
    }
    if (dependencies.auth !== "none") {
        await auth(projectName, dependencies, language, type)
    }
    if (dependencies.validation !== "none") {
        await validate(projectName, dependencies, language, type)
    }
}