import { MuiThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';

ReactDOM.render(
    <MuiThemeProvider>
        <App />
    </MuiThemeProvider>,
    document.getElementById('root')
);
registerServiceWorker();
