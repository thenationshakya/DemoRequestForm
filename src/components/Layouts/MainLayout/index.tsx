// context
import { usePageState } from "context/pages.context";

// types
import { MainLayoutProps } from "./types";

const MainLayout = ({ children }: MainLayoutProps) => {
  const { page } = usePageState();

  function calculateProgress() {
    switch (page) {
      case 0:
        return "w-0";
      case 1:
        return "w-[12.5%]";
      case 2:
        return "w-[25%]";
      case 3:
        return "w-[37.5%]";
      case 4:
        return "w-[50%]";
      case 5:
        return "w-[62.5%]";
      case 6:
        return "w-[75%]";
      case 7:
        return "w-[87.5%]";
      case 8:
        return "w-full";
      default:
        return null;
    }
  }

  return (
    <main className={"bg-primary-cloud min-h-screen py-[180px] relative"}>
      <div
        className={`${calculateProgress()} absolute top-0 left-0 h-3 bg-primary-sky transition-all`}
      />
      <div className="max-w-[940px] mx-auto px-5 text-center flex flex-col justify-center items-center">
        <img
          src={require("../../../assets/logo.png")}
          alt="Site Logo"
          className="mb-9"
        />
        {children}
      </div>
    </main>
  );
};

export default MainLayout;
