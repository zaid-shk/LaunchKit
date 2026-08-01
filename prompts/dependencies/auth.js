import { select } from "@clack/prompts";

export async function askAuthentication() {
  return await select({
    message: "Choose Authentication",
    options: [
      {
        value: "jwt",
        label: "JWT",
      },
      {
        value: "session",
        label: "Session",
      },
      {
        value: "passport",
        label: "Passport",
      },
      {
        value: "none",
        label: "None",
      },
    ],
  });
}
