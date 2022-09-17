import "./styles/App.scss";

// components
import {
  NavButtonsLayout,
  QuestionLayout,
  MainLayout,
} from "./components/Layouts";

function App() {
  return (
    <MainLayout>
      <QuestionLayout title="Title Question" subtitle="subtitle">
        <h1>Hello</h1>
      </QuestionLayout>
      <NavButtonsLayout
        onBack={() => console.log("OnBack")}
        onContinue={() => console.log("onContinue")}
      />
    </MainLayout>
  );
}

export default App;
