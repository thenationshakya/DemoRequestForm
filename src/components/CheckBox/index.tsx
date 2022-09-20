import { CheckBoxProps } from "./types";

const CheckBox = ({ id, label, name, register }: CheckBoxProps) => {
  return (
    <div className="flex items-start gap-x-6 max-w-[329px]">
      <input
        type="checkbox"
        id={id}
        name={name}
        value={label}
        {...register(name)}
        className="checked:bg-primary-sky checked:bg-none "
      />
      <label htmlFor={id} className="-mt-1 text-left">
        {label}
      </label>
    </div>
  );
};

export default CheckBox;
