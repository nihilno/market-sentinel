import z from "zod";
const INVESTMENT_GOALS_TYPE = [
  "Growth",
  "Income",
  "Balanced",
  "Conservative",
] as const;

const RISK_TOLERANCE_OPTIONS_TYPE = ["Low", "Medium", "High"] as const;

const PREFERED_INDUSTRIES_TYPE = [
  "Technology",
  "Healthcare",
  "Finance",
  "Energy",
  "Consumer Goods",
] as const;

export const signUpSchema = z.object({
  fullName: z.string().min(1, { message: "This field cannot be empty." }),
  email: z.email(),
  country: z.string(),
  password: z
    .string()
    .min(8, { message: "Password must include 8 characters or more." }),
  investmentGoals: z.enum(INVESTMENT_GOALS_TYPE, {
    message: "Please select a valid investment goal.",
  }),
  riskTolerance: z.enum(RISK_TOLERANCE_OPTIONS_TYPE, {
    message: "Please select a valid risk level.",
  }),
  preferredIndustry: z.enum(PREFERED_INDUSTRIES_TYPE, {
    message: "Please select a preferred industry.",
  }),
});

export const signInSchema = z.object({
  email: z.email(),
  password: z
    .string()
    .min(8, { message: "Password must include 8 characters or more." }),
});

export type signUpType = z.infer<typeof signUpSchema>;
export type signInType = z.infer<typeof signInSchema>;
