import "./styles/App.scss";

// components
import Layout from "./Layout";
import Button from "./components/Button";

function App() {
  return (
    <Layout>
      <Button
        onClick={() => console.log("Button clicked")}
        buttonText="Continue"
        buttonType="outline"
      />
    </Layout>
  );
}

export default App;
