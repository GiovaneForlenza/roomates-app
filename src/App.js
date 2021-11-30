import "./App.scss";
import ExpensesTrack from "./Components/ExpenseTrack/ExpensesTrack";
import "./Components/Spacer";
import { AppContextProvider } from "./Contexts/AppContext";

function App() {
  return (
    <div className="container">
      <AppContextProvider>
        <ExpensesTrack />
      </AppContextProvider>
    </div>
  );
}

export default App;
