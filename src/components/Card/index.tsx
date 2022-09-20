// type
import { CardProps } from "./types";

const Card = ({
  id,
  logo,
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
        className={`w-full bg-white py-5 px-6 md:py-7 md:px-9 cursor-pointer flex items-center gap-4
        border-2 border-transparent peer-checked:border-primary-sky`}
      >
        {logo && (
          <img
            src={require(`assets/${logo}`)}
            alt={label}
            className="object-contain w-8 h-10  md:w-[50px] md:h-16"
          />
        )}
        {label && (
          <h3 className={`text-md md:text-lg font-semibold ${textStyles}`}>
            {label}
          </h3>
        )}
      </label>
    </div>
  );
};

export default Card;
