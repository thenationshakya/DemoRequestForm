// types
import { QuestionLayoutProps } from "./types";

// context
import { usePageState } from "../../../context/pages.context";

const QuestionLayout = ({
  children,
  title,
  subtitle,
  disablePageCount,
}: QuestionLayoutProps) => {
  const { page } = usePageState();

  return (
    <section className="flex flex-col items-center justify-center w-full">
      {!disablePageCount && (
        <h6 className="font-medium tracking-[0.2em] uppercase roboto text-primary-sky mb-12">
          {`QUESTION ${page}/7`}
        </h6>
      )}
      <h2 className="text-xl font-semibold text-primary-midnight max-w-[715px]  leading-[1.18]">
        {title}
      </h2>
      {subtitle && (
        <p className="mb-12 text-md text-primary-storm">{subtitle}</p>
      )}
      {children}
    </section>
  );
};

export default QuestionLayout;
