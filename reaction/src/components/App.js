import { useEffect, useReducer } from 'react'
import reducer, { initialState } from "../state/reducer";
import PublishMessage from './PublishMessage';
import PubSub from '../pubnub';
import MessageBoard from './MessageBoard';
// eslint-disable-next-line
import context from '../context';
import SetUsername from './SetUsername';

const pubsub = new PubSub();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    pubsub.addListener({
      message: messageObject => {
        const { channel, message } = messageObject;
    
        console.log('Received message', message, 'channel', channel);
    
        dispatch(message)
      }
    });
  }, []);

  console.log('state', state);

  return (
    <context.Provider value={{ state, dispatch, pubsub}} className="App">
      <h2>Reaction</h2>
      <SetUsername />
      <hr />
      <PublishMessage />
      <hr />
      <MessageBoard />
    </context.Provider>
  );
}

export default App;
