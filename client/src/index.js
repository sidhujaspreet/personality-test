import "bootstrap/dist/css/bootstrap.css";
import "jquery";
import "bootstrap";
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import App from './app/App';
import configureStore from "./app/store/store";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={configureStore()}>
      <App/>
    </Provider>,
    document.getElementById('root'));

serviceWorker.unregister();
