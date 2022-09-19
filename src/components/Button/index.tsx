// types
import { ButtonProps } from "./types";

const Button = ({
  buttonText,
  buttonType,
  containerStyle,
  disabled,
  onClick,
  isSubmit,
}: ButtonProps) => {
  return (
    <button
      type={isSubmit ? "submit" : "button"}
      disabled={disabled}
      onClick={(e) => onClick && onClick(e)}
      className={`${
        buttonType === "outline"
          ? "bg-transparent text-primary-sky border-2 border-primary-sky hover:text-primary-midnight hover:border-primary-midnight"
          : "bg-primary-sky text-primary-snow hover:bg-primary-midnight"
      }  px-6 py-2 text-md transition-colors duration-500 rounded-[32px] ${
        disabled && "opacity-60"
      } ${containerStyle}`}
    >
      {buttonText}
    </button>
  );
};

export default Button;
