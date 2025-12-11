import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { useFormContext } from "react-hook-form";
import { Input } from "../ui/input";

function FormFieldInput({
  name,
  label,
  type = "text",
  placeholder = "",
}: FormFieldInputProps) {
  const form = useFormContext();

  return (
    <FormField
      name={name}
      control={form.control}
      render={({ field }) => (
        <FormItem>
          <FormLabel htmlFor={name} className="form-label mb-1 capitalize">
            {label}
          </FormLabel>
          <FormControl>
            <Input
              id={name}
              type={type}
              {...field}
              placeholder={placeholder}
              required
              className={cn("form-input")}
              autoComplete="off"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default FormFieldInput;
