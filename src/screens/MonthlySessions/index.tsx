// components
import SpinLoader from "components/SpinLoader";
import { NavButtonsLayout, QuestionLayout } from "components/Layouts";

// hooks
import useFetch from "hooks/useFetch";

// types
import { SessionResponse } from "./types";
import Card from "components/Card";

const MonthlySessions = () => {
  const { response, isLoading, error } = useFetch<SessionResponse>("sessions");

  if (error) {
    return <p>Error while fetching data. Please try again later.</p>;
  }

  if (isLoading) {
    return <SpinLoader />;
  }
  return (
    <QuestionLayout
      title={response?.title}
      subtitle={response?.subtitle}
      titleStyles={"max-w-[550px]"}
    >
      <div className="grid w-full grid-cols-3 gap-x-12 gap-y-9">
        {response?.options.map((option, i) => (
          <Card key={i}>
            <h3 className="font-semibold text-xxxl">{option.value}</h3>
          </Card>
        ))}
      </div>
      <NavButtonsLayout />
    </QuestionLayout>
  );
};

export default MonthlySessions;
