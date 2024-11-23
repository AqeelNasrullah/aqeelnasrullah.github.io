import { FC, InputHTMLAttributes } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface IInputField extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const InputField: FC<IInputField> = ({ label, ...rest }) => {
  return (
    <div className="mb-3">
      <Label htmlFor={rest.id}>{label}</Label>
      <Input {...rest} />
    </div>
  );
};

export default InputField;
