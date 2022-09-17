import { MainLayoutProps } from "./types";

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <main className="bg-primary-cloud min-h-screen py-[180px]">
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
