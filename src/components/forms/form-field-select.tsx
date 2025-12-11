import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFormContext } from "react-hook-form";

function FormFieldSelect({
  name,
  label,
  placeholder = "",
  options,
}: FormFieldSelectProps) {
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
            <Select value={field.value} onValueChange={field.onChange} required>
              <SelectTrigger className="select-trigger">
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent className="border-gray-600 bg-gray-800 text-white">
                {options.map((op) => (
                  <SelectItem
                    className="capitalize focus:bg-gray-600 focus:text-white"
                    key={op.value}
                    value={op.value}
                  >
                    {op.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default FormFieldSelect;
