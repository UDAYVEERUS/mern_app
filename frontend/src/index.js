import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { ChakraProvider, createStandaloneToast } from '@chakra-ui/react';
const {ToastContainer} = createStandaloneToast()
const store = createStore(reducers, applyMiddleware(thunk))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
    <Provider store={store}>
      <App />
      <ToastContainer />
    </Provider>
    </ChakraProvider>
  </React.StrictMode>
);
