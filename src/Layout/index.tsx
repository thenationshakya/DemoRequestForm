import { LayoutProps } from "./types";

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="bg-primary-cloud min-h-screen py-[180px]">
      <div className="max-w-[940px] mx-auto px-5 text-center flex flex-col justify-center items-center">
        <img
          src={require("../assets/logo.png")}
          alt="Site Logo"
          className="mb-9"
        />
        <h6 className="font-medium tracking-[0.2em] uppercase roboto text-primary-sky mb-12">
          QUESTION 1/7
        </h6>
        {children}
      </div>
    </main>
  );
};

export default Layout;
