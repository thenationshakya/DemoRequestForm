export type ButtonProps = {
  buttonText: string;
  containerStyle?: string;
  buttonType?: "solid" | "outline";
  onClick: () => void;
};
