import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementBy } from './store/slices/counter';

import reactLogo from './assets/react.svg';
import './App.css';

function App() {


  const { counter } = useSelector( state => state.counter )
  const dispatch = useDispatch();


  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
          <p>count is { counter }</p>
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispatch( increment() ) }>
          Increment
        </button>

        <button onClick={() => dispatch( incrementBy(2) ) }>
          Increment By 
        </button>

        <button onClick={() => dispatch( decrement() ) }>
          Decrement
        </button>

      </div>
    </>
  )
}

export default App
