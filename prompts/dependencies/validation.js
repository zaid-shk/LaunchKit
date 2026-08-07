import { select } from "@clack/prompts";

export async function askValidation() {
  return await select({
    message: "Choose Validation",
    options: [
      {
        label: "Zod",
        value: "zod",
      },
      {
        label: "Joi",
        value: "joi",
      },
      {
        label: "Express Validator",
        value: "express-validator",
      },
      {
        label: "None",
        value: "none",
      },
    ],
  });
}