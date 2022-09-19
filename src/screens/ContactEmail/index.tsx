// packages
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

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
import { ContactResponse } from "./types";

// global
import { ContactValidationSchema } from "global/validations";

const ContactEmail = () => {
  const { setPage } = usePageState();
  const { setValues, formData } = useFormData();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      contact: formData.contact,
    },
    resolver: yupResolver(ContactValidationSchema),
  });

  const { response, isLoading, error } = useFetch<ContactResponse>("contact");

  if (error) {
    return <p>Error while fetching data. Please try again later.</p>;
  }

  if (isLoading) {
    return <SpinLoader />;
  }

  const onSubmit = (e: { contact: string }) => {
    setValues({
      contact: e.contact,
    });
    setPage((page) => page + 1);
  };

  return (
    <QuestionLayout title={response?.title}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center w-full"
      >
        <TextInput
          errorMessage={errors.contact?.message}
          register={register}
          name="contact"
          placeholder={response?.input.placeholder}
          inputStyles="mt-12"
        />
        <Button
          buttonText="Submit survey"
          isSubmit
          containerStyle={"text-md py-3 px-8 mt-[82px]"}
        />
      </form>
    </QuestionLayout>
  );
};

export default ContactEmail;
