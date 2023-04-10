import React from 'react'
import ReactDOM from 'react-dom/client'
import { createStore } from 'redux';
import App from './Components/App';
import { rootReducer } from './redux/rootReducer';
import { Provider } from 'react-redux';

//using redux instead of redux-toolkit
const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Provider store={store}><App/></Provider>);