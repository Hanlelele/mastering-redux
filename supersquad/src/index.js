import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

import { configureStore } from '@reduxjs/toolkit'

//import { createStore } from 'redux';
import { Provider } from 'react-redux'

import rootReducer from './reducers';
import { addCharacterById } from './actions';

const store = configureStore({
  reducer: rootReducer
});

console.log(store.getState());

store.subscribe(() => console.log('store', store.getState()));
store.dispatch(addCharacterById(2));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
