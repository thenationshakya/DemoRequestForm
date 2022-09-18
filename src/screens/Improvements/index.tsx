// components
import SpinLoader from "components/SpinLoader";
import { NavButtonsLayout, QuestionLayout } from "components/Layouts";

// hooks
import useFetch from "hooks/useFetch";

// types
import { ImprovementResponse } from "./types";
import CheckBox from "components/CheckBox";

const Improvements = () => {
  const { response, isLoading, error } =
    useFetch<ImprovementResponse>("improvements");

  if (error) {
    return <p>Error while fetching data. Please try again later.</p>;
  }

  if (isLoading) {
    return <SpinLoader />;
  }

  return (
    <QuestionLayout title={response?.title} subtitle={response?.subtitle}>
      <div className="grid grid-cols-2 gap-x-16 gap-y-6">
        {response?.options.map((option, i) => (
          <CheckBox
            value={option.value}
            isChecked={true}
            key={i}
            handleOnChange={() => console.log("check")}
          />
        ))}
      </div>
      <NavButtonsLayout />
    </QuestionLayout>
  );
};

export default Improvements;
