import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './App';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
} else {
  console.error("Root container missing in index.html");
}

reportWebVitals(console.log);