import ReactDOM from 'react-dom/client'
import React from 'react'
import './index.css'
import { AppProvider } from './providers/app';
import './App.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AppProvider></AppProvider>
    </React.StrictMode>
);
