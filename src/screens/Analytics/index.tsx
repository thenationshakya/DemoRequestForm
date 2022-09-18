// components
import Card from "components/Card";
import SpinLoader from "components/SpinLoader";
import { NavButtonsLayout, QuestionLayout } from "components/Layouts";

// hooks
import useFetch from "hooks/useFetch";

// typess
import { AnaltyicsResponse } from "./types";

const Analytics = () => {
  const { response, isLoading, error } =
    useFetch<AnaltyicsResponse>("analytics");

  if (error) {
    return <p>Error while fetching data. Please try again later.</p>;
  }

  if (isLoading) {
    return <SpinLoader />;
  }
  return (
    <QuestionLayout title={response?.title} subtitle={response?.subtitle}>
      <div className="grid w-full grid-cols-3 gap-x-12 gap-y-9">
        {response?.options.map((option, i) => (
          <Card
            key={i}
            value={option?.value}
            logo={`analytic-tools/${option.src}`}
            textStyles={"text-lg max-w-4 font-semibold"}
          />
        ))}
      </div>
      <NavButtonsLayout />
    </QuestionLayout>
  );
};

export default Analytics;
