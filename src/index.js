import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { LoggedInProvider } from './contexts/LoggedIn';
import { LoadingProvider } from './contexts/Loading';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <LoggedInProvider>
      <LoadingProvider>
        <App />
      </LoadingProvider>
      </LoggedInProvider>
    </BrowserRouter>
);

