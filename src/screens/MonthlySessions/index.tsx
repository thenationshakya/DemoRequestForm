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
import { SessionResponse } from "./types";

// global
import { SessionsValidationSchema } from "global/validations";

const MonthlySessions = () => {
  const { response, isLoading, error } = useFetch<SessionResponse>("sessions");

  const { formData, setValues } = useFormData();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      session: formData.sessions,
    },
    resolver: yupResolver(SessionsValidationSchema),
  });
  const { setPage } = usePageState();

  if (error) {
    return <p>Error while fetching data. Please try again later.</p>;
  }

  if (isLoading) {
    return <SpinLoader />;
  }

  const onSubmit = (e: { session: string }) => {
    setPage((page) => page + 1);
    setValues({
      sessions: e.session,
    });
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
              textStyles={"text-xxxl"}
              id={option.id}
            />
          ))}
        </div>
        {errors.session?.message && (
          <ErrorMessage errorMessage={errors.session.message} />
        )}
        <NavButtonsLayout />
      </form>
    </QuestionLayout>
  );
};

export default MonthlySessions;
