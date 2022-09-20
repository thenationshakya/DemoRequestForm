// packages
import { useForm } from "react-hook-form";

// components
import CheckBox from "components/CheckBox";
import SpinLoader from "components/SpinLoader";
import { NavButtonsLayout, QuestionLayout } from "components/Layouts";

// hooks
import useFetch from "hooks/useFetch";
import { usePageState } from "context/pages.context";

// types
import { ImprovementResponse } from "./types";
import { useFormData } from "context/formData.context";
import { yupResolver } from "@hookform/resolvers/yup";
import { ImprovementsValidationSchema } from "global/validations";
import ErrorMessage from "components/ErrorMessage";

const Improvements = () => {
  const { response, isLoading, error } =
    useFetch<ImprovementResponse>("improvements");
  const { formData, setValues } = useFormData();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      improvements: formData.improvements,
    },
    resolver: yupResolver(ImprovementsValidationSchema),
  });
  const { setPage } = usePageState();

  if (error) {
    return <p>Error while fetching data. Please try again later.</p>;
  }

  if (isLoading) {
    return <SpinLoader />;
  }

  const onSubmit = (e: { improvements: string[] }) => {
    setValues({
      improvements: e.improvements,
    });
    setPage((page) => page + 1);
  };

  return (
    <QuestionLayout title={response?.title} subtitle={response?.subtitle}>
      <form className="w-full max-w-[715px]" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid xs:grid-cols-2 gap-x-16 gap-y-6">
          {response?.options.map((option, i) => (
            <CheckBox
              id={option.id}
              label={option.value}
              name="improvements"
              key={i}
              register={register}
            />
          ))}
        </div>
        {errors.improvements?.message && (
          <ErrorMessage errorMessage={errors.improvements.message} />
        )}
        <NavButtonsLayout />
      </form>
    </QuestionLayout>
  );
};

export default Improvements;
