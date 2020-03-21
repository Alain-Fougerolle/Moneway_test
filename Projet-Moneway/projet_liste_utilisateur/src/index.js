import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import Store from './store/configureStore';

render(
    <Provider store={Store}>
        <App />
    </Provider>, 
    document.querySelector('#root')
);

serviceWorker.unregister();