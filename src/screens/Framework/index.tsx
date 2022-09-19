// components
import Card from "components/Card";
import SpinLoader from "components/SpinLoader";
import { NavButtonsLayout, QuestionLayout } from "components/Layouts";

// hooks
import useFetch from "hooks/useFetch";

// types
import { FrameworkResponse } from "./types";

const Framework = () => {
  const { response, isLoading, error } =
    useFetch<FrameworkResponse>("framework");

  if (error) {
    return <p>Error while fetching data. Please try again later.</p>;
  }

  if (isLoading) {
    return <SpinLoader />;
  }
  return (
    <QuestionLayout title={response?.title} titleStyles={"max-w-[460px]"}>
      <div className="grid w-full grid-cols-3 mt-16 gap-x-12 gap-y-9">
        {response?.options.map((option, i) => (
          <Card
            key={i}
            value={option?.value}
            label={option.value}
            logo={`framework/${option.src}`}
            textStyles={"text-lg max-w-4 font-semibold"}
            type="radio"
            name="framework"
          />
        ))}
      </div>
      <NavButtonsLayout />
    </QuestionLayout>
  );
};

export default Framework;
