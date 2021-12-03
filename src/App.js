import "./App.scss";
import Home from "./Pages/Home";
import "./Components/Spacer";
import { AppContextProvider } from "./Contexts/AppContext";
import { ExpenseContextProvider } from "./Contexts/ExpenseContext";
import { CreateExpenseContextProvider } from "./Contexts/CreateExpenseContext";

function App() {
  return (
    <div className="container">
      <AppContextProvider>
        <ExpenseContextProvider>
          <CreateExpenseContextProvider>
            <Home />
          </CreateExpenseContextProvider>
        </ExpenseContextProvider>
      </AppContextProvider>
    </div>
  );
}

export default App;
