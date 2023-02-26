import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { AppLocaleProvider } from './providers/AppLocaleProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <AppLocaleProvider>
      <App />
    </AppLocaleProvider>
  </React.StrictMode>,
);
