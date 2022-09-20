// packages
import { useForm } from "react-hook-form";

// components
import Card from "components/Card";
import SpinLoader from "components/SpinLoader";
import { NavButtonsLayout, QuestionLayout } from "components/Layouts";

// hooks
import useFetch from "hooks/useFetch";

// typess
import { AnaltyicsResponse } from "./types";
import { usePageState } from "context/pages.context";

const Analytics = () => {
  const { response, isLoading, error } =
    useFetch<AnaltyicsResponse>("analytics");
  const { handleSubmit, register } = useForm({
    defaultValues: {
      analytics: [""],
    },
  });

  const { setPage } = usePageState();

  if (error) {
    return <p>Error while fetching data. Please try again later.</p>;
  }

  if (isLoading) {
    return <SpinLoader />;
  }

  const onSubmit = () => {
    console.log("analytics");
    setPage((page) => page + 1);
  };

  return (
    <QuestionLayout title={response?.title} subtitle={response?.subtitle}>
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid w-full grid-cols-3 gap-x-12 gap-y-9">
          {response?.options.map((option, i) => (
            <Card
              register={register}
              key={i}
              label={option.value}
              value={option?.value}
              logo={`analytic-tools/${option.src}`}
              textStyles={"text-lg max-w-4 font-semibold"}
              type={"checkbox"}
              name="analytics"
            />
          ))}
        </div>
        <NavButtonsLayout />
      </form>
    </QuestionLayout>
  );
};

export default Analytics;
