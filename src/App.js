import "./App.scss";
import Home from "./Pages/Home";
import "./Components/Spacer";
import { AppContextProvider } from "./Contexts/AppContext";
import { ExpenseContextProvider } from "./Contexts/ExpenseContext";

function App() {
  return (
    <div className="container">
      <AppContextProvider>
        <ExpenseContextProvider>
          <Home />
        </ExpenseContextProvider>
      </AppContextProvider>
    </div>
  );
}

export default App;
