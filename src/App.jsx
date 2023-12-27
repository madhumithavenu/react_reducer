import './App.css';
import { useSelector } from 'react-redux';

function App() {
  const counter = useSelector((state) => state.counter);
  function increment(){
    
  }
  function decrement(){

  }
  return (
    <div className="App">
      <h1>Counter app</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
