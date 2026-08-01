import { select } from "@clack/prompts";

export async function askTemplate() {
  return await select({
    message: "Choose Template",
    options: [
      {
        value: "express",
        label: "Express",
      },
    ],
  });
}
