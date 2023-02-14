import "./App.css";
import ToDoContainer from "./components/to-do-container/to-do-container";
import "./firebase/firebase";

function App() {
  return (
    <div className="flex justify-center items-center">
      <ToDoContainer />
    </div>
  );
}

export default App;
