// components
import Button from "../../Button";

// types
import { NavButtonsLayoutProps } from "./types";

const NavButtonsLayout = ({ onBack, onContinue }: NavButtonsLayoutProps) => {
  return (
    <div className="flex justify-between gap-2 w-full max-w-[690px] mx-auto mt-[50px]">
      <Button
        buttonText="Back"
        buttonType="outline"
        onClick={onBack}
        containerStyle={"text-xs"}
      />
      <Button
        buttonText="Continue"
        buttonType="solid"
        onClick={onContinue}
        containerStyle={"text-xs"}
      />
    </div>
  );
};

export default NavButtonsLayout;
