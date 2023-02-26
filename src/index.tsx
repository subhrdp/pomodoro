import React from 'react';
import ReactDOM from 'react-dom/client';
import 'modern-normalize';
import Context from 'context';
import App from 'components/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Context>
      <App />
    </Context>
  </React.StrictMode>
);
