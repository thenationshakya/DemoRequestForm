import "./styles/App.scss";

// components
import {
  NavButtonsLayout,
  QuestionLayout,
  MainLayout,
} from "./components/Layouts";

// screens
import InitialPage from "./screens/InitialPage";

function App() {
  return (
    <MainLayout>
      <InitialPage />
      {/* <NavButtonsLayout
        onBack={() => console.log("OnBack")}
        onContinue={() => console.log("onContinue")}
      /> */}
    </MainLayout>
  );
}

export default App;
