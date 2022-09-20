const ErrorMessage = ({ errorMessage }: { errorMessage: string }) => {
  return (
    <p className="mt-2 text-red-600 capitalize text-center">{errorMessage}</p>
  );
};

export default ErrorMessage;
