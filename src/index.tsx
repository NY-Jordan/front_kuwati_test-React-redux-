import React from 'react';
import ReactDOM from 'react-dom/client';
import './Assets/css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux"
import { store } from './Redux/Store/store';
import { ThemeProvider, createMuiTheme } from '@mui/material';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
  );

const THEME = createMuiTheme({
    typography: {
     "fontFamily": `Cantarell`,
    }
 });

root.render(
  <ThemeProvider theme={THEME}>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
