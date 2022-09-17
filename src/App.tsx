import "./styles/App.scss";

// components
import Layout from "./components/Layout";
import QuestionLayout from "./components/QuestionLayout";

function App() {
  return (
    <Layout>
      <QuestionLayout title="Title Question" subtitle="subtitle">
        <h1>Hello</h1>
      </QuestionLayout>
    </Layout>
  );
}

export default App;
