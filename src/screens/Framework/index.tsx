// components
import Card from "components/Card";
import SpinLoader from "components/SpinLoader";
import { NavButtonsLayout, QuestionLayout } from "components/Layouts";

// hooks
import useFetch from "hooks/useFetch";

// types
import { FrameworkResponse } from "./types";
import { useForm } from "react-hook-form";
import { usePageState } from "context/pages.context";

const Framework = () => {
  const { response, isLoading, error } =
    useFetch<FrameworkResponse>("framework");
  const { setPage } = usePageState();

  const { register, handleSubmit } = useForm();

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
    <QuestionLayout title={response?.title} titleStyles={"max-w-[460px]"}>
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid w-full grid-cols-3 mt-16 gap-x-12 gap-y-9">
          {response?.options.map((option, i) => (
            <Card
              register={register}
              key={i}
              value={option?.value}
              label={option.value}
              logo={`framework/${option.src}`}
              textStyles={"text-lg max-w-4 font-semibold"}
              type="radio"
              name="framework"
            />
          ))}
        </div>
        <NavButtonsLayout />
      </form>
    </QuestionLayout>
  );
};

export default Framework;
