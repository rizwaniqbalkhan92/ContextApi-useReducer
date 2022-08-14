import logo from './logo.svg';
import './App.css';
import ContextCounter from './Components/ContextCounter/ContextCounter';
import Counter from './Components/CounterReducer/Counter';
import ExpenseTracker from './Components/ExpenseTracker.js/ExpenseTracker';
import Tracker from './Components/ExpenseTracker.js/Tracker';

function App() {
  return (
    <div className="App">
      {/* <ContextCounter/>
      <Counter/> */}
      <Tracker />
    </div>
  );
}

export default App;
