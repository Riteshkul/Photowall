import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/stylesheet.css'
import { createStore,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducer'
import Main from './components/Main';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import { database } from './database/config';

const store=createStore(rootReducer,applyMiddleware(thunk));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <BrowserRouter>
  <Main/>
  </BrowserRouter>
  </React.StrictMode>
  </Provider>
);
