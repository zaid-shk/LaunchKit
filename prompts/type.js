import { select } from "@clack/prompts";

export async function askType() {
  return await select({
    message: "Module System ?",
    options: [
      {
        label: "ES commonjs (require/module.exports)",
        value: "commonjs",
      },
      {
        label: "module  (import / export)",
        value: "module",
      },
    ],
  });
}
