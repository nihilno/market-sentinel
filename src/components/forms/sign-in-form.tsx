"use client";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { signInSchema, signInType } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import FormFieldInput from "./form-field-input";
import FormSwitch from "./form-switch";

function SignInForm() {
  const form = useForm<signInType>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",

      password: "",
    },
  });

  function onSubmit(formData: signInType) {
    console.log(formData);
  }

  return (
    <>
      <h1 className="form-title mx-auto max-w-xl">Welcome back</h1>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mx-auto max-w-xl space-y-5"
        >
          <FormFieldInput
            name="email"
            label="Email"
            type="email"
            placeholder="Enter your email"
          />

          <FormFieldInput
            name="password"
            label="Password"
            type="password"
            placeholder="Enter a strong password"
          />

          <Button
            type="submit"
            disabled={form.formState.isSubmitting}
            className="yellow-btn mt-5 w-full capitalize"
          >
            {form.formState.isSubmitting ? (
              <span className="flex items-center gap-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                Logging in
              </span>
            ) : (
              "Login"
            )}
          </Button>
        </form>
      </Form>
      <FormSwitch
        text="Don't have an account?"
        button="Sign Up"
        href="/sign-up"
      />
    </>
  );
}

export default SignInForm;
