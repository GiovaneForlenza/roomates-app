import "./App.scss";
import ExpensesTrack from "./Components/ExpenseTrack/ExpensesTrack";
import "./Components/Spacer";
import { AppContextProvider } from "./Contexts/AppContext";
import { ExpenseContextProvider } from "./Contexts/ExpenseContext";

function App() {
  return (
    <div className="container">
      <AppContextProvider>
        <ExpenseContextProvider>
          <ExpensesTrack />
        </ExpenseContextProvider>
      </AppContextProvider>
    </div>
  );
}

export default App;
