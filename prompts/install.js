import { confirm } from "@clack/prompts";

export async function askInstall() {
  return await confirm({
    message: "Install Dependencies?",
  });
}