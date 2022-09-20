import { UseFormRegister } from "react-hook-form";

export type CardProps = {
  id?: string;
  type: "radio" | "checkbox";
  label?: string;
  value?: string;
  logo?: string;
  textStyles?: string;
  name?: string;
  register: UseFormRegister;
};
