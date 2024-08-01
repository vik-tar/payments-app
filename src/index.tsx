import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import SidebarProvider from "./helpers/providers/SidebarProvider";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <SidebarProvider>
      <App />
    </SidebarProvider>
  </React.StrictMode>
);
