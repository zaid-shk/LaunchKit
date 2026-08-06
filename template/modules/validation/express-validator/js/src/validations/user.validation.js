import { body } from "express-validator";

export const userValidation = [
    body("name")
        .trim()
        .notEmpty()
        .withMessage("Name is required")
        .isLength({ min: 3 })
        .withMessage("Name must be at least 3 characters long"),

    body("email")
        .isEmail()
        .withMessage("Invalid email address"),

    body("password")
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 characters long"),
];