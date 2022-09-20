// type
import { CardProps } from "./types";

const Card = ({
  id,
  logo,
  value,
  textStyles,
  type,
  name,
  label,
  register,
}: CardProps) => {
  return (
    <div>
      <input
        type={type}
        className="hidden peer"
        name={name}
        id={id}
        value={label}
        {...register(name)}
      />
      <label
        htmlFor={id}
        className={`w-full bg-white py-7 px-9  cursor-pointer flex items-center gap-4
        border-2 border-transparent peer-checked:border-primary-sky`}
      >
        {logo && (
          <img
            src={require(`assets/${logo}`)}
            alt={label}
            className="object-contain w-[50px] h-16"
          />
        )}
        {label && (
          <h3 className={`text-xl font-semibold ${textStyles}`}>{label}</h3>
        )}
      </label>
    </div>
  );
};

export default Card;
