// types
import { QuestionLayoutProps } from "./types";

const QuestionLayout = ({
  children,
  title,
  subtitle,
  totalPages,
  activePageNumber,
}: QuestionLayoutProps) => {
  return (
    <section className="flex flex-col items-center justify-center">
      {activePageNumber && (
        <h6 className="font-medium tracking-[0.2em] uppercase roboto text-primary-sky mb-12">
          QUESTION {activePageNumber}/{totalPages}
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
