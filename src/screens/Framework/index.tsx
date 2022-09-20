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
import { FrameworkResponse } from "./types";

// globals
import { FrameworkValidationSchema } from "global/validations";

const Framework = () => {
  const { response, isLoading, error } =
    useFetch<FrameworkResponse>("framework");
  const { setPage } = usePageState();
  const { formData, setValues } = useFormData();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      framework: formData.framework,
    },
    resolver: yupResolver(FrameworkValidationSchema),
  });

  if (error) {
    return <p>Error while fetching data. Please try again later.</p>;
  }

  if (isLoading) {
    return <SpinLoader />;
  }

  const onSubmit = (e: { framework: string }) => {
    setValues({ framework: e.framework });
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
              label={option.value}
              logo={`framework/${option.src}`}
              textStyles={"text-lg max-w-4 font-semibold"}
              type="radio"
              name="framework"
              id={option.id}
            />
          ))}
        </div>
        {errors.framework?.message && (
          <ErrorMessage errorMessage={errors.framework.message} />
        )}
        <NavButtonsLayout />
      </form>
    </QuestionLayout>
  );
};

export default Framework;
