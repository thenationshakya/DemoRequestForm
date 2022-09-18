// type
import { CardProps } from "./types";

const Card = ({ children, isSelected, logo, value, textStyles }: CardProps) => {
  return (
    <div
      className={`w-full bg-white py-7 px-9 gap-4 items-center cursor-pointer flex ${
        isSelected && "border-2 border-primary-sky"
      }`}
    >
      {logo && (
        <img
          src={require(`assets/${logo}`)}
          alt={value}
          className="object-contain w-[50px] h-16"
        />
      )}
      {value && (
        <h3 className={`text-xl font-semibold ${textStyles}`}>{value}</h3>
      )}
      {children}
    </div>
  );
};

export default Card;
