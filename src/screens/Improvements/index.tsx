// components
import SpinLoader from "components/SpinLoader";
import { NavButtonsLayout, QuestionLayout } from "components/Layouts";

// hooks
import useFetch from "hooks/useFetch";

// types
import { ImprovementResponse } from "./types";
import CheckBox from "components/CheckBox";
import { useForm } from "react-hook-form";
import { usePageState } from "context/pages.context";

const Improvements = () => {
  const { response, isLoading, error } =
    useFetch<ImprovementResponse>("improvements");
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
    <QuestionLayout title={response?.title} subtitle={response?.subtitle}>
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-x-16 gap-y-6">
          {response?.options.map((option, i) => (
            <CheckBox
              value={option.value}
              name="improvements"
              key={i}
              register={register}
            />
          ))}
        </div>
        <NavButtonsLayout />
      </form>
    </QuestionLayout>
  );
};

export default Improvements;
