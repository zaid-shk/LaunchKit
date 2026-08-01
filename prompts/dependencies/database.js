import { select } from "@clack/prompts";

export async function askDatabase() {
  return await select({
    message: "Choose Database",
    options: [
      {
        value: "mongodb",
        label: "MongoDB",
      },
      {
        value: "postgres",
        label: "PostgreSQL",
      },
      {
        value: "mysql",
        label: "MySQL",
      },
      {
        value: "none",
        label: "None",
      },
    ],
  });
}
