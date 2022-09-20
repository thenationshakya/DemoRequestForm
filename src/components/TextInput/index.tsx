import { TextInputProps } from "./types";

const TextInput = ({
  placeholder,
  inputStyles,
  name,
  register,
  type,
  errorMessage,
}: TextInputProps) => {
  return (
    <>
      <input
        {...register(name)}
        type={type || "text"}
        name={name}
        placeholder={placeholder}
        className={`w-full placeholder-primary-shadow max-w-[720px] rounded-[1px]  border-b-[1.33px] border-t-0 border-l-0 border-r-0 border-primary-fog px-5 py-4 ${inputStyles}`}
      />
      {errorMessage && (
        <p className="mt-2 text-left text-red-600 capitalize">{errorMessage}</p>
      )}
    </>
  );
};

export default TextInput;
