// components
import SpinLoader from "components/SpinLoader";
import { NavButtonsLayout, QuestionLayout } from "components/Layouts";

// hooks
import useFetch from "hooks/useFetch";

// types
import { SessionResponse } from "./types";
import Card from "components/Card";
import { useForm } from "react-hook-form";
import { usePageState } from "context/pages.context";

const MonthlySessions = () => {
  const { response, isLoading, error } = useFetch<SessionResponse>("sessions");
  const { register, handleSubmit } = useForm();
  const { setPage } = usePageState();

  if (error) {
    return <p>Error while fetching data. Please try again later.</p>;
  }

  if (isLoading) {
    return <SpinLoader />;
  }

  const onSubmit = () => {
    setPage((page) => page + 1);
  };
  return (
    <QuestionLayout
      title={response?.title}
      subtitle={response?.subtitle}
      titleStyles={"max-w-[550px]"}
    >
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid w-full grid-cols-3 gap-x-12 gap-y-9">
          {response?.options.map((option, i) => (
            <Card
              register={register}
              label={option.value}
              key={i}
              type="radio"
              name="session"
              value={option.value}
              textStyles={"text-xxxl"}
            />
          ))}
        </div>
        <NavButtonsLayout />
      </form>
    </QuestionLayout>
  );
};

export default MonthlySessions;
