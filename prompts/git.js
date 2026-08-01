import { confirm } from "@clack/prompts";

export async function askGit() {
  return await confirm({
    message: "Initialize Git Repository?",
  });
}