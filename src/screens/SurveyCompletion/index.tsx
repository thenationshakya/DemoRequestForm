// components
import SpinLoader from "components/SpinLoader";
import { QuestionLayout } from "components/Layouts";

// hooks
import useFetch from "hooks/useFetch";

const SurveyCompletion = () => {
  const { response, isLoading, error } = useFetch("end-page");

  if (error) {
    return <p>Error while fetching data. Please try again later.</p>;
  }

  if (isLoading) {
    return <SpinLoader />;
  }

  return <QuestionLayout title={response?.title} disablePageCount />;
};

export default SurveyCompletion;
