"use client";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import {
  INVESTMENT_GOALS,
  PREFERRED_INDUSTRIES,
  RISK_TOLERANCE_OPTIONS,
} from "@/lib/consts";
import { signUpSchema, signUpType } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import FormFieldCountry from "./form-field-country";
import FormFieldInput from "./form-field-input";
import FormFieldSelect from "./form-field-select";
import FormSwitch from "./form-switch";

function SignUpForm() {
  const form = useForm<signUpType>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      fullName: "",
      email: "",
      country: "PL",
      password: "",
      investmentGoals: "",
      riskTolerance: "",
      preferredIndustry: "",
    },
  });

  function onSubmit(formData: signUpType) {
    console.log(formData);
  }

  return (
    <>
      <h1 className="form-title mx-auto max-w-xl">Sign Up & Personalize</h1>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mx-auto max-w-xl space-y-5"
        >
          <FormFieldInput
            name="fullName"
            label="Full Name"
            placeholder="John Doe"
          />
          <FormFieldInput
            name="email"
            label="Email"
            type="email"
            placeholder="example@email.com"
          />
          <FormFieldCountry name="country" label="Country" />
          <FormFieldInput
            name="password"
            label="Password"
            type="password"
            placeholder="Enter a strong password"
          />

          <FormFieldSelect
            name="investmentGoals"
            label="Investment Goals"
            placeholder="Select your investment goal"
            options={INVESTMENT_GOALS}
          />
          <FormFieldSelect
            name="riskTolerance"
            label="Risk Tolerance"
            placeholder="Select your risk level"
            options={RISK_TOLERANCE_OPTIONS}
          />
          <FormFieldSelect
            name="preferredIndustry"
            label="Preferred Industry"
            placeholder="Select your preferred industry"
            options={PREFERRED_INDUSTRIES}
          />

          <Button
            type="submit"
            disabled={form.formState.isSubmitting}
            className="yellow-btn mt-5 w-full capitalize"
          >
            {form.formState.isSubmitting ? (
              <span className="flex items-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                Creating account
              </span>
            ) : (
              "Start Your Investing Journey"
            )}
          </Button>
        </form>
      </Form>
      <FormSwitch
        text="Already have an account?"
        button="Sign In"
        href="/sign-in"
      />
    </>
  );
}

export default SignUpForm;
