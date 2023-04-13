import React from 'react'
import ReactDOM from 'react-dom/client'
import { createStore } from 'redux';
import App from './Components/App/App';
import { rootReducer } from './redux/rootReducer';
import { Provider } from 'react-redux';
import './styles/style.css'

const store = createStore(rootReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Provider store={store}><App/></Provider>);