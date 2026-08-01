import { select } from "@clack/prompts";

export async function askORM() {
  return await select({
    message: "Choose ORM / ODM",
    options: [
      {
        value: "mongoose",
        label: "Mongoose",
      },
      {
        value: "prisma",
        label: "Prisma",
      },
      {
        value: "drizzle",
        label: "Drizzle",
      },
      {
        value: "sequelize",
        label: "Sequelize",
      },
      {
        value: "none",
        label: "None",
      },
    ],
  });
}