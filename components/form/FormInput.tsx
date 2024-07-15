import React from "react";
import { FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { Control, FieldValues, Path } from "react-hook-form";
import { Input } from "../ui/input";

type InputType<T extends FieldValues> = {
  placeholder: string;
  type: string;
  name: Path<T>;
  control: Control<T>;
};

function FormInput<T extends FieldValues>({
  type,
  placeholder,
  name,
  control,
}: InputType<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Input type={type} placeholder={placeholder} {...field} />
          </FormControl>
          <FormMessage className="text-sm" />
        </FormItem>
      )}
    />
  );
}

export default FormInput;
