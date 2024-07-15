import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { Control, FieldValues, Path } from "react-hook-form";

type InputType<T extends FieldValues> = {
  placeholder: string;
  name: Path<T>;
  control: Control<T>;
  data: string[];
};

function FormSelect<T extends FieldValues>({
  placeholder,
  name,
  data,
  control,
}: InputType<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {data.map((item: string, index: number) => {
                return (
                  <SelectItem key={index} value={item}>
                    {item}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default FormSelect;
