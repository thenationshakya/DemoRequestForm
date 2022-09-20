// components
import Button from "components/Button";
import SpinLoader from "components/SpinLoader";

// hooks
import useFetch from "hooks/useFetch";
import { usePageState } from "context/pages.context";

// types
import { InitialPageResponse } from "./types";

const InitialPage = () => {
  const { setPage } = usePageState();

  const { response, isLoading, error } =
    useFetch<InitialPageResponse>("initial-page");

  if (error) {
    return <p>Error while fetching data. Please try again later.</p>;
  }

  if (isLoading) {
    return <SpinLoader />;
  }

  return (
    <>
      <h1 className="text-lg md:text-xxl font-semibold text-primary-midnight max-w-[715px]  leading-[1.18]">
        {response?.title}
      </h1>
      <p className="mt-6 mb-8 text-sm md:mb-12 roboto text-primary-midnight md:text-md">
        {response?.subtitle}
      </p>
      <h2 className="mb-8 font-semibold leading-snug md:mb-16 text-md md:text-xl text-primary-sky">
        {response?.message}
      </h2>
      <Button
        buttonText="Continue"
        onClick={() => setPage((page) => page + 1)}
        containerStyle={"text-center min-w-[172px]"}
      />
    </>
  );
};

export default InitialPage;
