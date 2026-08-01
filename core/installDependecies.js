import {
  askAuthentication,
  askDatabase,
  askORM,
  askValidation,
} from "../prompts/dependencies/index.js";

export async function installDependecies() {
  const auth = await askAuthentication();
  const database = await askDatabase();
  const orm = await askORM();
  const validation = await askValidation();

  return { auth, database, orm, validation };
}
