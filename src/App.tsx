import "./styles/App.scss";

// components
import Button from "./components/Button";

function App() {
  return (
    <div className="text-purple-500">
      <Button
        onClick={() => console.log("Button clicked")}
        buttonText="Continue"
        buttonType="outline"
      />
    </div>
  );
}

export default App;
