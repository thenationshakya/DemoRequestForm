import Button from "../../components/Button";

const InitialPage = () => {
  return (
    <>
      <h1 className="text-xxl font-semibold text-primary-midnight max-w-[715px]  leading-[1.18]">
        Thank you for requesting a UXCam quote.
      </h1>
      <p className="mt-6 mb-12 roboto text-primary-midnight text-md">
        Just one more thing before you go:
      </p>
      <h2 className="mb-16 text-xl font-semibold leading-snug text-primary-sky">
        To help us tailor a plan to your needs, please answer the following
        questions. It will only take 2 minutes!
      </h2>
      <Button
        buttonText="Continue"
        onClick={() => console.log("onClick")}
        containerStyle={"text-center min-w-[172px]"}
      />
    </>
  );
};

export default InitialPage;
