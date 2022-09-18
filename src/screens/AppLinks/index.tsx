// components
import TextInput from "components/TextInput";
import SpinLoader from "components/SpinLoader";
import { NavButtonsLayout, QuestionLayout } from "components/Layouts";

// hooks
import useFetch from "hooks/useFetch";

// types
import { AppLinksResponse } from "./types";

const AppLinks = () => {
  const { response, isLoading, error } = useFetch<AppLinksResponse>("applinks");

  if (error) {
    return <p>Error while fetching data. Please try again later.</p>;
  }

  if (isLoading) {
    return <SpinLoader />;
  }

  return (
    <QuestionLayout title={response?.title} subtitle={response?.subtitle}>
      <TextInput placeholder={response?.input.placeholder} />
      <NavButtonsLayout />
    </QuestionLayout>
  );
};

export default AppLinks;
