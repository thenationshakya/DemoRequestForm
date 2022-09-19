export type ButtonProps = {
  buttonText: string;
  containerStyle?: string;
  buttonType?: "solid" | "outline";
  disabled?: boolean;
  isSubmit?: boolean;
  onClick?: (e?: React.MouseEvent) => void;
  formId?: string;
};
