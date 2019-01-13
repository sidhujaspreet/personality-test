import "bootstrap/dist/css/bootstrap.css";
import "jquery";
import "bootstrap";
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import App from './App';
import configureStore from "./store/store";

ReactDOM.render(
    <Provider store={configureStore()}>
      <App/>
    </Provider>,
    document.getElementById('root'));
if (module.hot) {
  module.hot.accept();
}
