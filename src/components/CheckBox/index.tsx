import { CheckBoxProps } from "./types";

const CheckBox = ({ value, name, register }: CheckBoxProps) => {
  return (
    <div className="flex items-start gap-x-6 max-w-[329px]">
      <input
        type="checkbox"
        id={value}
        name={name}
        {...register(name)}
        className="checked:bg-primary-sky checked:bg-none "
      />
      <label htmlFor={value} className="-mt-1 text-left">
        {value}
      </label>
    </div>
  );
};

export default CheckBox;
