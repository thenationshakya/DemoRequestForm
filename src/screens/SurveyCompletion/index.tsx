// components
import SpinLoader from "components/SpinLoader";
import { QuestionLayout } from "components/Layouts";

// hooks
import useFetch from "hooks/useFetch";

// types
import { SurveyCompletionResponse } from "./types";

const SurveyCompletion = () => {
  const { response, isLoading, error } =
    useFetch<SurveyCompletionResponse>("end-page");

  if (error) {
    return <p>Error while fetching data. Please try again later.</p>;
  }

  if (isLoading) {
    return <SpinLoader />;
  }

  return (
    <QuestionLayout disablePageCount>
      <h2 className="text-xl font-semibold text-primary-midnight leading-[1.18] max-w-[450px]">
        {response?.title}
      </h2>
    </QuestionLayout>
  );
};

export default SurveyCompletion;
