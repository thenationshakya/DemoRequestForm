// context
import { usePageState } from "context/pages.context";

// types
import { MainLayoutProps } from "./types";

const MainLayout = ({ children }: MainLayoutProps) => {
  const { page } = usePageState();

  return (
    <main className={"bg-primary-cloud min-h-screen py-[180px] relative"}>
      <div
        className={`absolute top-0 left-0 h-3 bg-primary-sky transition-all`}
        style={{ width: `${(100 / 8) * page}%` }}
      />
      <div className="max-w-[1100px] mx-auto px-5 text-center flex flex-col justify-center items-center">
        <img
          src={require("assets/logo.png")}
          alt="Site Logo"
          className="mb-9"
        />
        {children}
      </div>
    </main>
  );
};

export default MainLayout;
