import logo from './logo.svg';
import './App.css';
import Count from './Component/Count';
import {useDispatch} from 'react-redux'
import { type } from '@testing-library/user-event/dist/type';

function App() {

  const dispatch = useDispatch();
  return (
    <div className="App">
      <button onClick={(e)=> dispatch({type: 'INCREMENT'})}>INCREMENT</button>
      <Count/>
      <button onClick={ (e)=> dispatch({type:'DECREMENT'})}>DECEREMENT</button>
    </div>
  );
}

export default App;
