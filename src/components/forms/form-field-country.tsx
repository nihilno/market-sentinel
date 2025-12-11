"use client";

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
import { countryCodeToEmoji } from "@/lib/utils";
import { countries } from "countries-list";
import { useFormContext } from "react-hook-form";

function FormFieldCountry({
  name,
  label,
  placeholder = "",
}: FormFieldCountryProps) {
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
                {Object.entries(countries).map(([code, data]) => (
                  <SelectItem
                    key={code}
                    value={code}
                    className="flex items-center gap-1"
                  >
                    {countryCodeToEmoji(code)} <span>{data.name}</span>
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

export default FormFieldCountry;
