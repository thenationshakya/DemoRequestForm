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
import { OperatingSystemResponse } from "./types";

// global
import { OsValidationSchema } from "global/validations";

const OperatingSystem = () => {
  const { response, error, isLoading } =
    useFetch<OperatingSystemResponse>("operating-system");

  const { setPage } = usePageState();
  const { formData, setValues } = useFormData();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      os: formData.os,
    },
    resolver: yupResolver(OsValidationSchema),
  });

  if (error) {
    return <p>Error while fetching data. Please try again later.</p>;
  }

  if (isLoading) {
    return <SpinLoader />;
  }

  const onSubmit = (e: { os: string }) => {
    setValues({ os: e.os });
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
        {errors.os?.message && (
          <ErrorMessage errorMessage={errors.os.message} />
        )}
        <NavButtonsLayout />
      </form>
    </QuestionLayout>
  );
};

export default OperatingSystem;
