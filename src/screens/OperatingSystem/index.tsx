// components
import Card from "components/Card";
import SpinLoader from "components/SpinLoader";
import { NavButtonsLayout, QuestionLayout } from "components/Layouts";

// hooks
import useFetch from "hooks/useFetch";

// types
import { OperatingSystemResponse } from "./types";

const OperatingSystem = () => {
  const { response, error, isLoading } =
    useFetch<OperatingSystemResponse>("operating-system");

  if (error) {
    return <p>Error while fetching data. Please try again later.</p>;
  }

  if (isLoading) {
    return <SpinLoader />;
  }

  return (
    <QuestionLayout title={response?.title}>
      <div className="grid w-3/4 grid-cols-2 gap-12 mt-16">
        {response?.options.map((option, i) => (
          <Card
            key={i}
            label={option.value}
            logo={`mobile-os/${option.src}`}
            type={"radio"}
            name={"os"}
            id={option.id}
          />
        ))}
      </div>
      <NavButtonsLayout />
    </QuestionLayout>
  );
};

export default OperatingSystem;
