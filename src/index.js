import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyProvider from './Component/Context/ContextProvider';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <MyProvider>
    <App />
    </MyProvider>
);
reportWebVitals();
