// packages
import { useForm } from "react-hook-form";

// components
import Button from "components/Button";
import TextInput from "components/TextInput";
import SpinLoader from "components/SpinLoader";
import { QuestionLayout } from "components/Layouts";

// hooks
import useFetch from "hooks/useFetch";
import { usePageState } from "context/pages.context";
import { useFormData } from "context/formData.context";

// types
import { AppLinksResponse } from "./types";

const AppLinks = () => {
  const { setValues, formData } = useFormData();
  const { setPage } = usePageState();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      app_link: formData.app_link,
    },
  });

  const { response, isLoading, error } = useFetch<AppLinksResponse>("applinks");

  if (error) {
    return <p>Error while fetching data. Please try again later.</p>;
  }

  if (isLoading) {
    return <SpinLoader />;
  }

  const onSubmit = (e: { app_link: string }) => {
    setValues({
      app_link: e.app_link,
    });
    setPage((page) => page + 1);
  };

  return (
    <QuestionLayout title={response?.title} subtitle={response?.subtitle}>
      <form onSubmit={handleSubmit(onSubmit)} className={"w-full"}>
        <TextInput
          register={register}
          name="app_link"
          placeholder={response?.input.placeholder}
        />
        <div className="flex justify-between gap-2 w-full max-w-[690px] mx-auto mt-[50px]">
          <Button
            buttonText="Back"
            buttonType="outline"
            onClick={() => setPage((page) => page - 1)}
            isSubmit
            containerStyle={"text-xs"}
          />
          <Button buttonText="Continue" isSubmit containerStyle={"text-xs"} />
        </div>
      </form>
    </QuestionLayout>
  );
};

export default AppLinks;
