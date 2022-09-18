// components
import Button from "components/Button";
import TextInput from "components/TextInput";
import SpinLoader from "components/SpinLoader";
import { QuestionLayout } from "components/Layouts";

// hooks
import useFetch from "hooks/useFetch";
import { usePageState } from "context/pages.context";

// types
import { ContactResponse } from "./types";

const ContactEmail = () => {
  const { response, isLoading, error } = useFetch<ContactResponse>("contact");
  const { setPage } = usePageState();

  if (error) {
    return <p>Error while fetching data. Please try again later.</p>;
  }

  if (isLoading) {
    return <SpinLoader />;
  }

  return (
    <QuestionLayout title={response?.title}>
      <TextInput
        placeholder={response?.input.placeholder}
        inputStyles="mt-12"
      />
      <Button
        buttonText="Submit survey"
        onClick={() => setPage((page) => page + 1)}
        containerStyle={"text-md py-3 px-8 mt-[82px]"}
      />
    </QuestionLayout>
  );
};

export default ContactEmail;
