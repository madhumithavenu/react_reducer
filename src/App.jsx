import './App.css';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  function increment() {
    dispatch({ type: 'INC' });
  }
  function decrement() {
    dispatch({ type: 'DEC' })
  }
  function reset(){
    dispatch({type: 'RES'})
  }
  return (
    <div className="app">
      <h1 className='heading'>Counter app</h1>
      <h2>{counter}</h2>
      <button className='brown-pill' onClick={increment}>Increment</button>
      <button className='green-pill' onClick={decrement}>Decrement</button>
      <button className='blue-pill' onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
