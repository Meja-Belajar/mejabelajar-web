import { z } from "zod";

import { DateUtil } from "@src/utils/dateUtil";

// schema for user login
export const LoginUserSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .min(5, { message: "Email must be at least 5 characters" })
    .email("Invalid email address"),
  password: z
    .string({ required_error: "Password is required" })
    .min(8, { message: "Password must be at least 8 characters" })
    .max(15, { message: "Password must be at most 15 characters" }),
});

// schema for user registration
export const RegisterUserSchema = z
  .object({
    user_name: z
      .string({ required_error: "Name is required" })
      .min(3, { message: "Name must be at least 3 characters" }),
    email: z
      .string({ required_error: "Correct email format is required" })
      .min(5, { message: "Email must be at least 5 characters" })
      .email("Invalid email address"),
    phone_number: z
      .string({ required_error: "Phone number is required" })
      .min(10, { message: "Phone number must be at least 10 characters" })
      .max(15, { message: "Phone number must be at most 15 characters" })
      .regex(/^[0-9]+$/, { message: "Phone number must be a number" }),
    bod: z.coerce
      .date({ required_error: "Date of birth is required" })
      .min(new Date("1900-01-01"), {
        message: "Date of birth must be after 1900-01-01",
      })
      .refine((data) => DateUtil.isAgeValid(data), {
        message: "You must be at least 17 years old",
        path: ["bod"],
      }),
    password: z
      .string({ required_error: "Password is required" })
      .min(8, { message: "Password must be at least 8 characters" })
      .max(15, { message: "Password must be at most 15 characters" }),
    confirm_password: z
      .string({ required_error: "Confirm password is required" })
      .min(8, { message: "Password must be at least 8 characters" })
      .max(15, { message: "Password must be at most 15 characters" }),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"],
  });

// schema for user profile update
export const UpdateProfileSchema = z.object({
  user_name: z
    .string({ required_error: "Name is required" })
    .min(3, { message: "Name must be at least 3 characters" }),
  email: z
    .string({ required_error: "Correct email format is required" })
    .min(5, { message: "Email must be at least 5 characters" })
    .email("Invalid email address"),
  phone_number: z
    .string({ required_error: "Phone number is required" })
    .min(10, { message: "Phone number must be at least 10 characters" })
    .max(15, { message: "Phone number must be at most 15 characters" })
    .regex(/^[0-9]+$/, { message: "Phone number must be a number" }),
  bod: z.coerce.date({ required_error: "Date of birth is required" }),
});

// schema for user password update
export const UpdatePasswordSchema = z.object({
  old_password: z.string(),
  new_password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .max(15, { message: "Password must be at most 15 characters" }),
  confirm_password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .max(15, { message: "Password must be at most 15 characters" }),
});
