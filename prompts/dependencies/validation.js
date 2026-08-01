import { select } from "@clack/prompts";

export async function askValidation() {
  return await select({
    message: "Choose Validation",
    options: [
      {
        value: "zod",
        label: "Zod",
      },
      {
        value: "joi",
        label: "Joi",
      },
      {
        value: "express-validator",
        label: "Express Validator",
      },
      {
        value: "none",
        label: "None",
      },
    ],
  });
}