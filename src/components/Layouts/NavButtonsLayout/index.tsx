// components
import Button from "../../Button";

// types
import { NavButtonsLayoutProps } from "./types";

// context
import { usePageState } from "../../../context/pages.context";

const NavButtonsLayout = ({ continueDisabled }: NavButtonsLayoutProps) => {
  const { setPage } = usePageState();

  return (
    <div className="flex justify-between gap-2 w-full max-w-[690px] mx-auto mt-[50px]">
      <Button
        buttonText="Back"
        buttonType="outline"
        onClick={() => setPage((page) => page - 1)}
        containerStyle={"text-xs"}
      />
      <Button
        buttonText="Continue"
        buttonType="solid"
        onClick={() => setPage((page) => page + 1)}
        containerStyle={"text-xs"}
        disabled={continueDisabled}
      />
    </div>
  );
};

export default NavButtonsLayout;
