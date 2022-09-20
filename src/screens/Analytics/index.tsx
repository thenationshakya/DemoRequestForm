// packages
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// components
import Card from "components/Card";
import SpinLoader from "components/SpinLoader";
import ErrorMessage from "components/ErrorMessage";
import { NavButtonsLayout, QuestionLayout } from "components/Layouts";

// hooks
import useFetch from "hooks/useFetch";
import { usePageState } from "context/pages.context";
import { useFormData } from "context/formData.context";

// types
import { AnaltyicsResponse } from "./types";

// validations
import { AnalyticsValidationSchema } from "global/validations";

const Analytics = () => {
  const { response, isLoading, error } =
    useFetch<AnaltyicsResponse>("analytics");
  const { formData, setValues } = useFormData();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      analytics: formData.analytics,
    },
    resolver: yupResolver(AnalyticsValidationSchema),
  });

  const { setPage } = usePageState();

  if (error) {
    return <p>Error while fetching data. Please try again later.</p>;
  }

  if (isLoading) {
    return <SpinLoader />;
  }

  const onSubmit = (e: { analytics: string[] }) => {
    setValues({
      analytics: e.analytics,
    });
    setPage((page) => page + 1);
  };

  return (
    <QuestionLayout title={response?.title} subtitle={response?.subtitle}>
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid w-full grid-cols-1 gap-2 lg:grid-cols-3 sm:grid-cols-2 sm:gap-8 md:gap-x-12 md:gap-y-9">
          {response?.options.map((option, i) => (
            <Card
              id={option.id}
              register={register}
              key={i}
              label={option.value}
              logo={`analytic-tools/${option.src}`}
              textStyles={"text-lg max-w-4 font-semibold"}
              type={"checkbox"}
              name="analytics"
            />
          ))}
        </div>
        {errors.analytics?.message && (
          <ErrorMessage errorMessage={errors.analytics.message} />
        )}
        <NavButtonsLayout />
      </form>
    </QuestionLayout>
  );
};

export default Analytics;
