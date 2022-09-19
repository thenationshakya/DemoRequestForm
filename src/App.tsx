// styles
import "./styles/App.scss";

// components
import { MainLayout } from "./components/Layouts";

// screens
import Framework from "./screens/Framework";
import InitialPage from "./screens/InitialPage";
import OperatingSystem from "./screens/OperatingSystem";

// context
import AppLinks from "./screens/AppLinks";
import Analytics from "./screens/Analytics";
import Improvements from "./screens/Improvements";
import ContactEmail from "./screens/ContactEmail";
import MonthlySessions from "./screens/MonthlySessions";
import SurveyCompletion from "./screens/SurveyCompletion";

// context
import { FormDataProvider } from "context/formData.context";
import { PageDataProvider, usePageState } from "./context/pages.context";

function App() {
  const ScreenRender = () => {
    const { page } = usePageState();

    switch (page) {
      case 0:
        return <InitialPage />;

      case 1:
        return <OperatingSystem />;

      case 2:
        return <Framework />;

      case 3:
        return <MonthlySessions />;

      case 4:
        return <Analytics />;

      case 5:
        return <AppLinks />;

      case 6:
        return <Improvements />;

      case 7:
        return <ContactEmail />;

      case 8:
        return <SurveyCompletion />;

      default:
        return <InitialPage />;
    }
  };

  return (
    <PageDataProvider>
      <FormDataProvider>
        <MainLayout>
          <ScreenRender />
        </MainLayout>
      </FormDataProvider>
    </PageDataProvider>
  );
}

export default App;
