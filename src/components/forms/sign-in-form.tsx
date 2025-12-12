"use client";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { signInAction } from "@/lib/actions/actions";
import { signInSchema, signInType } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import FormFieldInput from "./form-field-input";
import FormSwitch from "./form-switch";

function SignInForm() {
  const form = useForm<signInType>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "maciej.polowy2@gmail.com",
      password: "Guwno123",
    },
  });

  const { push } = useRouter();

  async function onSubmit(formData: signInType) {
    try {
      const result = await signInAction(formData);
      if (result.success) {
        push("/");
        toast.success("You are signed in.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Sign in failed", {
        description:
          error instanceof Error ? error.message : "Failed to sign in.",
      });
    }
  }

  return (
    <div className="relative top-1/2 h-full -translate-y-1/2">
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
    </div>
  );
}

export default SignInForm;
