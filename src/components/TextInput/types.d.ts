import { HTMLInputTypeAttribute } from "react";
import { UseFormRegister } from "react-hook-form";

export type TextInputProps = {
  name: string;
  register: UseFormRegister;
  placeholder?: string;
  inputStyles?: string;
  value?: string;
  type?: HTMLInputTypeAttribute;
  errorMessage?: string;
};
