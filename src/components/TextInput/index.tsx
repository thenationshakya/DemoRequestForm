import { TextInputProps } from "./types";

const TextInput = ({ placeholder, inputStyles }: TextInputProps) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={`w-full placeholder-primary-shadow max-w-[720px] rounded-[1px]  border-b-[1.33px] border-t-0 border-l-0 border-r-0 border-primary-fog px-5 py-4 ${inputStyles}`}
    />
  );
};

export default TextInput;
