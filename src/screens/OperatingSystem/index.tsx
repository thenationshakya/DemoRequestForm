import { useForm } from "react-hook-form";

// components
import Card from "components/Card";
import SpinLoader from "components/SpinLoader";
import { NavButtonsLayout, QuestionLayout } from "components/Layouts";

// hooks
import useFetch from "hooks/useFetch";

// types
import { OperatingSystemResponse } from "./types";
import { usePageState } from "context/pages.context";

const OperatingSystem = () => {
  const { response, error, isLoading } =
    useFetch<OperatingSystemResponse>("operating-system");

  const { setPage } = usePageState();

  const { handleSubmit, register } = useForm({
    defaultValues: {
      os: "ios",
    },
  });

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
    <QuestionLayout title={response?.title}>
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid w-3/4 grid-cols-2 gap-12 mt-16 mx-auto">
          {response?.options.map((option, i) => (
            <Card
              register={register}
              key={i}
              label={option.value}
              logo={`mobile-os/${option.src}`}
              type={"radio"}
              name={"os"}
              id={option.id}
            />
          ))}
        </div>
        <NavButtonsLayout />
      </form>
    </QuestionLayout>
  );
};

export default OperatingSystem;
