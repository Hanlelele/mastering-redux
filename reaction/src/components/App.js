import { useReducer } from 'react'
import reducer, { initialState } from "../state/reducer";
import PublishMessage from './PublishMessage';
import MessageBoard from './MessageBoard';
// eslint-disable-next-line
import context from '../context';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log('state', state);

  return (
    <context.Provider value={{ state, dispatch }} className="App">
      <h2>Reaction</h2>
      <hr />
      <PublishMessage />
      <hr />
      <MessageBoard />
    </context.Provider>
  );
}

export default App;
