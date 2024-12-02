import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

import { Provider } from 'react-redux';
import store from './store/store';

import '@fontsource/cormorant';
import '@fontsource/cormorant/500.css';
import '@fontsource/inter/400.css';

import './styles/variablesTheme/variablesTheme.scss';

const root = createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
