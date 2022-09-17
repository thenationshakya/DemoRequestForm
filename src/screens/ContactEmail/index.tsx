// components
import Button from "../../components/Button";
import { QuestionLayout } from "../../components/Layouts";

// context
import { usePageState } from "../../context/pages.context";

const ContactEmail = () => {
  const { setPage } = usePageState();
  return (
    <QuestionLayout title="ContactEmail">
      <div>ContactEmail</div>
      <Button
        buttonText="Continue"
        onClick={() => setPage((page) => page + 1)}
      />
    </QuestionLayout>
  );
};

export default ContactEmail;
