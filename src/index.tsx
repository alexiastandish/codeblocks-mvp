import { StrictMode } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './index.css';
import App from './App';
import StoreProvider from 'store/StoreProvider';

const root = ReactDOMClient.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </StrictMode>
);
