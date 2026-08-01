import { text } from "@clack/prompts";

export async function askProjectName() {
  return await text({
    message: "Project Name",
  });
}
