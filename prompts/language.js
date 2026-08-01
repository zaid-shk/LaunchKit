import { select } from "@clack/prompts";

export async function askLanguage() {
  return await select({
    message: "Choose Language",
    options: [
      {
        value: "js",
        label: "JavaScript",
      },
      {
        value: "ts",
        label: "TypeScript",
      },
    ],
  });
}
