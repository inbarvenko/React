import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/App/App';
import { Provider } from 'react-redux';
import { store } from './store';
import './styles/style.css'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Provider store={store}><App/></Provider>);