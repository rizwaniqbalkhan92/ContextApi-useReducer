import logo from './logo.svg';
import './App.css';
import ContextCounter from './Components/ContextCounter/ContextCounter';
import Counter from './Components/CounterReducer/Counter';

function App() {
  return (
    <div className="App">
      <ContextCounter/>
      <Counter/>
    </div>
  );
}

export default App;
