export type ButtonProps = {
  buttonText: string;
  containerStyle?: string;
  buttonType?: "solid" | "outline";
  disabled?: boolean;
  onClick: () => void;
};
